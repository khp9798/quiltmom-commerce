"use client";

import { useMemo, useState } from "react";

const products = [
  { id: 1, name: "제주 동백 미니백", category: "가방", image: "/products/14c96d9fff5e54b3.jpg", tag: "NEW" },
  { id: 2, name: "플라워 패치워크 파우치", category: "파우치", image: "/products/1281d8981d8416b1.webp", tag: "BEST" },
  { id: 3, name: "오름 조각보 토트백", category: "가방", image: "/products/0c217fd2c9a0074b.webp", tag: "ONE & ONLY" },
  { id: 4, name: "마음 한 조각 키링", category: "소품", image: "/products/0504c9583e0492ca.webp", tag: "GIFT" },
  { id: 5, name: "빈티지 플라워 카드지갑", category: "지갑", image: "/products/ba4719f5cf689a4b.webp", tag: "HANDMADE" },
  { id: 6, name: "제주 바람 퀼트백", category: "가방", image: "/products/3129271f8df4391c.webp", tag: "LIMITED" },
];

const categories = ["전체", "가방", "파우치", "지갑", "소품"];

function FlowerMark() {
  return <span className="flower-mark" aria-hidden="true"><i /><i /><i /><i /><b /></span>;
}

export default function Home() {
  const [category, setCategory] = useState("전체");
  const [saved, setSaved] = useState<number[]>([]);
  const [menuOpen, setMenuOpen] = useState(false);
  const [savedOpen, setSavedOpen] = useState(false);

  const filtered = useMemo(
    () => category === "전체" ? products : products.filter((p) => p.category === category),
    [category]
  );

  const toggleSaved = (id: number) => {
    setSaved((items) => items.includes(id) ? items.filter((item) => item !== id) : [...items, id]);
  };

  const savedProducts = products.filter((product) => saved.includes(product.id));

  return (
    <main>
      <div className="notice">제주에서 천천히, 정성껏 만듭니다 · 모든 제품은 소량 제작됩니다</div>
      <header className="header">
        <a className="brand" href="#top" aria-label="퀼트맘 홈">
          <FlowerMark />
          <span>퀼트맘<small>quiltmom in jeju</small></span>
        </a>
        <nav className={menuOpen ? "nav open" : "nav"} aria-label="주요 메뉴">
          <a href="#shop" onClick={() => setMenuOpen(false)}>SHOP</a>
          <a href="#story" onClick={() => setMenuOpen(false)}>OUR STORY</a>
          <a href="#order" onClick={() => setMenuOpen(false)}>ORDER GUIDE</a>
        </nav>
        <div className="header-actions">
          <a className="instagram-link" href="https://www.instagram.com/quiltmom_jeju/" target="_blank" rel="noreferrer">Instagram ↗</a>
          <button className="saved-button" onClick={() => setSavedOpen(true)} aria-label={`찜한 상품 ${saved.length}개`}>
            ♡ <span>{saved.length}</span>
          </button>
          <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="메뉴 열기">{menuOpen ? "×" : "☰"}</button>
        </div>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">HANDMADE IN JEJU</p>
          <h1>마음을 잇고,<br />일상을 수놓는<br /><em>퀼트 한 조각</em></h1>
          <p className="hero-description">손끝에서 한 땀 한 땀 태어난 따뜻한 생활 소품.<br />제주의 빛과 계절을 담아 오래 곁에 둘 물건을 만듭니다.</p>
          <div className="hero-actions">
            <a className="primary-button" href="#shop">작품 둘러보기 <span>→</span></a>
            <a className="text-button" href="#story">퀼트맘 이야기</a>
          </div>
        </div>
        <div className="hero-collage" aria-label="퀼트맘 대표 작품">
          <div className="hero-image hero-image-main"><img src="/products/6d09c178f4d83685.webp" alt="퀼트맘의 손바느질 작품" /></div>
          <div className="hero-image hero-image-small"><img src="/products/2ce7ad638dd5a346.jpg" alt="화사한 색감의 퀼트 소품" /></div>
          <div className="stitched-note">Made with<br /><strong>love & time</strong><FlowerMark /></div>
        </div>
        <span className="scroll-cue">SCROLL <b>↓</b></span>
      </section>

      <section className="shop-section" id="shop">
        <div className="section-heading">
          <div><p className="eyebrow">LITTLE THINGS, BIG JOY</p><h2>손끝에서 태어난 것들</h2></div>
          <p>같은 원단이어도 무늬와 바느질이 조금씩 달라요.<br />그래서 모든 작품은 세상에 하나뿐입니다.</p>
        </div>
        <div className="filters" role="tablist" aria-label="상품 카테고리">
          {categories.map((item) => <button key={item} className={category === item ? "active" : ""} onClick={() => setCategory(item)} role="tab" aria-selected={category === item}>{item}</button>)}
        </div>
        <div className="product-grid">
          {filtered.map((product) => (
            <article className="product-card" key={product.id}>
              <div className="product-image">
                <img src={product.image} alt={product.name} />
                <span className="product-tag">{product.tag}</span>
                <button className={saved.includes(product.id) ? "heart saved" : "heart"} onClick={() => toggleSaved(product.id)} aria-label={`${product.name} 찜하기`}>{saved.includes(product.id) ? "♥" : "♡"}</button>
              </div>
              <div className="product-info"><span>{product.category}</span><h3>{product.name}</h3><p>온라인 판매 준비 중</p></div>
            </article>
          ))}
        </div>
        <p className="catalog-note">현재 상품명과 분류는 온라인몰 구성을 위한 임시 정보이며, 실제 판매 정보는 오픈 전에 확정됩니다.</p>
      </section>

      <section className="story-section" id="story">
        <div className="story-images">
          <img className="story-main" src="/products/a10118c37c8f09af.jpg" alt="퀼트맘의 작업과 작품" />
          <img className="story-detail" src="/products/750d24af5ecd4353.jpg" alt="퀼트 작품의 섬세한 디테일" />
          <span className="stitch-circle">slowly<br />& lovingly</span>
        </div>
        <div className="story-copy">
          <p className="eyebrow">ABOUT QUILTMOM</p>
          <h2>천과 천 사이에<br />마음을 포개는 일</h2>
          <p>좋아하는 색의 천을 고르고, 서로 다른 조각들을 이어 하나의 이야기를 만듭니다. 빠르게 만들어지는 물건보다 손의 온도가 오래 남는 물건을 믿어요.</p>
          <p>퀼트맘은 제주에서 일상의 작은 기쁨이 될 가방과 파우치, 소품을 만들고 있습니다.</p>
          <a className="text-button" href="https://www.instagram.com/quiltmom_jeju/" target="_blank" rel="noreferrer">인스타그램에서 더 보기 ↗</a>
        </div>
      </section>

      <section className="order-section" id="order">
        <div><p className="eyebrow">ONLINE STORE</p><h2>온라인 스토어를<br />준비하고 있어요</h2></div>
        <ol>
          <li><b>01</b><span><strong>작품 고르기</strong>찜 버튼으로 마음에 드는 작품을 모아보세요.</span></li>
          <li><b>02</b><span><strong>온라인 주문</strong>오픈 후에는 옵션과 수량을 선택해 장바구니에서 주문할 수 있어요.</span></li>
          <li><b>03</b><span><strong>결제 · 배송</strong>안전한 온라인 결제와 주문 상태 확인 기능을 제공할 예정이에요.</span></li>
        </ol>
        <span className="primary-button dark pending-button">온라인 판매 준비 중 <span>•••</span></span>
      </section>

      <footer>
        <a className="brand footer-brand" href="#top"><FlowerMark /><span>퀼트맘<small>quiltmom in jeju</small></span></a>
        <p>제주에서 마음을 담은 선물을 디자인합니다.</p>
        <div><a href="https://www.instagram.com/quiltmom_jeju/" target="_blank" rel="noreferrer">Instagram</a><a href="#order">Order guide</a></div>
        <small>© 2026 QUILTMOM. All rights reserved.</small>
      </footer>

      {savedOpen && <div className="drawer-backdrop">
        <button className="drawer-dismiss" onClick={() => setSavedOpen(false)} aria-label="찜 목록 닫기" />
        <aside className="saved-drawer" aria-label="찜한 작품">
          <div className="drawer-head"><div><p>MY PICKS</p><h2>찜한 작품</h2></div><button onClick={() => setSavedOpen(false)} aria-label="닫기">×</button></div>
          {savedProducts.length === 0 ? <div className="empty-saved"><span>♡</span><p>아직 찜한 작품이 없어요.<br />마음에 드는 작품의 하트를 눌러보세요.</p></div> : <div className="saved-list">
            {savedProducts.map((product) => <div key={product.id}><img src={product.image} alt="" /><span><small>{product.category}</small><strong>{product.name}</strong></span><button onClick={() => toggleSaved(product.id)}>삭제</button></div>)}
          </div>}
          <span className="primary-button dark drawer-cta pending-button">온라인 판매 준비 중 <span>•••</span></span>
        </aside>
      </div>}
    </main>
  );
}
