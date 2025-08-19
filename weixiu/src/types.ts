/*
 * @Author: yuanzhuangzhuang@jujin8.com
 * @Date: 2025-08-18 18:09:48
 * @LastEditors: yuanzhuangzhuang@jujin8.com
 * @LastEditTime: 2025-08-19 11:11:21
 * @FilePath: /master/weixiu/src/types.ts
 * @Description: 文件注释
 */
// Types for the application
import dayjs from "dayjs";

export interface Area {
  code: string;
  name: string;
}

export interface City {
  code: string;
  name: string;
  areaList: Area[];
}

export interface Province {
  code: string;
  name: string;
  cityList: City[];
}

export interface CategoryDefaultTexts {
  serveName: string;
  serveContent: string;
  fixedText1: string;
  fixedText2: string;
  fixedText3: string;
  fixedText4: string;
}

export interface Category {
  name: string;
  defaultTexts: CategoryDefaultTexts;
}

export interface FormData {
  province: string;
  city: string;
  county: string;
  category: string;
  phoneNumber: string;
  serveName: string;
  serveContent: string;
  fixedText1: string;
  fixedText2: string;
  fixedText3: string;
  fixedText4: string;
}


// 派单相关类型
export interface PaiDanData {
  id: string; // 派单编号 YYMMDDHHMMSS
  customerName: string; // 客户姓名
  customerPhone: string; // 客户电话
  province: string; // 省份
  city: string; // 城市
  county: string; // 县区
  detailAddress: string; // 详细地址
  faultDescription: string; // 故障描述
  appointmentTime: string | dayjs.Dayjs; // 预约时间
  technician: string; // 维修技术员
  remarks: string; // 维修备注
  createTime: string; // 创建时间
  isAccepted: boolean; // 是否已接单
  acceptedBy?: string; // 接单人姓名
  acceptedTime?: string; // 接单时间
}

export interface PaiDanFormData {
  customerName: string;
  customerPhone: string;
  province: string;
  city: string;
  county: string;
  detailAddress: string;
  faultDescription: string;
  appointmentTime: string | dayjs.Dayjs; // 支持字符串和dayjs对象
  technician: string;
  remarks: string;
}
