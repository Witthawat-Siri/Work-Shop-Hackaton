export type Place = {
  id: number;
  name: string;
  province: string;
  region: string;
  type: string;
  description: string;
  emoji: string;
  color: string;
  tags: string[];
  lat: number;
  lng: number;
  bestTime: string;
};

export const places: Place[] = [
  { id: 1, name: "หมู่บ้านแม่กำปอง", province: "เชียงใหม่", region: "ภาคเหนือ", type: "สโลว์ไลฟ์", description: "ชุมชนกลางหุบเขา อากาศเย็นสบาย ไร่ชา และโฮมสเตย์ที่อบอุ่น", emoji: "🌿", color: "#dcebd6", tags: ["ธรรมชาติ", "พักผ่อน", "ชุมชน"], lat: 18.865, lng: 99.350, bestTime: "เที่ยวได้ตลอดปี" },
  { id: 2, name: "ชุมชนริมน้ำจันทบูร", province: "จันทบุรี", region: "ภาคตะวันออก", type: "วัฒนธรรม", description: "เดินเล่นย่านเมืองเก่าริมน้ำ ชมสถาปัตยกรรมชิโน-โปรตุกีสและวิถีชีวิตดั้งเดิม", emoji: "🏘️", color: "#f3dfc4", tags: ["วัฒนธรรม", "ชุมชน", "ถ่ายรูป"], lat: 12.609, lng: 102.104, bestTime: "เที่ยวได้ตลอดปี" },
  { id: 3, name: "เขาช่องลม", province: "นครนายก", region: "ภาคกลาง", type: "ธรรมชาติ", description: "นั่งเรือชมทุ่งหญ้าและธารน้ำตกท่ามกลางขุนเขาในบรรยากาศสุดสดชื่น", emoji: "⛰️", color: "#cfe4e1", tags: ["ธรรมชาติ", "ผจญภัย", "หน้าฝน"], lat: 14.256, lng: 101.322, bestTime: "ฤดูฝน" },
  { id: 4, name: "เกาะยาวน้อย", province: "พังงา", region: "ภาคใต้", type: "ทะเล", description: "สัมผัสวิถีชีวิตประมงพื้นบ้าน ทะเลใส และหาดทรายขาวแบบสโลว์ไลฟ์", emoji: "🌊", color: "#c9e5ed", tags: ["ทะเล", "พักผ่อน", "ชุมชน"], lat: 8.106, lng: 98.592, bestTime: "พ.ย. - เม.ย." },
  { id: 5, name: "น้ำพุร้อนเค็มคลองท่อม", province: "กระบี่", region: "ภาคใต้", type: "พักผ่อน", description: "แช่น้ำพุร้อนเกลือธรรมชาติและบ่อโคลน เพื่อวันพักผ่อนที่ช้าลง", emoji: "♨️", color: "#f1d7ca", tags: ["พักผ่อน", "ธรรมชาติ", "สุขภาพ"], lat: 7.826, lng: 99.264, bestTime: "เที่ยวได้ตลอดปี" },
  { id: 6, name: "สวนน้ำวานา นาวา", province: "ประจวบคีรีขันธ์", region: "ภาคกลาง", type: "กิจกรรมสนุก ๆ", description: "สวนน้ำสไตล์ป่าฝนเขตร้อน พร้อมเครื่องเล่นระดับโลกสำหรับทุกวัย", emoji: "🎢", color: "#f5d6dc", tags: ["กิจกรรม", "ครอบครัว", "สนุก"], lat: 12.536, lng: 99.963, bestTime: "เที่ยวได้ตลอดปี" },
  { id: 7, name: "เมืองเก่าอุทัยธานี", province: "อุทัยธานี", region: "ภาคเหนือ", type: "วัฒนธรรม", description: "ย่านชุมชนโบราณริมแม่น้ำสะแกกรัง เต็มไปด้วยเรือนไม้เก่าแก่อายุนับร้อยปี", emoji: "🛶", color: "#e8dccc", tags: ["วัฒนธรรม", "ชุมชน", "ถ่ายรูป"], lat: 15.383, lng: 100.024, bestTime: "เที่ยวได้ตลอดปี" },
  { id: 8, name: "เกาะหมาก", province: "ตราด", region: "ภาคตะวันออก", type: "รักษ์โลก", description: "ต้นแบบการท่องเที่ยวคาร์บอนต่ำ พร้อมกิจกรรมอนุรักษ์ระบบนิเวศทะเล", emoji: "🌴", color: "#d6e7d0", tags: ["ทะเล", "รักษ์โลก", "พักผ่อน"], lat: 11.816, lng: 102.476, bestTime: "พ.ย. - เม.ย." },
];
