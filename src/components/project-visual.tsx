import Image from "next/image";

export function ProjectVisual({ index, accent, label, image, imagePosition = "center" }: { index: string; accent: string; label: string; image?: string; imagePosition?: string }) {
  return (
    <div className={`project-visual project-visual--${accent}`} aria-label={`${label} 项目图片`} role="img">
      {image && <Image className="project-image" src={image} alt={label} fill sizes="(max-width: 900px) 100vw, 60vw" style={{ objectPosition: imagePosition }} />}
      <div className="visual-grid" />
      <div className="visual-orbit visual-orbit--one" />
      <div className="visual-orbit visual-orbit--two" />
      <div className="visual-core"><span>{index}</span></div>
    </div>
  );
}
