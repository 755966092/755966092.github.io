import React, { useState, useEffect } from "react";
import {
  Form,
  Select,
  Input,
  Button,
  Card,
  Row,
  Col,
  Typography,
  message,
  Space
} from "antd";
import { CopyOutlined } from "@ant-design/icons";
import { categories, dataCountry } from "./data";
import type { FormData, City, Area } from "./types";
import "./App.css";
import PaiDan from "./component/paidan";

const { Title } = Typography;
const { TextArea } = Input;
const { Option } = Select;

const App: React.FC = () => {
  const [form] = Form.useForm();
  const [platform, setPlatform] = useState<number>(1); // 1: 抖音, 2: 快手

  // 功能 - 从localStorage读取缓存，如果没有则默认为1
  const [functionType, setFunctionType] = useState<number>(() => {
    const cached = localStorage.getItem("functionType");
    return cached ? parseInt(cached, 10) : 1;
  }); // 1: 生成推广文案, 2: 生成派单内容
  const [formData, setFormData] = useState<FormData>({
    province: "",
    city: "",
    county: "",
    category: "",
    phoneNumber: "",
    serveName: "",
    serveContent: "",
    fixedText1: "",
    fixedText2: "",
    fixedText3: "",
    fixedText4: ""
  });

  const [cities, setCities] = useState<City[]>([]);
  const [counties, setCounties] = useState<Area[]>([]);
  const [generatedText, setGeneratedText] = useState<string>("");

  // Load cached data from localStorage on component mount
  useEffect(() => {
    const cachedData = {
      phoneNumber: localStorage.getItem("phoneNumber") || "",
      province: localStorage.getItem("province") || "",
      city: localStorage.getItem("city") || "",
      county: localStorage.getItem("county") || ""
    };

    if (cachedData.phoneNumber) {
      form.setFieldValue("phoneNumber", cachedData.phoneNumber);
      setFormData((prev) => ({ ...prev, phoneNumber: cachedData.phoneNumber }));
    }

    if (cachedData.province) {
      form.setFieldValue("province", cachedData.province);
      setFormData((prev) => ({ ...prev, province: cachedData.province }));
      updateCityOptions(cachedData.province);

      if (cachedData.city) {
        form.setFieldValue("city", cachedData.city);
        setFormData((prev) => ({ ...prev, city: cachedData.city }));
        updateCountyOptions(cachedData.province, cachedData.city);

        if (cachedData.county) {
          form.setFieldValue("county", cachedData.county);
          setFormData((prev) => ({ ...prev, county: cachedData.county }));
        }
      }
    }
  }, [form]);

  // 新增：监听functionType变化并保存到localStorage
  useEffect(() => {
    localStorage.setItem("functionType", functionType.toString());
  }, [functionType]);

  const updateCityOptions = (provinceCode: string) => {
    const selectedProvince = dataCountry.find(
      (province) => province.code === provinceCode
    );
    if (selectedProvince) {
      setCities(selectedProvince.cityList);
    } else {
      setCities([]);
    }
    setCounties([]);
    form.setFieldValue("city", "");
    form.setFieldValue("county", "");
  };

  const updateCountyOptions = (provinceCode: string, cityCode: string) => {
    const selectedProvince = dataCountry.find(
      (province) => province.code === provinceCode
    );
    if (selectedProvince) {
      const selectedCity = selectedProvince.cityList.find(
        (city) => city.code === cityCode
      );
      if (selectedCity) {
        setCounties(selectedCity.areaList);
      } else {
        setCounties([]);
      }
    } else {
      setCounties([]);
    }
    form.setFieldValue("county", "");
  };

  const handleProvinceChange = (value: string) => {
    setFormData((prev) => ({ ...prev, province: value, city: "", county: "" }));
    updateCityOptions(value);
  };

  const handleCityChange = (value: string) => {
    setFormData((prev) => ({ ...prev, city: value, county: "" }));
    updateCountyOptions(formData.province, value);
  };

  const handleCountyChange = (value: string) => {
    setFormData((prev) => ({ ...prev, county: value }));
  };

  const handleCategoryChange = (value: string) => {
    const selectedCategory = categories.find(
      (category) => category.name === value
    );
    if (selectedCategory) {
      const updatedData = {
        ...formData,
        category: value,
        serveName: selectedCategory.defaultTexts.serveName,
        serveContent: selectedCategory.defaultTexts.serveContent,
        fixedText1: selectedCategory.defaultTexts.fixedText1,
        fixedText2: selectedCategory.defaultTexts.fixedText2,
        fixedText3: selectedCategory.defaultTexts.fixedText3,
        fixedText4:
          platform === 1 ? selectedCategory.defaultTexts.fixedText4 : ""
      };
      setFormData(updatedData);

      // Update form fields
      form.setFieldsValue({
        serveName: selectedCategory.defaultTexts.serveName,
        serveContent: selectedCategory.defaultTexts.serveContent,
        fixedText1: selectedCategory.defaultTexts.fixedText1,
        fixedText2: selectedCategory.defaultTexts.fixedText2,
        fixedText3: selectedCategory.defaultTexts.fixedText3,
        fixedText4:
          platform === 1 ? selectedCategory.defaultTexts.fixedText4 : ""
      });
    }
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handlePlatformChange = (value: number) => {
    setPlatform(value);
    // 当切换到快手时，清空第四个标签
    if (value === 2) {
      setFormData((prev) => ({ ...prev, fixedText4: "" }));
      form.setFieldValue("fixedText4", "");
    }
  };

  const generateText = () => {
    const provinceOption = dataCountry.find(
      (p) => p.code === formData.province
    );
    const cityOption = provinceOption?.cityList.find(
      (c) => c.code === formData.city
    );
    const countyOption = cityOption?.areaList.find(
      (a) => a.code === formData.county
    );

    const cityName = cityOption?.name || "";
    const countyName = countyOption?.name || "";

    // 根据平台决定使用多少个标签
    const tags =
      platform === 1
        ? [
            formData.fixedText1,
            formData.fixedText2,
            formData.fixedText3,
            formData.fixedText4
          ].filter((tag) => tag.trim())
        : [
            formData.fixedText1,
            formData.fixedText2,
            formData.fixedText3
          ].filter((tag) => tag.trim());

    const hashTags = tags.map((tag) => `#${countyName}${tag}`).join(" ");

    const text = `${cityName}${countyName}${formData.serveName}
${cityName}#${countyName} ${formData.fixedText1}☎️☎️☎️${formData.phoneNumber}，
${formData.serveContent}。
${hashTags}`;

    setGeneratedText(text.trim());

    // Save to localStorage
    localStorage.setItem("phoneNumber", formData.phoneNumber);
    localStorage.setItem("province", formData.province);
    localStorage.setItem("city", formData.city);
    localStorage.setItem("county", formData.county);
  };

  const copyText = async () => {
    try {
      await navigator.clipboard.writeText(generatedText);
      message.success("文案已复制到剪贴板！");
    } catch (error) {
      console.log("error: ", error);
      message.error("复制失败，请手动复制");
    }
  };

  const copyTitle = async () => {
    try {
      await navigator.clipboard.writeText(formData.serveName);
      message.success("标题已复制到剪贴板！");
    } catch (error) {
      console.log("error: ", error);
      message.error("复制失败，请手动复制");
    }
  };

  return (
    <div style={{ maxWidth: "800px", margin: "0 auto" }}>
      <Title level={2} style={{ textAlign: "center", marginBottom: "30px" }}>
        {functionType === 1 ? "生成推广文案" : "生成派单内容"}
      </Title>
      <div style={{ marginBottom: "20px", padding: "0 20px" }}>
        <Select
          value={functionType}
          onChange={(value: number) => setFunctionType(value)}
          style={{ width: "100%" }}
        >
          <Option value={1}>生成推广文案</Option>
          <Option value={2}>生成派单内容</Option>
        </Select>
      </div>
      {functionType === 1 ? (
        <Card>
          <Form
            form={form}
            layout="vertical"
            onValuesChange={(changedValues) => {
              Object.keys(changedValues).forEach((key) => {
                if (
                  key !== "province" &&
                  key !== "city" &&
                  key !== "county" &&
                  key !== "category"
                ) {
                  handleInputChange(key as keyof FormData, changedValues[key]);
                }
              });
            }}
          >
            <Row gutter={16}>
              <Col xs={24} sm={24}>
                <Form.Item label="平台选择">
                  <Select
                    value={platform}
                    onChange={handlePlatformChange}
                    style={{ width: "100%" }}
                  >
                    <Option value={1}>抖音</Option>
                    <Option value={2}>快手</Option>
                  </Select>
                </Form.Item>
              </Col>

              <Col xs={24} sm={8}>
                <Form.Item label="省" name="province">
                  <Select
                    placeholder="请选择省份"
                    onChange={handleProvinceChange}
                    allowClear
                  >
                    {dataCountry.map((province) => (
                      <Option key={province.code} value={province.code}>
                        {province.name}
                      </Option>
                    ))}
                  </Select>
                </Form.Item>
              </Col>

              <Col xs={24} sm={8}>
                <Form.Item label="市" name="city">
                  <Select
                    placeholder="请选择城市"
                    onChange={handleCityChange}
                    disabled={!formData.province}
                    allowClear
                  >
                    {cities.map((city) => (
                      <Option key={city.code} value={city.code}>
                        {city.name}
                      </Option>
                    ))}
                  </Select>
                </Form.Item>
              </Col>

              <Col xs={24} sm={8}>
                <Form.Item label="县" name="county">
                  <Select
                    placeholder="请选择区县"
                    onChange={handleCountyChange}
                    disabled={!formData.city}
                    allowClear
                  >
                    {counties.map((county) => (
                      <Option key={county.code} value={county.code}>
                        {county.name}
                      </Option>
                    ))}
                  </Select>
                </Form.Item>
              </Col>
            </Row>

            <Row gutter={16}>
              <Col xs={24} sm={12}>
                <Form.Item label="分类" name="category">
                  <Select
                    placeholder="请选择分类"
                    onChange={handleCategoryChange}
                    allowClear
                  >
                    {categories.map((category) => (
                      <Option key={category.name} value={category.name}>
                        {category.name}
                      </Option>
                    ))}
                  </Select>
                </Form.Item>
              </Col>

              <Col xs={24} sm={12}>
                <Form.Item label="手机号" name="phoneNumber">
                  <Input
                    placeholder="请输入手机号"
                    onChange={(e) =>
                      handleInputChange("phoneNumber", e.target.value)
                    }
                  />
                </Form.Item>
              </Col>
            </Row>
            <Form.Item>
              <Space wrap>
                <Button type="primary" onClick={generateText}>
                  生成文案
                </Button>
                <Button
                  icon={<CopyOutlined />}
                  onClick={copyText}
                  disabled={!generatedText}
                >
                  复制文案
                </Button>
                <Button
                  icon={<CopyOutlined />}
                  onClick={copyTitle}
                  disabled={!formData.serveName}
                >
                  复制标题
                </Button>
              </Space>
            </Form.Item>

            <Form.Item label="服务标题" name="serveName">
              <Input
                placeholder="服务标题"
                onChange={(e) => handleInputChange("serveName", e.target.value)}
              />
            </Form.Item>

            <Form.Item label="服务内容" name="serveContent">
              <TextArea
                rows={4}
                placeholder="服务内容"
                onChange={(e) =>
                  handleInputChange("serveContent", e.target.value)
                }
              />
            </Form.Item>

            <Row gutter={16}>
              <Col xs={24} sm={12} md={6}>
                <Form.Item label="标签一" name="fixedText1">
                  <Input
                    placeholder="标签一"
                    onChange={(e) =>
                      handleInputChange("fixedText1", e.target.value)
                    }
                  />
                </Form.Item>
              </Col>

              <Col xs={24} sm={12} md={6}>
                <Form.Item label="标签二" name="fixedText2">
                  <Input
                    placeholder="标签二"
                    onChange={(e) =>
                      handleInputChange("fixedText2", e.target.value)
                    }
                  />
                </Form.Item>
              </Col>

              <Col xs={24} sm={12} md={6}>
                <Form.Item label="标签三" name="fixedText3">
                  <Input
                    placeholder="标签三"
                    onChange={(e) =>
                      handleInputChange("fixedText3", e.target.value)
                    }
                  />
                </Form.Item>
              </Col>

              {platform === 1 && (
                <Col xs={24} sm={12} md={6}>
                  <Form.Item label="标签四" name="fixedText4">
                    <Input
                      placeholder="标签四"
                      onChange={(e) =>
                        handleInputChange("fixedText4", e.target.value)
                      }
                    />
                  </Form.Item>
                </Col>
              )}
            </Row>

            <Form.Item label="生成的文案">
              <TextArea
                rows={6}
                value={generatedText}
                readOnly
                placeholder="点击生成文案按钮生成内容"
              />
            </Form.Item>
          </Form>
        </Card>
      ) : (
        <PaiDan />
      )}
    </div>
  );
};

export default App;
