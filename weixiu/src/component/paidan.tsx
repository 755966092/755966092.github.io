// 派单编号：［填写编号］
// 客户姓名：［客户姓名］
// 联系电话：［客户电话］，派单的时候隐藏，谁接再给谁发
// 地址：［客户地址］，派单的时候隐藏，谁接再给谁发

// 故障描述：
// ［简要描述空调故障情况，如"不制冷"、"漏水"、"异响"等］

// 预约时间：［安排上门维修的具体时间］
// 维修技术员：［维修人员姓名或编号］

// 维修备注：
// ［现场发现问题、需更换配件等补充说明］

//  这个组件的功能是生成派单内容,

//  1. 生成编号, 编号是YYMMDDHHMMSS, 比如20250818180000, 编号不可以修改
//  2. 客户姓名,自己填写,
//  3. 客户电话, 自己填写
//  4. 客户地址, 省市县选择, 加个输入框输入详细地址
//  5. 故障描述, 有个选择框, 选折后, 内容显示在输入框, 还可以单独在输入, 选择框内容如下: 不制冷, 漏水, 异响, 其他
//  6. 预约时间, 自己填写, 格式为: 2025-08-18 18:00:00
//  7. 维修技术员, 接单的写上自己姓名和手机号
//  8. 维修备注, 自己填写

//  输入完成后, 生成派单内容, 生成后,显示在一个输入框内, 有一个复制按钮, 可以复制派单内容, 复制后, 可以粘贴到微信聊天框, 也可以复制到其他地方,
//   复制后, 格式化存储在LocalStorage中,然后下方显示一个表格,表格内容为: 编号, 客户姓名, 客户电话, 客户地址, 故障描述, 预约时间, 维修技术员, 维修备注, 操作(复制, 这里的复制只是复制到剪贴板, 不是复制到表格)

import React, { useState, useEffect } from "react";
import {
  Form,
  Input,
  Select,
  Button,
  Card,
  Table,
  List,
  Space,
  message,
  Row,
  Col,
  Typography,
  DatePicker,
  Drawer,
  Tag,
  Avatar,
  Modal
} from "antd";
import {
  CopyOutlined,
  EyeOutlined,
  UserOutlined,
  PhoneOutlined,
  ClockCircleOutlined,
  CheckCircleOutlined
} from "@ant-design/icons";
import { dataCountry } from "../data";
import type { PaiDanData, PaiDanFormData, Province, City, Area } from "../types";
import dayjs from "dayjs";
import type { ColumnType } from "antd/es/table";

const { Title } = Typography;
const { TextArea } = Input;
const { Option } = Select;

// 故障描述选项
const repairEquipmentOptions = [
  { label: "空调", value: "空调" },
  { label: "冰箱", value: "冰箱" },
  { label: "洗衣机", value: "洗衣机" },
  { label: "水电维修", value: "水电维修" },
  { label: "地暖维修", value: "地暖维修" },
  { label: "其他", value: "其他" }
];
// 空调清洗、空调移机、空调安装、美的空调、海尔空调、三菱空调、松下空调、奥克斯空调、海信空调、TCL 空调、科龙空调、康佳空调、志高空调、华凌空调、小米空调、大金空调、长虹空调、格兰仕空调、吊顶式空调、方形形柜机空调维修安装清洗移机，空调扇维修，空调E6、空调各类代码、中央空调维修、空调漏水、空调异味，空调不制冷不制热、空调噪音、空调跳闸、空调按键失灵、空调加氟漏氟、空调不工作、空调外机空调没风、故障排查、售后服务等家电清洗、家电安装
// 水管维修、水管安装、水管漏水、卫生间漏水、厨房漏水、马桶维修、马桶安装、马桶漏水、洗手盆维修、洗手盆安装、洗手盆漏水、淋浴房维修、淋浴房安装、淋浴房漏水、电路维修、电路安装、灯具维修、灯具安装、开关维修、开关安装、插座维修、插座安装、跳闸维修、短路维修、故障排查、售后服务
// 地暖清洗、地暖安装、地暖漏水、地暖不热、地暖维修、地暖保养、地暖管道维修、地暖管道清洗、地暖管道更换、地暖温控器维修、地暖温控器更换、地暖分水器维修、地暖分水器更换、地暖回水不热、地暖循环泵维修、地暖循环泵更换、故障排查、售后服务
// 冰箱不制冷、冰箱漏水、冰箱噪音大、冰箱结冰、冰箱维修、冰箱保养、冰箱电路维修、冰箱温控器维修、冰箱压缩机更换、冰箱冷冻室故障维修、冰箱门封条更换、冰箱除霜、冰箱清洗、故障排查、售后服务
// 洗衣机不排水、洗衣机不脱水、洗衣机噪音大、洗衣机漏水、洗衣机维修、洗衣机保养、洗衣机电机维修、洗衣机电路板维修、洗衣机排水管更换、洗衣机故障排查、洗衣机门锁维修、更换配件、售后服务

// 根据维修电器类型定义对应的故障描述选项
const getEquipmentFaultOptions = (equipment: string) => {
  const faultOptionsMap: { [key: string]: { label: string; value: string }[] } = {
    空调: [
      { label: "不制冷", value: "不制冷" },
      { label: "不制热", value: "不制热" },
      { label: "漏水", value: "漏水" },
      { label: "异味", value: "异味" },
      { label: "噪音", value: "噪音" },
      { label: "跳闸", value: "跳闸" },
      { label: "按键失灵", value: "按键失灵" },
      { label: "加氟漏氟", value: "加氟漏氟" },
      { label: "不工作", value: "不工作" },
      { label: "外机没风", value: "外机没风" },
      { label: "E6故障", value: "E6故障" },
      { label: "其他故障代码", value: "其他故障代码" },
      { label: "需要清洗", value: "需要清洗" },
      { label: "需要移机", value: "需要移机" },
      { label: "需要安装", value: "需要安装" },
      { label: "其他", value: "其他" }
    ],
    冰箱: [
      { label: "不制冷", value: "不制冷" },
      { label: "漏水", value: "漏水" },
      { label: "噪音大", value: "噪音大" },
      { label: "结冰", value: "结冰" },
      { label: "电路故障", value: "电路故障" },
      { label: "温控器故障", value: "温控器故障" },
      { label: "压缩机故障", value: "压缩机故障" },
      { label: "冷冻室故障", value: "冷冻室故障" },
      { label: "门封条老化", value: "门封条老化" },
      { label: "需要除霜", value: "需要除霜" },
      { label: "需要清洗", value: "需要清洗" },
      { label: "其他", value: "其他" }
    ],
    洗衣机: [
      { label: "不排水", value: "不排水" },
      { label: "不脱水", value: "不脱水" },
      { label: "噪音大", value: "噪音大" },
      { label: "漏水", value: "漏水" },
      { label: "电机故障", value: "电机故障" },
      { label: "电路板故障", value: "电路板故障" },
      { label: "排水管堵塞", value: "排水管堵塞" },
      { label: "门锁故障", value: "门锁故障" },
      { label: "需要保养", value: "需要保养" },
      { label: "配件更换", value: "配件更换" },
      { label: "其他", value: "其他" }
    ],
    水电维修: [
      { label: "水管漏水", value: "水管漏水" },
      { label: "卫生间漏水", value: "卫生间漏水" },
      { label: "厨房漏水", value: "厨房漏水" },
      { label: "马桶故障", value: "马桶故障" },
      { label: "洗手盆故障", value: "洗手盆故障" },
      { label: "淋浴房故障", value: "淋浴房故障" },
      { label: "电路故障", value: "电路故障" },
      { label: "灯具故障", value: "灯具故障" },
      { label: "开关故障", value: "开关故障" },
      { label: "插座故障", value: "插座故障" },
      { label: "跳闸", value: "跳闸" },
      { label: "短路", value: "短路" },
      { label: "需要安装", value: "需要安装" },
      { label: "其他", value: "其他" }
    ],
    地暖维修: [
      { label: "地暖不热", value: "地暖不热" },
      { label: "地暖漏水", value: "地暖漏水" },
      { label: "回水不热", value: "回水不热" },
      { label: "管道故障", value: "管道故障" },
      { label: "温控器故障", value: "温控器故障" },
      { label: "分水器故障", value: "分水器故障" },
      { label: "循环泵故障", value: "循环泵故障" },
      { label: "需要清洗", value: "需要清洗" },
      { label: "需要保养", value: "需要保养" },
      { label: "需要安装", value: "需要安装" },
      { label: "其他", value: "其他" }
    ],
    其他: [
      { label: "不制冷", value: "不制冷" },
      { label: "漏水", value: "漏水" },
      { label: "异响", value: "异响" },
      { label: "其他", value: "其他" }
    ]
  };

  return faultOptionsMap[equipment] || faultOptionsMap["其他"];
};

const PaiDan: React.FC = () => {
  const [form] = Form.useForm<PaiDanFormData>();
  const [acceptForm] = Form.useForm();
  const [generatedContent, setGeneratedContent] = useState<string>("");
  const [paidanList, setPaidanList] = useState<PaiDanData[]>([]);
  const [cities, setCities] = useState<City[]>([]);
  const [counties, setCounties] = useState<Area[]>([]);
  const [drawerVisible, setDrawerVisible] = useState<boolean>(false);
  const [selectedRecord, setSelectedRecord] = useState<PaiDanData | null>(null);
  const [currentFaultOptions, setCurrentFaultOptions] = useState(getEquipmentFaultOptions("其他"));
  const [acceptModalVisible, setAcceptModalVisible] = useState<boolean>(false);
  const [currentAcceptRecord, setCurrentAcceptRecord] = useState<PaiDanData | null>(null);

  // 生成派单编号
  const generateOrderId = (): string => {
    const now = new Date();
    const year = now.getFullYear().toString().slice(-2);
    const month = (now.getMonth() + 1).toString().padStart(2, "0");
    const day = now.getDate().toString().padStart(2, "0");
    const hour = now.getHours().toString().padStart(2, "0");
    const minute = now.getMinutes().toString().padStart(2, "0");
    const second = now.getSeconds().toString().padStart(2, "0");

    return `${year}${month}${day}${hour}${minute}${second}`;
  };

  // 从localStorage加载历史派单
  useEffect(() => {
    const savedPaidanList = localStorage.getItem("paidanList");
    if (savedPaidanList) {
      setPaidanList(JSON.parse(savedPaidanList));
    }
  }, []);

  // 省份变化处理
  const handleProvinceChange = (value: string) => {
    const selectedProvince = dataCountry.find((province: Province) => province.name === value);
    if (selectedProvince) {
      setCities(selectedProvince.cityList);
      setCounties([]);
      form.setFieldsValue({ city: "", county: "" });
    }
  };

  // 城市变化处理
  const handleCityChange = (value: string) => {
    const selectedCity = cities.find((city: City) => city.name === value);
    if (selectedCity) {
      setCounties(selectedCity.areaList);
      form.setFieldsValue({ county: "" });
    }
  };

  // 维修电器变化处理
  const handleEquipmentChange = (value: string) => {
    const newFaultOptions = getEquipmentFaultOptions(value);
    setCurrentFaultOptions(newFaultOptions);
    // 清空故障描述
    form.setFieldsValue({ faultDescription: "" });
  };

  // 故障描述选择处理
  const handleFaultChange = (value: string) => {
    form.setFieldsValue({ faultDescription: value });
  };

  // 隐私保护处理函数
  const maskPhoneNumber = (phone: string): string => {
    if (!phone) return "";
    return phone.substring(0, 3) + "****";
  };

  // 生成派单内容（用于复制，包含隐私保护）
  const generatePaidanContentForCopy = (values: PaiDanFormData): string => {
    const orderId = generateOrderId();
    const maskedPhone = maskPhoneNumber(values.customerPhone);
    const addressForCopy = `${values.province}${values.city}${values.county}`; // 只显示省市县

    return `派单编号：${orderId}
客户姓名：${values.customerName}
联系电话：${maskedPhone}
地址：${addressForCopy}

故障描述：
${values.faultDescription}

预约时间：${values.appointmentTime}
维修技术员：- -

维修备注：
${values.remarks}`;
  };

  // 生成派单内容（用于显示，完整信息）
  const generatePaidanContent = (values: PaiDanFormData): string => {
    const orderId = generateOrderId();
    const fullAddress = `${values.province}${values.city}${values.county}${values.detailAddress}`;

    return `派单编号：${orderId}
客户姓名：${values.customerName}
联系电话：${values.customerPhone}
地址：${fullAddress}

故障描述：
${values.faultDescription}

预约时间：${values.appointmentTime}
维修技术员：- -

维修备注：
${values.remarks}`;
  };

  // 提交表单
  const handleSubmit = (values: PaiDanFormData) => {
    // 确保appointmentTime是字符串格式
    const formattedValues: PaiDanFormData = {
      ...values,
      appointmentTime: values.appointmentTime ? dayjs(values.appointmentTime).format("YYYY-MM-DD HH:mm:ss") : ""
    };

    const content = generatePaidanContent(formattedValues);
    setGeneratedContent(content);
    message.success("派单内容生成成功！");
  };

  // 复制派单内容
  const copyContent = async () => {
    if (!generatedContent) {
      message.warning("请先生成派单内容！");
      return;
    }

    try {
      // 使用隐私保护版本的内容进行复制
      const values = form.getFieldsValue();

      // 确保appointmentTime是字符串格式
      const formattedValues: PaiDanFormData = {
        ...values,
        appointmentTime: values.appointmentTime ? dayjs(values.appointmentTime).format("YYYY-MM-DD HH:mm:ss") : ""
      };

      const contentForCopy = generatePaidanContentForCopy(formattedValues);

      await navigator.clipboard.writeText(contentForCopy);

      // 保存到localStorage
      const orderId = generateOrderId();

      const newPaidan: PaiDanData = {
        id: orderId,
        customerName: formattedValues.customerName,
        customerPhone: formattedValues.customerPhone,
        province: formattedValues.province,
        city: formattedValues.city,
        county: formattedValues.county,
        detailAddress: formattedValues.detailAddress,
        faultDescription: formattedValues.faultDescription,
        appointmentTime: formattedValues.appointmentTime,
        technician: formattedValues.technician,
        remarks: formattedValues.remarks,
        createTime: dayjs().format("YYYY-MM-DD HH:mm:ss"),
        isAccepted: false // 默认未接单
      };

      const updatedList = [newPaidan, ...paidanList];
      setPaidanList(updatedList);
      localStorage.setItem("paidanList", JSON.stringify(updatedList));

      message.success("派单内容已复制到剪贴板并保存！");
    } catch {
      message.error("复制失败，请手动复制！");
    }
  };

  // 复制Excel格式的表格数据
  const copyTableToExcel = async () => {
    if (paidanList.length === 0) {
      message.warning("暂无数据可复制！");
      return;
    }

    try {
      // Excel表头
      const headers = [
        "编号",
        "客户姓名",
        "客户电话",
        "客户地址",
        "故障描述",
        "预约时间",
        "维修备注",
        "创建时间",
        "接单状态",
        "接单人",
        "接单时间"
      ];

      // 构建Excel格式的数据
      const excelData = paidanList.map((record) => [
        "'" + record.id, // 在编号前加单引号，强制Excel以文本格式显示
        record.customerName,
        record.customerPhone,
        `${record.province}${record.city}${record.county}${record.detailAddress}`,
        record.faultDescription,
        record.appointmentTime,
        record.remarks,
        record.createTime,
        record.isAccepted ? "已接单" : "未接单",
        record.acceptedBy || "",
        record.acceptedTime || ""
      ]);

      // 将表头和数据合并
      const allData = [headers, ...excelData];

      // 转换为TSV格式（制表符分隔），这样可以直接粘贴到Excel中
      const tsvContent = allData
        .map((row) => row.map((cell) => (cell || "").toString().replace(/\t/g, " ")).join("\t"))
        .join("\n");

      await navigator.clipboard.writeText(tsvContent);
      message.success(`已复制 ${paidanList.length} 条记录到剪贴板，可直接粘贴到Excel中！`);
    } catch {
      message.error("复制失败！");
    }
  };

  // 显示接单Modal
  const showAcceptModal = (record: PaiDanData) => {
    if (record.isAccepted) {
      // 如果已接单，显示取消接单确认
      Modal.confirm({
        title: "确认取消接单",
        content: `确定要取消接单 "${record.customerName}" 的维修订单吗？`,
        okText: "确认取消",
        cancelText: "取消",
        onOk: () => {
          const updatedList = paidanList.map((item) =>
            item.id === record.id
              ? { ...item, isAccepted: false, acceptedBy: undefined, acceptedTime: undefined }
              : item
          );
          setPaidanList(updatedList);
          localStorage.setItem("paidanList", JSON.stringify(updatedList));
          message.success("已取消接单！");
        }
      });
    } else {
      // 如果未接单，显示接单Modal
      setCurrentAcceptRecord(record);
      setAcceptModalVisible(true);
      acceptForm.resetFields();
    }
  };

  // 复制完整派单信息（接单时使用，不显示星号）
  const copyFullOrderDetails = async (record: PaiDanData, acceptedBy: string) => {
    const addressForCopy = record.detailAddress
      ? `${record.province}${record.city}${record.county}${record.detailAddress}`
      : `${record.province}${record.city}${record.county}`;

    const content = `派单编号：${record.id}
客户姓名：${record.customerName}
联系电话：${record.customerPhone}
地址：${addressForCopy}

故障描述：
${record.faultDescription}

预约时间：${record.appointmentTime}
维修技术员：${acceptedBy}

维修备注：
${record.remarks}

接单状态：已接单
接单人：${acceptedBy}
接单时间：${dayjs().format("YYYY-MM-DD HH:mm:ss")}`;

    try {
      await navigator.clipboard.writeText(content);
      message.success("接单成功！完整派单信息已复制到剪贴板！");
    } catch {
      message.error("接单成功，但复制失败！");
    }
  };

  // 确认接单
  const handleAcceptOrder = async () => {
    try {
      const values = await acceptForm.validateFields();
      if (!currentAcceptRecord) return;

      const updatedRecord = {
        ...currentAcceptRecord,
        isAccepted: true,
        acceptedBy: values.acceptedBy,
        acceptedTime: dayjs().format("YYYY-MM-DD HH:mm:ss")
      };

      const updatedList = paidanList.map((item) => (item.id === currentAcceptRecord.id ? updatedRecord : item));

      setPaidanList(updatedList);
      localStorage.setItem("paidanList", JSON.stringify(updatedList));
      setAcceptModalVisible(false);
      setCurrentAcceptRecord(null);

      // 自动复制完整信息（不显示星号）
      await copyFullOrderDetails(updatedRecord, values.acceptedBy);
    } catch (error) {
      console.error("表单验证失败:", error);
    }
  };

  // 复制表格中的派单内容（更新以包含接单人信息）
  const copyTableItem = async (record: PaiDanData) => {
    const maskedPhone = maskPhoneNumber(record.customerPhone);
    const addressForCopy = `${record.province}${record.city}${record.county}`; // 只显示省市县

    const content = `派单编号：${record.id}
客户姓名：${record.customerName}
联系电话：${maskedPhone}，派单的时候隐藏，谁接再给谁发
地址：${addressForCopy}，派单的时候隐藏，谁接再给谁发

故障描述：
${record.faultDescription}

预约时间：${record.appointmentTime}
维修技术员：${record.acceptedBy || "- -"}

维修备注：
${record.remarks}

接单状态：${record.isAccepted ? "已接单" : "未接单"}${
      record.acceptedBy
        ? `
接单人：${record.acceptedBy}
接单时间：${record.acceptedTime}`
        : ""
    }`;

    try {
      await navigator.clipboard.writeText(content);
      message.success("派单内容已复制到剪贴板！");
    } catch {
      message.error("复制失败！");
    }
  };

  // 查看派单详情
  const viewPaidanDetail = (record: PaiDanData) => {
    setSelectedRecord(record);
    setDrawerVisible(true);
  };

  // 表格列定义 - 响应式优化
  const columns = [
    {
      title: "编号",
      dataIndex: "id",
      key: "id",
      width: 120,
      responsive: ["lg"]
    },
    {
      title: "客户姓名",
      dataIndex: "customerName",
      key: "customerName",
      width: 100
    },
    {
      title: "客户电话",
      dataIndex: "customerPhone",
      key: "customerPhone",
      width: 120,
      responsive: ["md"]
    },
    {
      title: "地址",
      key: "address",
      width: 200,
      responsive: ["lg"],
      render: (record: PaiDanData) => `${record.province}${record.city}${record.county}`
    },
    {
      title: "故障",
      dataIndex: "faultDescription",
      key: "faultDescription",
      width: 120,
      ellipsis: true
    },
    {
      title: "预约时间",
      dataIndex: "appointmentTime",
      key: "appointmentTime",
      width: 150,
      responsive: ["md"]
    },
    {
      title: "状态",
      key: "status",
      width: 100,
      render: (record: PaiDanData) => (
        <Space direction="vertical" size={2}>
          <Tag color={record.isAccepted ? "success" : "default"}>{record.isAccepted ? "已接单" : "未接单"}</Tag>
          {record.acceptedBy && <div style={{ fontSize: "12px", color: "#666" }}>{record.acceptedBy}</div>}
        </Space>
      )
    },
    {
      title: "操作",
      key: "action",
      width: 150,
      render: (record: PaiDanData) => (
        <Space size="small" direction="vertical">
          <Button
            type="link"
            icon={<CheckCircleOutlined />}
            onClick={() => showAcceptModal(record)}
            size="small"
            style={{ color: record.isAccepted ? "#ff4d4f" : "#52c41a" }}
          >
            {record.isAccepted ? "取消接单" : "已接单"}
          </Button>
          <Button type="link" icon={<CopyOutlined />} onClick={() => copyTableItem(record)} size="small">
            复制
          </Button>
          <Button type="link" icon={<EyeOutlined />} onClick={() => viewPaidanDetail(record)} size="small">
            查看
          </Button>
        </Space>
      )
    }
  ];

  return (
    <div>
      <Card style={{ marginBottom: "20px" }}>
        <Form
          form={form}
          layout="vertical"
          onFinish={handleSubmit}
          initialValues={{
            faultDescription: "不制冷",
            appointmentTime: dayjs().add(2, "hour")
          }}
        >
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={12} md={8}>
              <Form.Item label="客户姓名" name="customerName" rules={[{ required: true, message: "请输入客户姓名！" }]}>
                <Input placeholder="请输入客户姓名" />
              </Form.Item>
            </Col>
            <Col xs={24} sm={12} md={8}>
              <Form.Item
                label="客户电话"
                name="customerPhone"
                rules={[{ required: true, message: "请输入客户电话！" }]}
              >
                <Input placeholder="请输入客户电话" />
              </Form.Item>
            </Col>
            <Col xs={24} sm={24} md={8}>
              <Form.Item
                label="预约时间"
                name="appointmentTime"
                rules={[{ required: true, message: "请选择预约时间！" }]}
              >
                <DatePicker
                  showTime
                  format="YYYY-MM-DD HH:mm:ss"
                  placeholder="请选择预约时间"
                  style={{ width: "100%" }}
                />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={[16, 16]}>
            <Col xs={24} sm={12} md={6}>
              <Form.Item label="省份" name="province" rules={[{ required: true, message: "请选择省份！" }]}>
                <Select
                  placeholder="请选择省份"
                  onChange={handleProvinceChange}
                  showSearch
                  filterOption={(input, option) =>
                    (option?.children as unknown as string)?.toLowerCase().includes(input.toLowerCase())
                  }
                >
                  {dataCountry.map((province: Province) => (
                    <Option key={province.code} value={province.name}>
                      {province.name}
                    </Option>
                  ))}
                </Select>
              </Form.Item>
            </Col>
            <Col xs={24} sm={12} md={6}>
              <Form.Item label="城市" name="city" rules={[{ required: true, message: "请选择城市！" }]}>
                <Select
                  placeholder="请选择城市"
                  onChange={handleCityChange}
                  disabled={!cities.length}
                  showSearch
                  filterOption={(input, option) =>
                    (option?.children as unknown as string)?.toLowerCase().includes(input.toLowerCase())
                  }
                >
                  {cities.map((city: City) => (
                    <Option key={city.code} value={city.name}>
                      {city.name}
                    </Option>
                  ))}
                </Select>
              </Form.Item>
            </Col>
            <Col xs={24} sm={12} md={6}>
              <Form.Item label="县区" name="county" rules={[{ required: true, message: "请选择县区！" }]}>
                <Select
                  placeholder="请选择县区"
                  disabled={!counties.length}
                  showSearch
                  filterOption={(input, option) =>
                    (option?.children as unknown as string)?.toLowerCase().includes(input.toLowerCase())
                  }
                >
                  {counties.map((county: Area) => (
                    <Option key={county.code} value={county.name}>
                      {county.name}
                    </Option>
                  ))}
                </Select>
              </Form.Item>
            </Col>
            <Col xs={24} sm={12} md={6}>
              <Form.Item
                label="详细地址"
                name="detailAddress"
                rules={[{ required: true, message: "请输入详细地址！" }]}
              >
                <Input placeholder="请输入详细地址" />
              </Form.Item>
            </Col>
            <Col xs={24} sm={12} md={6}>
              <Form.Item
                label="维修电器"
                name="repairEquipment"
                rules={[{ required: true, message: "请选择维修电器！" }]}
              >
                <Select
                  placeholder="请选择维修电器"
                  options={repairEquipmentOptions}
                  onChange={handleEquipmentChange}
                />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={[16, 16]}>
            <Col xs={24} sm={24} md={12}>
              <Form.Item label="故障类型" name="faultType" rules={[{ required: true, message: "请选择故障类型！" }]}>
                <Select placeholder="请选择故障类型" onChange={handleFaultChange} options={currentFaultOptions} />
              </Form.Item>
            </Col>
          </Row>

          <Form.Item label="故障描述" name="faultDescription" rules={[{ required: true, message: "请输入故障描述！" }]}>
            <TextArea rows={3} placeholder="请描述具体故障情况" />
          </Form.Item>

          <Form.Item label="维修备注" name="remarks">
            <TextArea rows={3} placeholder="现场发现问题、需更换配件等补充说明" />
          </Form.Item>

          <Form.Item>
            <Space wrap>
              <Button type="primary" htmlType="submit" size="large">
                生成派单内容
              </Button>
            </Space>
          </Form.Item>
        </Form>
      </Card>

      {generatedContent && (
        <Card title="生成的派单内容" style={{ marginBottom: "20px" }}>
          <TextArea
            value={generatedContent}
            rows={window.innerWidth < 768 ? 8 : 10}
            readOnly
            style={{ marginBottom: "10px" }}
          />
          <Button
            type="primary"
            icon={<CopyOutlined />}
            onClick={copyContent}
            size="large"
            block={window.innerWidth < 768}
          >
            复制派单内容
          </Button>
        </Card>
      )}

      <Card
        title={
          <Title level={4} style={{ margin: 0 }}>
            派单列表 ({paidanList.length})
          </Title>
        }
        extra={
          <Button
            type="default"
            icon={<CopyOutlined />}
            onClick={copyTableToExcel}
            disabled={paidanList.length === 0}
            size={window.innerWidth < 768 ? "small" : "middle"}
          >
            {window.innerWidth < 768 ? "导出" : "复制到Excel"}
          </Button>
        }
      >
        {/* 移动端使用List组件 */}
        {window.innerWidth < 768 ? (
          <List
            dataSource={paidanList}
            renderItem={(item: PaiDanData) => (
              <List.Item
                actions={[
                  <Button
                    type="text"
                    icon={<CheckCircleOutlined />}
                    onClick={() => showAcceptModal(item)}
                    size="small"
                    style={{ color: item.isAccepted ? "#ff4d4f" : "#52c41a" }}
                  >
                    {item.isAccepted ? "取消" : "接单"}
                  </Button>,
                  <Button type="text" icon={<CopyOutlined />} onClick={() => copyTableItem(item)} size="small">
                    复制
                  </Button>,
                  <Button type="text" icon={<EyeOutlined />} onClick={() => viewPaidanDetail(item)} size="small">
                    查看
                  </Button>
                ]}
              >
                <List.Item.Meta
                  avatar={<Avatar icon={<UserOutlined />} />}
                  title={
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
                      <span>{item.customerName}</span>
                      <div>
                        <Tag color="blue">{item.id}</Tag>
                        <Tag color={item.isAccepted ? "success" : "default"}>
                          {item.isAccepted ? "已接单" : "未接单"}
                        </Tag>
                      </div>
                    </div>
                  }
                  description={
                    <Space direction="vertical" size="small" style={{ width: "100%", textAlign: "left" }}>
                      {item.acceptedBy && (
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <PhoneOutlined style={{ marginRight: 4, color: "#1890ff" }} />
                          <span style={{ fontSize: "12px" }}>接单人: {item.acceptedBy}</span>
                        </div>
                      )}

                      <div style={{ display: "flex", alignItems: "center" }}>
                        <PhoneOutlined style={{ marginRight: 4, color: "#1890ff" }} />
                        <span style={{ fontSize: "12px" }}>{item.customerPhone}</span>
                      </div>
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <ClockCircleOutlined style={{ marginRight: 4, color: "#52c41a" }} />
                        <span style={{ fontSize: "12px" }}>
                          {dayjs(item.appointmentTime).format("YYYY-MM-DD HH:mm:ss")}
                        </span>
                      </div>
                      <div>
                        <Tag color="orange">{item.faultDescription}</Tag>
                      </div>
                      <div style={{ fontSize: "12px", color: "#666" }}>
                        {`${item.province}${item.city}${item.county}`}
                      </div>
                    </Space>
                  }
                />
              </List.Item>
            )}
            pagination={{
              pageSize: 5,
              simple: true,
              showTotal: (total) => `共 ${total} 条`
            }}
          />
        ) : (
          /* 桌面端继续使用Table组件 */
          <Table
            columns={columns as ColumnType<PaiDanData>[]}
            dataSource={paidanList}
            rowKey="id" 
            scroll={{ x: 1200 }}
            pagination={{
              pageSize: 10,
              showSizeChanger: true,
              showQuickJumper: true,
              showTotal: (total) => `共 ${total} 条记录`
            }}
          />
        )}
      </Card>

      {/* 移动端详情抽屉 */}
      <Drawer
        title="派单详情"
        placement="bottom"
        onClose={() => setDrawerVisible(false)}
        open={drawerVisible}
        height="80%"
      >
        {selectedRecord && (
          <div>
            <Space direction="vertical" size="middle" style={{ width: "100%" }}>
              <div>
                <strong>派单编号：</strong>
                <div>{selectedRecord.id}</div>
              </div>
              <div>
                <strong>客户姓名：</strong>
                <div>{selectedRecord.customerName}</div>
              </div>
              <div>
                <strong>客户电话：</strong>
                <div>{selectedRecord.customerPhone}</div>
              </div>
              <div>
                <strong>客户地址：</strong>
                <div>{`${selectedRecord.province}${selectedRecord.city}${selectedRecord.county}${selectedRecord.detailAddress}`}</div>
              </div>
              <div>
                <strong>故障描述：</strong>
                <div>{selectedRecord.faultDescription}</div>
              </div>
              <div>
                <strong>预约时间：</strong>
                <div>{dayjs(selectedRecord.appointmentTime).format("YYYY-MM-DD HH:mm:ss")}</div>
              </div>
              <div>
                <strong>接单状态：</strong>
                <div>
                  <Tag color={selectedRecord.isAccepted ? "success" : "default"}>
                    {selectedRecord.isAccepted ? "已接单" : "未接单"}
                  </Tag>
                </div>
              </div>
              {selectedRecord.acceptedBy && (
                <>
                  <div>
                    <strong>接单人：</strong>
                    <div>{selectedRecord.acceptedBy}</div>
                  </div>
                  <div>
                    <strong>接单时间：</strong>
                    <div>{selectedRecord.acceptedTime}</div>
                  </div>
                </>
              )}
              <div>
                <strong>维修备注：</strong>
                <div>{selectedRecord.remarks}</div>
              </div>
              <div>
                <strong>创建时间：</strong>
                <div>{selectedRecord.createTime}</div>
              </div>
              <Space style={{ width: "100%" }}>
                <Button
                  type="primary"
                  icon={<CopyOutlined />}
                  onClick={() => copyTableItem(selectedRecord)}
                  block
                  size="large"
                >
                  复制派单内容
                </Button>
              </Space>
            </Space>
          </div>
        )}
      </Drawer>

      {/* 接单Modal */}
      <Modal
        title="确认接单"
        open={acceptModalVisible}
        onOk={handleAcceptOrder}
        onCancel={() => setAcceptModalVisible(false)}
        okText="确认接单并复制内工单内容"
        cancelText="取消"
      >
        <Form form={acceptForm} layout="vertical">
          <Form.Item label="接单人信息" name="acceptedBy" rules={[{ required: true, message: "请输入接单人信息" }]}>
            <Input placeholder="请输入接单人信息" />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default PaiDan;
