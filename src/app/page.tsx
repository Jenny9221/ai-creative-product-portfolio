import Link from "next/link";

export default function IntroPage() {
  return (
    <main className="intro-page">
      <div className="intro-grid" />
      <div className="intro-glow intro-glow--a" />
      <div className="intro-glow intro-glow--b" />
      <div className="intro-object" aria-hidden="true">
        <div className="intro-object__shell" />
        <div className="intro-object__light" />
        <div className="intro-object__ring" />
      </div>
      <div className="intro-topbar">
        <span>JENNY HUANG</span>
        <span>PORTFOLIO / 2026</span>
      </div>
      <section className="intro-copy">
        <p className="eyebrow"><span /> AI CREATIVE PRODUCT DESIGNER</p>
        <h1>把体验洞察，<br />变成可落地的<br /><em>产品概念。</em></h1>
        <p className="intro-subtitle">聚焦用户体验的创新探索</p>
        <Link className="enter-button" href="/portfolio">
          <span>进入作品集</span><b>↗</b>
        </Link>
      </section>
      <div className="intro-footnote"><span>SCROLL TO DISCOVER</span><span>BEIJING · CN</span></div>
    </main>
  );
}
