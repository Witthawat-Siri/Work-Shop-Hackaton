import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "เที่ยวไหนดี? — Find Your Trip",
  description: "ค้นหาสถานที่เที่ยวไทยที่เข้ากับสไตล์ของคุณ",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="th"><body>{children}</body></html>;
}
