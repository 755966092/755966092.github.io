import React, { useState } from "react";
import { Form, Input, Button, Table } from "antd";

type ResultRow = {
  key: number;
  original: number;
  coupon: number;
  ratio: number;
  final: number;
  discountPrice?: number;
  discountCoupon?: number;
  discountFinal?: number;
  discountDiff?: number;
  discountFinalDiff?: number;
};

const Taobao: React.FC = () => {
  const [result, setResult] = useState<ResultRow[]>([]);

  const columns = [
    {
      title: "原价",
      dataIndex: "original",
      key: "original",
      render: (value: number) => value,
      onCell: () => ({
        style: { backgroundColor: "yellow" }
      })
    },
    { title: "加成比例", dataIndex: "ratio", key: "ratio", render: (r: number) => `${r.toFixed(2)}x` },
    {
      title: "加成金额",
      dataIndex: "coupon",
      key: "coupon",
      render: (_: any, row: ResultRow) => {
        const rounded = Math.round(row.coupon);
        const isRed = rounded % 10 === 0 || rounded % 10 === 1 || rounded % 10 === 9;
        return (
          <span style={isRed ? { backgroundColor: "red", color: "white", padding: 10, fontWeight: 800 } : {}}>
            {rounded}
            <span style={{ fontSize: 12, marginLeft: 4 }}>({row.coupon.toFixed(2)})</span>
          </span>
        );
      }
    },
    {
      title: "最终价格",
      dataIndex: "final",
      key: "final",
      onCell: () => ({
        style: { backgroundColor: "yellow" }
      }),
      render: (_: any, row: ResultRow) => {
        const rounded = Math.round(row.final);
        return (
          <>
            {rounded}
            <span style={{ fontSize: 12, color: "#888", marginLeft: 4 }}>({row.final.toFixed(2)})</span>
          </>
        );
      }
    },
    {
      title: "折后价",
      dataIndex: "discountPrice",
      key: "discountPrice",
      render: (_: any, row: ResultRow) =>
        row.discountPrice === undefined ? (
          ""
        ) : (
          <>
            {Math.round(row.discountPrice)}
            <span style={{ fontSize: 12, color: "#888", marginLeft: 4 }}>({row.discountPrice.toFixed(2)})</span>
          </>
        )
    },
    {
      title: "折后等比优惠券",
      dataIndex: "discountCoupon",
      key: "discountCoupon",
      render: (_: any, row: ResultRow) => {
        if (row.discountCoupon === undefined) return "";
        const rounded = Math.round(row.discountCoupon);
        const isRed = rounded % 10 === 0 || rounded % 10 === 1 || rounded % 10 === 9;
        return (
          <span style={isRed ? { backgroundColor: "red", color: "white", padding: 10, fontWeight: 800 } : {}}>
            {rounded}
            <span style={{ fontSize: 12, marginLeft: 4 }}>({row.discountCoupon.toFixed(2)})</span>
          </span>
        );
      }
    },
    {
      title: "折后最终价",
      dataIndex: "discountFinal",
      key: "discountFinal",
      onCell: () => ({ style: { backgroundColor: "yellow" } }),
      render: (_: any, row: ResultRow) =>
        row.discountFinal === undefined ? (
          ""
        ) : (
          <>
            {Math.round(row.discountFinal)}
            <span style={{ fontSize: 12, color: "#888", marginLeft: 4 }}>({row.discountFinal.toFixed(2)})</span>
          </>
        )
    },
    {
      title: "折后价-原价",
      dataIndex: "discountDiff",
      key: "discountDiff",
      render: (_: any, row: ResultRow) =>
        row.discountDiff === undefined ? (
          ""
        ) : (
          <>
            {Math.round(row.discountDiff)}
            <span style={{ fontSize: 12, color: "#888", marginLeft: 4 }}>({row.discountDiff.toFixed(2)})</span>
          </>
        )
    },
    {
      title: "折后最终价-原价",
      dataIndex: "discountFinalDiff",
      key: "discountFinalDiff",
      render: (_: any, row: ResultRow) =>
        row.discountFinalDiff === undefined ? (
          ""
        ) : (
          <>
            {Math.round(row.discountFinalDiff)}
            <span style={{ fontSize: 12, color: "#888", marginLeft: 4 }}>({row.discountFinalDiff.toFixed(2)})</span>
          </>
        )
    }
  ];

  const onFinish = (values: { minCoupon: string; price: string; discount?: string; discountMinCoupon?: string }) => {
    let prices = values.price
      .split(" ")
      .map((v) => Number(v))
      .filter((v) => !isNaN(v) && v > 0);

    prices = Array.from(new Set(prices)).sort((a, b) => a - b);

    const min = Number(values.minCoupon);
    const discount = values.discount ? Number(values.discount) : undefined;
    const discountMinCoupon = values.discountMinCoupon ? Number(values.discountMinCoupon) : undefined;

    if (isNaN(min) || min <= 0 || prices.length === 0) {
      setResult([]);
      return;
    }

    const minPrice = prices[0];

    // 先算最终价和折后价
    let discountPrices: (number | undefined)[] = [];
    let minDiscountPrice: number | undefined = undefined;
    if (discount && discount > 0 && discount <= 100) {
      discountPrices = prices.map((p) => {
        const ratio = p / minPrice;
        const coupon = Math.round(min * ratio * 100) / 100;
        const final = Math.round((p + coupon) * 100) / 100;
        return Math.round(final * (discount / 100) * 100) / 100;
      });
      minDiscountPrice = Math.min(...(discountPrices as number[]));
    }

    const data = prices.map((p, idx) => {
      const ratio = p / minPrice;
      const coupon = Math.round(min * ratio * 100) / 100;
      const final = Math.round((p + coupon) * 100) / 100;
      let discountPrice: number | undefined = undefined;
      let discountCouponVal: number | undefined = undefined;
      let discountFinal: number | undefined = undefined;
      let discountDiff: number | undefined = undefined;
      let discountFinalDiff: number | undefined = undefined;

      if (discount && discount > 0 && discount <= 100) {
        discountPrice = Math.round(final * (discount / 100) * 100) / 100;
        discountDiff = Math.round((discountPrice - p) * 100) / 100;
        if (discountMinCoupon && discountMinCoupon > 0 && minDiscountPrice) {
          const discountRatio = discountPrice / minDiscountPrice;
          discountCouponVal = Math.round(discountMinCoupon * discountRatio * 100) / 100;
          discountFinal = Math.round((discountPrice - discountCouponVal) * 100) / 100;
          discountFinalDiff = Math.round((discountFinal - p) * 100) / 100;
        }
      }

      return {
        key: idx,
        original: p,
        coupon,
        ratio,
        final,
        discountPrice,
        discountCoupon: discountCouponVal,
        discountFinal,
        discountDiff,
        discountFinalDiff
      };
    });

    setResult(data);
  };

  return (
    <div>
      <h1>淘宝</h1>
      <Form
        layout="inline"
        onFinish={onFinish}
        style={{ marginBottom: 24 }}
        initialValues={{ minCoupon: "", price: "", discount: "", discountMinCoupon: "" }}
      >
        <Form.Item label="最低优惠券" name="minCoupon" rules={[{ required: true, message: "请输入最低优惠券" }]}>
          <Input placeholder="输入最低优惠券" />
        </Form.Item>
        <Form.Item label="价格(空格分隔)" name="price" rules={[{ required: true, message: "请输入价格" }]}>
          <Input placeholder="如: 50 100 200" />
        </Form.Item>
        <Form.Item
          label="折扣"
          name="discount"
          rules={[{ pattern: /^(100|[1-9]?\d)?$/, message: "请输入1-100之间的数字" }]}
        >
          <Input placeholder="如: 88 表示88折" />
        </Form.Item>
        <Form.Item label="折后最低优惠券" name="discountMinCoupon" rules={[]}>
          <Input placeholder="输入折后最低优惠券" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            提交
          </Button>
        </Form.Item>
      </Form>

      <Table
        columns={columns}
        dataSource={result}
        pagination={false}
        bordered
        style={{ maxWidth: 1200, background: "#fffbe6" }}
      />
    </div>
  );
};

export default Taobao;
