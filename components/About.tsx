import { BrainCircuit, Code2, Cpu, Sparkles } from "lucide-react";
import { Reveal } from "./Reveal";

const practices = [
  { icon: BrainCircuit, title: "Data & AI", copy: "Python, NLP, machine learning, Power BI, SQL", color: "bg-[#dce2ff]" },
  { icon: Code2, title: "Web Development", copy: "CodeIgniter, Laravel, Node.js, MySQL, JavaScript", color: "bg-[#e9ffc6]" },
  { icon: Cpu, title: "IoT & Systems", copy: "ESP32, sensors, Telegram Bot, Linux, networking", color: "bg-[#d5f5ea]" },
];

export default function About() {
  return (
    <section id="about" className="section relative overflow-hidden">
      <div className="absolute -right-40 top-24 size-96 rounded-full bg-[var(--cobalt)] opacity-[.06] blur-3xl" />
      <div className="shell relative">
        <Reveal className="grid gap-8 lg:grid-cols-[.65fr_1.35fr]"><div><p className="eyebrow">02 / About me</p><div className="mt-8 hidden size-20 rotate-6 place-items-center rounded-3xl bg-[var(--cobalt)] text-white lg:grid"><Sparkles size={30} /></div></div><div><h2 className="heading">BUILDING AT THE<br /><span className="text-[var(--cobalt)]">INTERSECTION</span> OF<br />IDEAS &amp; SYSTEMS.</h2><p className="copy mt-8 max-w-3xl text-lg">I&apos;m a Computer Science graduate who enjoys translating difficult problems into digital products that feel simple. My work moves between data analysis, artificial intelligence, web applications, connected devices, and the infrastructure behind them.</p></div></Reveal>
        <div className="mt-16 grid gap-4 lg:grid-cols-3">
          {practices.map(({ icon: Icon, title, copy, color }, index) => (
            <Reveal
              key={title}
              delay={index * .08}
              className={`bento-card ${color} flex min-h-64 flex-col p-6 sm:p-8`}
            >
              <div className="grid size-12 place-items-center rounded-2xl bg-black text-white">
                <Icon size={22} />
              </div>
              <div className="mt-auto">
                <span className="text-xs font-bold text-black/45">0{index + 1}</span>
                <h3 className={`${index === 0 ? "text-4xl sm:text-5xl" : "text-3xl"} mt-3 font-black tracking-[-.055em]`}>{title}</h3>
                <p className="mt-4 max-w-sm text-sm leading-6 text-black/60">{copy}</p>
              </div>
            </Reveal>
          ))}
      </div>
    </div>
</section >
  );
}
