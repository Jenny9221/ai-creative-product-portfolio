import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { ProjectVisual } from "@/components/project-visual";
import { projects } from "@/data/projects";
import Image from "next/image";

const strengths = [
  { no: "01", title: "用户研究与需求洞察", skill: "定性定量混合调研、情景工作坊、需求权重排序", method: "回到真实场景提取痛点，不只依赖主观创意", solve: "产品脱离真实用户，需求混杂难以取舍" },
  { no: "02", title: "硬件与产品概念定义", skill: "硬件前瞻概念、多约束方案权衡、方向收敛", method: "兼顾用户体验、品牌基因、工程与成本现实", solve: "概念好看，却无法对接评审与研发落地" },
  { no: "03", title: "AIGC 驱动交互原型", skill: "AIGC 内容生成、 Demo快速原型搭建", method: "用 Vibe Coding把想法变成可演示原型", solve: "想法停留在纸面，缺少可体验载体" },
  { no: "04", title: "项目统筹与协同收敛", skill: "项目方向判断、风险把控、多角色团队对齐", method: "资源有限时划定边界，聚焦核心目标按期交付", solve: "方向摇摆、范围扩张、产出无法交付" },
];

export default function PortfolioPage() {
  return (
    <main className="portfolio-page">
      <SiteHeader />
      <section className="portfolio-hero shell">
        <div className="hero-kicker"><span>AI × INDUSTRIAL DESIGN</span><span>SELECTED WORKS · 2026</span></div>
        <h1>AI 创意<br /><span>产品设计师</span></h1>
        <div className="hero-bottom">
          <p>把模糊感受转译为明确机会，<br />再让机会成为可验证的产品。</p>
          <a href="#projects" className="round-link" aria-label="浏览精选项目">↓</a>
        </div>
      </section>

      <section className="about-section shell" id="about">
        <div className="section-label"><span>01</span> PROFILE</div>
        <div className="profile-grid">
        <div className="portrait-placeholder">
          <Image
            src="/images/profile-main.png"
            alt="Jenny Huang 的个人照片"
            fill
            sizes="(max-width: 900px) 100vw, 42vw"
            className="portrait-image"
            priority
          />
        </div> 
          <div className="profile-copy">
            <p className="profile-lead">从真实场景出发，<br />在体验与技术之间，<br /><em>寻找产品的新答案。</em></p>
            <p>擅长从真实场景挖掘用户痛点，完成从调研到方案收敛的完整过程。<br />追求可被评审、可对接研发、贴近真实用户的产品方案。</p>
            <div className="tag-row">
              {["用户研究","竞品分析", "AIGC 交互原型","多约束方案权衡"].map((tag) => <span key={tag}>{tag}</span>)}
            </div>
          </div>
        </div>
        <div className="profile-meta">
          <div><strong>04</strong><span>精选项目</span></div>
          <div><strong>03</strong><span>重点创新方向</span></div>
          <div><strong>01</strong><span>端到端设计方法</span></div>
          <div className="contact-mini"><span>CONTACT</span><p>E-mail / hjn021229@126.com</p></div>
        </div>
      </section>

      <section className="projects-section" id="projects">
        <div className="shell section-heading">
          <div className="section-label"><span>02</span> SELECTED WORKS</div>
          <h2>四个项目，<br />四种<em>把问题重新定义</em>的方式。</h2>
        </div>
        <div className="project-list shell">
          {projects.map((project) => (
            <Link className="project-card" href={`/projects/${project.slug}`} key={project.slug}>
              <ProjectVisual index={project.index} accent={project.accent} label={project.title} image={project.image} imagePosition={project.imagePosition} />
              <div className="project-card__content">
                <div className="project-index">CASE / {project.index}</div>
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
                <div className="project-tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                <div className="project-open">VIEW CASE <b>↗</b></div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="strengths-section shell" id="strengths">
        <div className="section-heading">
          <div className="section-label"><span>03</span> CAPABILITY MATRIX</div>
          <h2>不止提出想法。<br /><em>更把想法推向现实。</em></h2>
        </div>
        <div className="strength-grid">
          {strengths.map((item) => (
            <article className="strength-card" key={item.no}>
              <div className="strength-no">{item.no}</div>
              <h3>{item.title}</h3>
              <dl>
                <div><dt>擅长</dt><dd>{item.skill}</dd></div>
                <div><dt>工作方式</dt><dd>{item.method}</dd></div>
                <div><dt>解决问题</dt><dd>{item.solve}</dd></div>
              </dl>
            </article>
          ))}
        </div>
      </section>

      <footer className="site-footer shell" id="contact">
        <div className="section-label"><span>04</span> LET’S CONNECT</div>
        <h2>让想法，<br /><em>遇见机会。</em></h2>
        <div className="footer-row">
          <p>如果你正在寻找关于智能产品、AI 交互或新消费体验的下一种可能，欢迎联系我。</p>
          <a className="contact-button" href="mailto:hjn021229@126.com"><span>Email : hjn021229@126.com</span><b>↗</b></a>
        </div>
        <div className="footer-base"><span>© 2026 · JENNY HUANG</span><Link href="/">VISUAL INTRO ↑</Link></div>
      </footer>
    </main>
  );
}
