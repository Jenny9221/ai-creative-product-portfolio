import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ProjectVisual } from "@/components/project-visual";
import { SiteHeader } from "@/components/site-header";
import { getProject, projects } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const currentIndex = projects.findIndex((item) => item.slug === slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <main className="case-page">
      <SiteHeader compact />
      <section className="case-hero shell">
        <Link href="/portfolio#projects" className="back-link">← 返回精选项目</Link>
        <div className="case-heading">
          <div><span>CASE / {project.index}</span><span>{project.year}</span></div>
          <h1>{project.title}</h1>
          <p>{project.summary}</p>
        </div>
        <ProjectVisual index={project.index} accent={project.accent} label={project.title} image={project.image} imagePosition={project.imagePosition} />
        <div className="case-meta">
          <div><span>角色</span><strong>{project.role}</strong></div>
          <div><span>领域</span><strong>{project.tags[0]}</strong></div>
          <div><span>关键词</span><strong>{project.tags.slice(1).join(" · ")}</strong></div>
        </div>
      </section>

      <section className="case-challenge shell">
        <div className="section-label"><span>01</span> CHALLENGE</div>
        <h2>{project.challenge}</h2>
      </section>

      <section className="case-process shell">
        <div className="section-label"><span>02</span> PROCESS</div>
        <div className="process-list">
          {project.approach.map((step, index) => (
            <article key={step.label}>
              <div className="process-image">
                <Image src={step.image} alt={`${project.title} ${step.label}`} fill sizes="(max-width: 900px) 100vw, 25vw" />
                <span>0{index + 1}</span>
              </div>
              <div><span>{step.label}</span><h3>{step.title}</h3></div>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="case-outputs shell">
        <div className="section-label"><span>03</span> CORE OUTPUTS</div>
        <div className="output-grid">
          {project.outputs.map((output, index) => (
            <div key={output.title}>
              <Image src={output.image} alt={`${project.title} ${output.title}`} fill sizes="(max-width: 900px) 100vw, 25vw" />
              <span>0{index + 1}</span>
              <strong>{output.title}</strong>
            </div>
          ))}
        </div>
        {project.gallery.length > 0 && <div className={`case-gallery ${project.gallery.length === 1 ? "case-gallery--single" : ""}`}>
          {project.gallery.map((image, index) => (
            <figure className="case-gallery__item" key={image}>
              {project.gallery.length === 1 ? (
                <Image className="case-gallery__poster" src={image} alt={`${project.title} 补充海报`} width={2400} height={3600} />
              ) : (
                <Image src={image} alt={`${project.title} 补充图片 ${index + 1}`} fill sizes="(max-width: 900px) 100vw, 33vw" />
              )}
            </figure>
          ))}
        </div>}
      </section>

      <Link className="next-project" href={`/projects/${nextProject.slug}`}>
        <span>NEXT CASE / {nextProject.index}</span>
        <strong>{nextProject.shortTitle}</strong>
        <b>↗</b>
      </Link>
    </main>
  );
}
