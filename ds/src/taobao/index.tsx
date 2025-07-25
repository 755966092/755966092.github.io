import React, { useEffect, useState } from "react";
import { Form, Input, Button, Table, Typography, Space } from "antd";

type ResultRow = {
  key: number;
  original: number;
  coupon?: number;
  ratio?: number;
  final?: number;
  discountPrice?: number;
  discountCoupon?: number;
  discountFinal?: number;
  discountDiff?: number;
  discountFinalDiff?: number;
  pricePosition?: string;
};

const { Text } = Typography;
const Taobao: React.FC = () => {
  const [result, setResult] = useState<ResultRow[]>([]);
  const [form] = Form.useForm();

  const [discountValue, setDiscountValue] = useState<string>("");
  const [arr, setArr] = useState<ResultRow[]>([]);
  const [excelFormula, setExcelFormula] = useState<string>("");
  const [manjian, setManjian] = useState<string>("");
  useEffect(() => {
    form.setFieldsValue({
      pricePosition: "D2"
    });
  }, []);

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
    {
      title: "加成比例",
      dataIndex: "ratio",
      key: "ratio",
      render: (_: unknown, row: ResultRow) => (row.ratio === undefined ? "" : `${row.ratio.toFixed(2)}x`)
    },
    {
      title: "加成金额",
      dataIndex: "coupon",
      key: "coupon",
      render: (_: unknown, row: ResultRow) => {
        if (row.coupon === undefined) return "";
        const rounded = Math.round(row.coupon);
        const isRed = rounded % 10 === 0 || rounded % 10 === 1 || rounded % 10 === 9;
        const isSelected = arr.some((item) => item.key === row.key);
        return (
          <span
            style={{
              ...(isRed ? { backgroundColor: "red", color: "white", padding: 10, fontWeight: 800 } : { padding: 10 }),
              ...(isSelected ? { outline: "4px solid #1890ff" } : {})
            }}
            onClick={() => handleArr(row)}
          >
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
      onCell: () => ({ style: { backgroundColor: "yellow" } }),
      render: (_: unknown, row: ResultRow) =>
        row.final === undefined ? (
          ""
        ) : (
          <>
            {Math.round(row.final)}
            <span style={{ fontSize: 12, color: "#888", marginLeft: 4 }}>({row.final.toFixed(2)})</span>
          </>
        )
    },
    {
      title: "折后价",
      dataIndex: "discountPrice",
      key: "discountPrice",
      render: (_: unknown, row: ResultRow) =>
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
      render: (_: unknown, row: ResultRow) => {
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
      render: (_: unknown, row: ResultRow) =>
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
      render: (_: unknown, row: ResultRow) =>
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
      render: (_: unknown, row: ResultRow) =>
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

  const generateExcelFormula = (arr: ResultRow[]) => {
    if (arr.length === 0) return "";
    const pricePosition = form.getFieldValue("pricePosition");
    let formula = `=${pricePosition}`;
    let manjian = "";
    arr.forEach((row, idx) => {
      if (idx === 0) {
        formula += ` + IF(${pricePosition} <= ${Math.round(row.original)}, ${Math.round(row.coupon ?? 0)} `;
        manjian += `满 ${Math.round(row.original)} 减 ${Math.round(row.coupon ?? 0)}`;
      } else {
        formula += `, IF(${pricePosition} <= ${Math.round(row.original)}, ${Math.round(row.coupon ?? 0)} `;
        manjian += `, 满 ${Math.round(row.original)} 减 ${Math.round(row.coupon ?? 0)}`;
      }
    });
    formula += ", " + (Math.round(arr[arr.length - 1].coupon ?? 0) ?? 0) + ")".repeat(arr.length);
    manjian += `, 满 ${Math.round(arr[arr.length - 1].original)} 减 ${Math.round(arr[arr.length - 1].coupon ?? 0)}`;
    setManjian(manjian);
    setExcelFormula(formula);
  };

  const handleArr = (record: ResultRow) => {
    const existingIndex = arr.findIndex((item) => item.original === record.original);
    if (existingIndex === -1) {
      const newArr = [...arr, record].sort((a, b) => a.original - b.original);
      generateExcelFormula(newArr);
      setArr(newArr);
    } else {
      const newArr = arr.filter((_, index) => index !== existingIndex);
      generateExcelFormula(newArr);
      setArr(newArr);
    }
  };

  const onFinish = (values: { minCoupon?: string; price: string; discount?: string; discountMinCoupon?: string }) => {
    let prices = values.price
      .split(" ")
      .map((v) => Number(v))
      .filter((v) => !isNaN(v) && v > 0);

    setArr([]);
    setExcelFormula("");
    prices = Array.from(new Set(prices)).sort((a, b) => a - b);

    const min = values.minCoupon ? Number(values.minCoupon) : undefined;
    const discount = values.discount ? Number(values.discount) : undefined;
    const discountMinCoupon = values.discountMinCoupon ? Number(values.discountMinCoupon) : undefined;

    if (prices.length === 0) {
      setResult([]);
      return;
    }

    const minPrice = prices[0];

    let discountPrices: (number | undefined)[] = [];
    let minDiscountPrice: number | undefined = undefined;
    // 只输入价格和折扣时，直接用原价*折扣
    if ((!min || min <= 0) && discount && discount > 0 && discount <= 100) {
      discountPrices = prices.map((p) => Math.round(p * (discount / 100) * 100) / 100);
      minDiscountPrice = Math.min(...(discountPrices as number[]));
    } else if (min !== undefined && min > 0 && discount && discount > 0 && discount <= 100) {
      discountPrices = prices.map((p) => {
        const ratio = p / minPrice;
        const coupon = Math.round(min * ratio * 100) / 100;
        const final = Math.round((p + coupon) * 100) / 100;
        return Math.round(final * (discount / 100) * 100) / 100;
      });
      minDiscountPrice = Math.min(...(discountPrices as number[]));
    }

    const data = prices.map((p, idx) => {
      let ratio: number | undefined = undefined;
      let coupon: number | undefined = undefined;
      let final: number | undefined = undefined;
      let discountPrice: number | undefined = undefined;
      let discountCouponVal: number | undefined = undefined;
      let discountFinal: number | undefined = undefined;
      let discountDiff: number | undefined = undefined;
      let discountFinalDiff: number | undefined = undefined;

      if (min !== undefined && min > 0) {
        ratio = p / minPrice;
        coupon = Math.round(min * ratio * 100) / 100;
        final = Math.round((p + coupon) * 100) / 100;
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
      } else if (discount && discount > 0 && discount <= 100) {
        // 只输入价格和折扣
        discountPrice = Math.round(p * (discount / 100) * 100) / 100;
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
      {arr.length > 0 && (
        <>
          <div style={{ marginBottom: 16, background: "#f6ffed", padding: 12, fontFamily: "monospace" }}>
            <b>Excel公式：</b>
            <Text copyable style={{ userSelect: "all" }}>
              {excelFormula}
            </Text>
          </div>
          <div style={{ marginBottom: 16, background: "#f6ffed", padding: 12, fontFamily: "monospace" }}>
            <b>满减：</b>
            <Text copyable style={{ userSelect: "all" }}>
              {manjian}
            </Text>
          </div>
        </>
      )}
      <Form
        form={form}
        layout="inline"
        onFinish={onFinish}
        style={{ marginBottom: 24 }}
        initialValues={{ minCoupon: "", price: "", discount: "", discountMinCoupon: "" }}
      >
        <Space wrap>
          <Form.Item label="价格(空格分隔)" name="price" rules={[{ required: true, message: "请输入价格" }]}>
            <Input placeholder="如: 50 100 200" />
          </Form.Item>
          <Form.Item label="最低优惠券" name="minCoupon" rules={[]}>
            <Input placeholder="输入最低优惠券" />
          </Form.Item>
          <Form.Item
            label="折扣"
            name="discount"
            rules={[{ pattern: /^(100|[1-9]?\d)?$/, message: "请输入1-100之间的数字" }]}
          >
            <Input placeholder="如: 88 表示88折" onChange={(e) => setDiscountValue(e.target.value)} />
          </Form.Item>
          <Form.Item label="折后最低优惠券" name="discountMinCoupon" rules={[]}>
            <Input placeholder="输入折后最低优惠券" disabled={!discountValue} />
          </Form.Item>
          <Form.Item label="价格位置" name="pricePosition" rules={[{ required: true, message: "请输入价格位置" }]}>
            <Input placeholder="输入价格位置" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              计算
            </Button>
          </Form.Item>
        </Space>
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
