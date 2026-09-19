"use client";

import { useMemo, useState } from "react";
import { places, type Place } from "./data";

const regions = ["ทั้งหมด", "ภาคเหนือ", "ภาคกลาง", "ภาคตะวันออก", "ภาคใต้"];
const moods = ["ทั้งหมด", "ธรรมชาติ", "วัฒนธรรม", "พักผ่อน", "กิจกรรม", "ทะเล"];

export default function Home() {
  const [region, setRegion] = useState("ทั้งหมด");
  const [mood, setMood] = useState("ทั้งหมด");
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<Place | null>(null);
  const [saved, setSaved] = useState<number[]>([]);
  const [toast, setToast] = useState("");

  const filtered = useMemo(() => places.filter((place) => {
    const matchesRegion = region === "ทั้งหมด" || place.region === region;
    const matchesMood = mood === "ทั้งหมด" || place.tags.some((tag) => tag.includes(mood)) || place.type.includes(mood);
    const matchesQuery = !query || `${place.name}${place.province}${place.description}`.toLowerCase().includes(query.toLowerCase());
    return matchesRegion && matchesMood && matchesQuery;
  }), [region, mood, query]);

  function surprise() {
    const pick = filtered[Math.floor(Math.random() * filtered.length)] || places[Math.floor(Math.random() * places.length)];
    setSelected(pick);
    setToast(`เราเลือก ${pick.name} ให้คุณแล้ว ✨`);
    setTimeout(() => setToast(""), 3000);
  }

  function toggleSave(id: number) {
    setSaved((current) => current.includes(id) ? current.filter((item) => item !== id) : [...current, id]);
  }

  return (
    <main>
      <nav className="nav shell">
        <div className="brand"><span className="brand-mark">✦</span><span>เที่ยวไหนดี?</span></div>
        <div className="nav-links"><a href="#explore">ค้นหาที่เที่ยว</a><a href="#about">เกี่ยวกับเรา</a><button className="saved-link" onClick={() => setToast(`บันทึกไว้ ${saved.length} แห่ง`)}>♡ <span>ที่บันทึกไว้</span></button></div>
      </nav>

      <section className="hero shell">
        <div className="hero-copy">
          <p className="eyebrow">FIND YOUR NEXT ESCAPE</p>
          <h1>ออกไปเจอ<br /><em>ที่ที่ใช่</em>สำหรับคุณ</h1>
          <p className="hero-text">ค้นพบสถานที่เที่ยวไทยที่เข้ากับสไตล์ของคุณ<br />ไม่ว่าจะสายธรรมชาติ ชอบชุมชน หรืออยากพักผ่อน</p>
          <button className="primary-btn" onClick={surprise}>สุ่มที่เที่ยวให้ฉัน <span>↗</span></button>
        </div>
        <div className="hero-art" aria-label="ภาพประกอบภูเขาและต้นไม้">
          <div className="sun" /><div className="mountain mountain-back" /><div className="mountain mountain-front" /><div className="tree tree-one">♣</div><div className="tree tree-two">♣</div><div className="hero-note"><span>✦</span><div><strong>สถานที่น่าสนใจ</strong><small>คัดสรรจากทั่วไทย</small></div></div>
        </div>
      </section>

      <section className="explore shell" id="explore">
        <div className="section-heading"><div><p className="eyebrow">EXPLORE THAILAND</p><h2>วันนี้อยากไปเที่ยวแบบไหน?</h2></div><span className="result-count">{filtered.length} สถานที่</span></div>
        <div className="filters">
          <div className="filter-group"><label>ภูมิภาค</label><div className="pills">{regions.map((item) => <button key={item} className={region === item ? "pill active" : "pill"} onClick={() => setRegion(item)}>{item}</button>)}</div></div>
          <div className="filter-group"><label>สไตล์การเที่ยว</label><div className="pills">{moods.map((item) => <button key={item} className={mood === item ? "pill active" : "pill"} onClick={() => setMood(item)}>{item}</button>)}</div></div>
          <div className="search-wrap"><span>⌕</span><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="ค้นหาชื่อสถานที่ จังหวัด..." /></div>
        </div>
        <div className="cards">{filtered.map((place) => <PlaceCard key={place.id} place={place} isSaved={saved.includes(place.id)} onSave={() => toggleSave(place.id)} onOpen={() => setSelected(place)} />)}</div>
        {!filtered.length && <div className="empty"><span>☁</span><h3>ยังไม่เจอที่ที่ตรงใจ</h3><p>ลองเปลี่ยนตัวกรองหรือคำค้นหา แล้วออกไปค้นพบที่ใหม่กัน</p></div>}
      </section>

      <section className="quote shell" id="about"><div className="quote-mark">“</div><div><p>การเดินทางที่ดี ไม่จำเป็นต้องไกล<br />แค่ได้ไปในที่ที่เป็นตัวเรา</p><small>— เที่ยวไหนดี? team</small></div><div className="quote-doodle">✺</div></section>
      <footer className="footer shell"><div className="brand"><span className="brand-mark">✦</span><span>เที่ยวไหนดี?</span></div><span>Made with curiosity in Thailand <span className="footer-heart">♥</span></span></footer>

      {selected && <div className="modal-backdrop" onClick={() => setSelected(null)}><div className="modal" onClick={(event) => event.stopPropagation()}><button className="close" onClick={() => setSelected(null)}>×</button><div className="modal-visual" style={{ background: selected.color }}><span>{selected.emoji}</span><small>{selected.region} · {selected.province}</small></div><div className="modal-content"><p className="eyebrow">YOUR NEXT ESCAPE</p><h2>{selected.name}</h2><p>{selected.description}</p><div className="tag-row">{selected.tags.map((tag) => <span key={tag}>{tag}</span>)}</div><div className="modal-meta"><div><small>ช่วงเวลาที่เหมาะสม</small><strong>{selected.bestTime}</strong></div><button className="map-btn" onClick={() => window.open(`https://www.google.com/maps?q=${selected.lat},${selected.lng}`, "_blank")}>เปิดใน Google Maps ↗</button></div></div></div></div>}
      {toast && <div className="toast">{toast}</div>}
    </main>
  );
}

function PlaceCard({ place, isSaved, onSave, onOpen }: { place: Place; isSaved: boolean; onSave: () => void; onOpen: () => void }) {
  return <article className="place-card" onClick={onOpen}><div className="card-art" style={{ background: place.color }}><span className="place-emoji">{place.emoji}</span><button className={isSaved ? "save-btn saved" : "save-btn"} onClick={(event) => { event.stopPropagation(); onSave(); }}>{isSaved ? "♥" : "♡"}</button><span className="card-region">{place.region.replace("ภาค", "")}</span></div><div className="card-body"><div className="card-title"><h3>{place.name}</h3><span>↗</span></div><p>{place.province} · {place.type}</p><div className="tag-row">{place.tags.slice(0, 2).map((tag) => <span key={tag}>{tag}</span>)}</div></div></article>;
}
