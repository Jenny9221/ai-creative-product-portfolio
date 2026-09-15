import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jenny Huang | AI 创意产品设计师",
  description: "聚焦智能硬件、AIGC 交互与消费体验的个人作品集。",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
