export type Skill = { label: string; icon?: string };
export type SkillGroup = { group: string; items: Skill[] };

export const site = {
  name: "Virgi Atha Raditya",
  shortName: "Virgi",
  title: "Virgi Atha Raditya — Data, AI & Web Engineer",
  description:
    "Computer Science graduate in Banjarbaru, Indonesia. Builds data, AI, web, and IoT systems, including a published NLP study and an inventory system for a national weather station.",
  email: "virgiatharaditya37@gmail.com",
  linkedin: "https://www.linkedin.com/in/virgi-atha-raditya-5759531a4/",
  cv: "/downloads/Virgi Atha Raditya_CV_SE.pdf",
  location: "Banjarbaru, Indonesia",
  eyebrow: "Computer Science graduate · Banjarbaru, Indonesia",
  heroSubline:
    "I build data, AI, and web systems, with hands-on IoT experience. I recently published an NLP study on Indonesian sentiment and built an inventory system for a national weather station.",
  about: [
    "I'm a Computer Science graduate based in Banjarbaru, Indonesia, with a focus on data analysis, machine learning, and full-stack web development. I graduated from Lambung Mangkurat University with a GPA of 3.67/4.00, and my work has moved between research, production systems, and connected devices.",
    "My main experience is in building web applications end to end: designing the database, writing the backend and frontend, and integrating APIs. I've worked with CodeIgniter, Laravel, Node.js, and MySQL, and I've picked up IoT work along the way with ESP32 and sensors.",
    "I like problems where software meets the real world: a research question that needs clean data, an internal tool a team actually uses, or a sensor that needs a reliable dashboard. I care about systems that stay simple, load fast, and are easy for the people using them.",
  ],
  skills: [
    {
      group: "Data & AI",
      items: [
        { label: "Python", icon: "python" },
        { label: "NLP" },
        { label: "Machine learning" },
        { label: "SQL" },
        { label: "Power BI" },
      ],
    },
    {
      group: "Web",
      items: [
        { label: "CodeIgniter", icon: "codeigniter" },
        { label: "Laravel", icon: "laravel" },
        { label: "Node.js", icon: "nodedotjs" },
        { label: "JavaScript", icon: "javascript" },
        { label: "MySQL", icon: "mysql" },
        { label: "PostgreSQL", icon: "postgresql" },
      ],
    },
    {
      group: "IoT & Systems",
      items: [
        { label: "ESP32", icon: "espressif" },
        { label: "Sensors" },
        { label: "Telegram Bot", icon: "telegram" },
        { label: "Linux", icon: "linux" },
        { label: "Networking" },
      ],
    },
  ] as SkillGroup[],
  nav: [
    { label: "About", href: "/#about" },
    { label: "Projects", href: "/#projects" },
    { label: "Experience", href: "/#experience" },
    { label: "Contact", href: "/#contact" },
  ],
};
