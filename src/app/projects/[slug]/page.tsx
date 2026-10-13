import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ProjectVisual } from "@/components/project-visual";
import { SiteHeader } from "@/components/site-header";
import { getProject, orderedProjects, projects } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const currentIndex = orderedProjects.findIndex((item) => item.slug === slug);
  const nextProject = orderedProjects[(currentIndex + 1) % orderedProjects.length];

  return (
    <main className="case-page">
      <SiteHeader compact />
      <section className="case-hero shell">
        <Link href="/#projects" className="back-link">← 返回精选项目</Link>
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

      {!(["night-island", "palace-ridge-aigc"] as string[]).includes(project.slug) && <>
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
        </section>
      </>}

      {project.gallery.length > 0 && <section className="case-gallery shell">
        {project.gallery.map((image, index) => {
          const isPoster = project.slug === "night-island" && index === 0;
          return (
            <figure className={`case-gallery__item${isPoster ? " case-gallery__item--poster" : ""}`} key={image}>
              {isPoster ? (
                <Image className="case-gallery__poster" src={image} alt={`${project.title} 项目海报`} width={2400} height={3600} />
              ) : (
                <Image className="case-gallery__image" src={image} alt={`${project.title} 项目图片 ${index}`} width={0} height={0} sizes="(max-width: 900px) 100vw, 1200px" style={{ width: "100%", height: "auto" }} />
              )}
            </figure>
          );
        })}
      </section>
      }

      {project.slug === "embodied-intelligence" ? (
        <Link className="next-project" href="/">
          <span>BACK TO PORTFOLIO</span>
          <strong>回到作品集</strong>
          <b>↗</b>
        </Link>
      ) : (
        <Link className="next-project" href={`/projects/${nextProject.slug}`}>
          <span>NEXT CASE / {nextProject.index}</span>
          <strong>{nextProject.shortTitle}</strong>
          <b>↗</b>
        </Link>
      )}
    </main>
  );
}
