export type Project = {
  slug: string;
  image?: string;
  imagePosition?: string;
  gallery: string[];
  index: string;
  title: string;
  shortTitle: string;
  tags: string[];
  summary: string;
  year: string;
  role: string;
  challenge: string;
  approach: { label: string; title: string; text: string; image: string }[];
  outputs: { title: string; image: string }[];
  accent: string;
};

export const projects: Project[] = [
  {
    slug: "embodied-intelligence",
    image: "/images/p01-cover.jpg",
    gallery: [],
    index: "01",
    title: "华为具身智能前瞻概念设计与体验研究",
    shortTitle: "具身智能",
    tags: ["智能硬件", "前瞻产品定义", "校企科研"],
    summary: "在运动能力之外，探索家用机器人的交互与形态表达，在品牌、硬件、用户多重约束下迭代可评审的硬件概念方案。",
    year: "2026.03 — 2026.11",
    role: "团队核心成员",
    challenge: "行业聚焦机器人运动性能，产品形态与交互定义缺失，甲方需求持续迭代。",
    approach: [
      { label: "Research", title: "从技术竞赛回到家庭场景", text: "梳理家用场景、用户期待与现有机器人体验，寻找运动性能之外的产品机会。", image: "/images/p01-process-01.jpg" },
      { label: "Define", title: "建立多约束判断框架", text: "把用户体验、品牌基因、硬件边界与工程现实放进同一套方案评估逻辑。", image: "/images/p01-process-02.png" },
      { label: "Deliver", title: "让概念进入可评审状态", text: "通过形态与交互方向迭代，逐步收敛为可讨论、可对接研发的概念方案。", image: "/images/p01-process-03.jpg" },
    ],
    outputs: [
      { title: "前瞻机会地图", image: "/images/p01-output-01.png" },
      { title: "产品形态方向", image: "/images/p01-output-02.jpg" },
      { title: "交互概念方案", image: "/images/p01-output-03.jpg" },
      { title: "阶段评审材料", image: "/images/p01-output-04.jpg" },
    ],
    accent: "blue",
  },
  {
    slug: "palace-ridge-aigc",
    image: "/images/p02-cover.jpg",
    imagePosition: "left center",
    gallery: [],
    index: "02",
    title: "宫脊灵境 —— 基于 AIGC 的故宫脊兽数字活化交互展陈设计",
    shortTitle: "宫脊灵境",
    tags: ["AIGC 交互", "文化展陈", "项目统筹"],
    summary: "把屋脊上看不见的文物带入展厅。通过用户洞察与手势交互原型，构建完整沉浸式观展闭环。",
    year: "2026.03-2026.04",
    role: "项目组长",
    challenge: "如何让远离观众视线的屋脊文物被看见、被理解，并形成完整而自然的沉浸体验。",
    approach: [
      { label: "Observe", title: "理解观看距离", text: "从观众对脊兽的认知断层出发，梳理展陈中的信息与体验机会。", image: "/images/p02-process-01.jpg" },
      { label: "Prototype", title: "让生成内容可被触发", text: "把 AIGC 内容与手势交互结合，快速搭建可体验的交互 Demo。", image: "/images/p02-process-02.jpg" },
      { label: "Orchestrate", title: "串联完整观展闭环", text: "统筹内容、空间与技术表达，使体验从吸引、探索到理解保持连贯。", image: "/images/p02-process-03.jpg" },
    ],
    outputs: [
      { title: "用户洞察", image: "/images/p02-output-01.jpg" },
      { title: "体验流程", image: "/images/p02-output-02.jpg" },
      { title: "手势交互 Demo", image: "/images/p02-output-03.jpg" },
      { title: "沉浸展陈概念", image: "/images/p02-output-04.jpg" },
    ],
    accent: "violet",
  },
  {
    slug: "night-island",
    image: "/images/p03-cover.jpg",
    gallery: ["/images/p03-poster.jpg"],
    index: "03",
    title: "夜屿乌托邦 —— 即时零售夜间情绪消费服务设计",
    shortTitle: "夜屿乌托邦",
    tags: ["消费体验", "用户洞察", "服务设计"],
    summary: "瞄准被忽略的深夜情绪消费空白，打通线上情绪诊断到实体即时配送的服务闭环。",
    year: "2026.04-2026.05",
    role: "项目组长",
    challenge: "深夜消费被效率逻辑主导，用户真实的情绪需求缺少识别、回应与持续承接。",
    approach: [
      { label: "Insight", title: "识别深夜情绪空白", text: "从消费行为背后的情绪动机入手，重新定义即时零售的服务价值。", image: "/images/p03-process-01.jpg" },
      { label: "Journey", title: "连接线上与线下", text: "将情绪识别、内容建议、商品选择与即时配送组织为连续旅程。", image: "/images/p03-process-02.jpg" },
      { label: "System", title: "设计可运行的服务闭环", text: "明确关键触点与前后台关系，使概念不止停留在单一界面。", image: "/images/p03-process-03.jpg" },
    ],
    outputs: [
      { title: "用户需求洞察", image: "/images/p03-output-01.jpg" },
      { title: "服务蓝图", image: "/images/p03-output-02.jpg" },
      { title: "关键触点设计", image: "/images/p03-output-03.jpg" },
      { title: "体验原型", image: "/images/p03-output-04.jpg" },
    ],
    accent: "amber",
  },
  {
    slug: "yanan-vr",
    image: "/images/p04-cover.jpg",
    gallery: [],
    index: "04",
    title: "延安自然科学院旧址 VR 大空间体验设计",
    shortTitle: "延安 VR 大空间",
    tags: ["VR 体验", "叙事设计", "落地实践"],
    summary: "用 VR 重构校史叙事，通过叙事、指引物料与内测迭代，完成面向公众开放的长期展陈项目。",
    year: "2025.09-2025.10",
    role: "项目成员",
    challenge: "如何把历史内容转化为空间中的可感知叙事，同时确保公众能够理解、进入并完成体验。",
    approach: [
      { label: "Narrative", title: "把史料转成空间线索", text: "围绕关键内容建立叙事节奏，让信息随用户移动自然展开。", image: "/images/p04-process-01.jpg" },
      { label: "Guidance", title: "降低进入体验的门槛", text: "补齐现场指引与体验物料，帮助公众理解操作和空间路径。", image: "/images/p04-process-02.jpg" },
      { label: "Iteration", title: "用内测修正真实问题", text: "依据测试反馈持续调整流程与表达，推进长期展陈落地。", image: "/images/p04-process-03.jpg" },
    ],
    outputs: [
      { title: "空间叙事框架", image: "/images/p04-output-01.jpg" },
      { title: "VR 体验流程", image: "/images/p04-output-02.jpg" },
      { title: "现场指引物料", image: "/images/p04-output-03.jpg" },
      { title: "内测迭代记录", image: "/images/p04-output-04.jpg" },
    ],
    accent: "red",
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
