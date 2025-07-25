/*
 * @Author: yuanzhuangzhuang@jujin8.com
 * @Date: 2025-07-25 09:30:46
 * @LastEditors: yuanzhuangzhuang@jujin8.com
 * @LastEditTime: 2025-07-25 11:39:34
 * @FilePath: /GitPage/master/ds/vite.config.ts
 * @Description: 文件注释
 */
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  base: "./",
  plugins: [react()]
});
