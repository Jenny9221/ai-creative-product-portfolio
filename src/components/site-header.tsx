import Link from "next/link";

export function SiteHeader({ compact = false }: { compact?: boolean }) {
  return (
    <header className={`site-header ${compact ? "site-header--compact" : ""}`}>
      <Link className="wordmark" href="/" aria-label="返回作品集首页">
        JH<span>®</span>
      </Link>
      <nav aria-label="主导航">
        <Link href="/#about">关于我</Link>
        <Link href="/#projects">精选项目</Link>
        <Link href="/#strengths">能力矩阵</Link>
        <Link href="/#contact">联系我</Link>
      </nav>
      <div className="header-status"><i /> Available for ideas</div>
    </header>
  );
}
