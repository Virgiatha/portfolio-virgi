import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ProjectDetail from "@/components/ProjectDetail";
import { getProject, projects } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: project.shortTitle,
    description: project.summary,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: {
      title: `${project.shortTitle} | Virgi Atha Raditya`,
      description: project.summary,
      images: [{ url: project.image }],
      type: "article",
    },
    twitter: { card: "summary_large_image", title: project.shortTitle, description: project.summary },
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  return (
    <>
      <Navbar />
      <ProjectDetail project={project} />
      <Footer />
    </>
  );
}
