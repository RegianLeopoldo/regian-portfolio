/*"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "TechPlus",
    description:
      "E-commerce moderno de tecnologia com experiência premium, integração de pagamentos e arquitetura Full Stack.",
    image: "/projects/techplus.png",
    technologies: ["React", "Node.js", "MongoDB", "Mercado Pago"],
    liveUrl: "https://techplus-khaki.vercel.app/",
    githubUrl: "#",
  },
  {
    title: "Auto Center Cristalândia",
    description:
      "Sistema web institucional para oficina automotiva, focado em presença digital, performance e experiência do usuário.",
    image: "/projects/auto-center.png",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind"],
    liveUrl: "https://auto-center-cristalandia-pi.vercel.app/",
    githubUrl: "#",
  },
  {
    title: "Raízes Quilombolas",
    description:
      "Plataforma institucional voltada à valorização cultural e identidade quilombola através de experiência digital moderna.",
    image: "/projects/raizes.png",
    technologies: ["Next.js", "TypeScript", "Tailwind"],
    liveUrl: "https://raizes-quilombolas.vercel.app/",
    githubUrl: "#",
  },
  {
    title: "Coca-Cola Landing Page",
    description:
      "Landing page moderna inspirada na Coca-Cola, com foco em UI, animações e responsividade.",
    image: "/projects/coca-cola.png",
    technologies: ["React", "CSS", "JavaScript"],
    liveUrl: "https://coca-cola-landing-page-gilt.vercel.app/",
    githubUrl: "#",
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative overflow-hidden py-28">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(220,38,38,0.08),transparent_60%)]" />

      <div className="container-default">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="mb-4 inline-flex rounded-full border border-red-500/20 bg-red-500/10 px-4 py-2 text-sm text-red-400">
            Projetos
          </span>

          <h2 className="text-4xl font-bold sm:text-5xl">
            Projetos em{" "}
            <span className="bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">
              destaque
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-zinc-400">
            Projetos desenvolvidos com foco em performance, arquitetura,
            experiência do usuário e aplicações modernas.
          </p>
        </motion.div>

        <div className="mt-20 grid gap-8 lg:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              className="group overflow-hidden rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-md transition duration-300 hover:-translate-y-2 hover:border-red-500/20"
            >
              <div className="relative h-[260px] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
              </div>

              <div className="p-8">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-semibold text-white">
                      {project.title}
                    </h3>

                    <p className="mt-4 leading-7 text-zinc-400">
                      {project.description}
                    </p>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/10 bg-black/20 px-4 py-2 text-sm text-zinc-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-8 flex items-center gap-4">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-12 items-center gap-2 rounded-2xl bg-red-600 px-5 font-medium text-white transition duration-300 hover:bg-red-700"
                  >
                    Ver Projeto
                    <ArrowUpRight size={18} />
                  </a>

                  {project.githubUrl !== "#" && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 transition hover:bg-white/10"
                    >
                      <FaGithub size={20} />
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}*/

"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "TechPlus",
    description:
      "E-commerce moderno de tecnologia com experiência premium, integração de pagamentos e arquitetura Full Stack.",
    image: "/projects/techplus.png",
    technologies: ["React", "Node.js", "MongoDB", "Mercado Pago"],
    liveUrl: "https://techplus-khaki.vercel.app/",
    githubUrl: "#",
    isWip: true,
  },
  {
    title: "Auto Center Cristalândia",
    description:
      "Sistema web institucional para oficina automotiva, focado em presença digital, performance e experiência do usuário.",
    image: "/projects/auto-center.png",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind"],
    liveUrl: "https://auto-center-cristalandia-pi.vercel.app/",
    githubUrl: "#",
    isWip: false,
  },
  {
    title: "Raízes Quilombolas",
    description:
      "Plataforma institucional voltada à valorização cultural e identidade quilombola através de experiência digital moderna.",
    image: "/projects/raizes.png",
    technologies: ["Next.js", "TypeScript", "Tailwind"],
    liveUrl: "https://raizes-quilombolas.vercel.app/",
    githubUrl: "#",
    isWip: false,
  },
  {
    title: "Coca-Cola Landing Page",
    description:
      "Landing page moderna inspirada na Coca-Cola, com foco em UI, animações e responsividade.",
    image: "/projects/coca-cola.png",
    technologies: ["React", "CSS", "JavaScript"],
    liveUrl: "https://coca-cola-landing-page-gilt.vercel.app/",
    githubUrl: "#",
    isWip: false,
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative overflow-hidden py-28">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(220,38,38,0.08),transparent_60%)]" />

      <div className="container-default">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="mb-4 inline-flex rounded-full border border-red-500/20 bg-red-500/10 px-4 py-2 text-sm text-red-400">
            Projetos
          </span>

          <h2 className="text-4xl font-bold sm:text-5xl">
            Projetos em{" "}
            <span className="bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">
              destaque
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-zinc-400">
            Projetos desenvolvidos com foco em performance, arquitetura,
            experiência do usuário e aplicações modernas.
          </p>
        </motion.div>

        <div className="mt-20 grid gap-8 lg:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              className="group overflow-hidden rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-md transition duration-300 hover:-translate-y-2 hover:border-red-500/20"
            >
              <div className="relative h-[260px] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                />

                {project.isWip && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.15 + 0.3, duration: 0.4 }}
                    className="absolute right-4 top-4 z-10 flex items-center gap-1.5 rounded-full border border-red-500/30 bg-black/80 px-4 py-1.5 text-xs font-medium text-red-400 backdrop-blur-md selection:bg-transparent"
                  >
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                    </span>
                    Em desenvolvimento
                  </motion.div>
                )}
              </div>

              <div className="p-8">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-semibold text-white">
                      {project.title}
                    </h3>

                    <p className="mt-4 leading-7 text-zinc-400">
                      {project.description}
                    </p>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/10 bg-black/20 px-4 py-2 text-sm text-zinc-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-8 flex items-center gap-4">
                  {project.isWip ? (
                    <button
                      disabled
                      className="flex h-12 cursor-not-allowed items-center gap-2 rounded-2xl border border-zinc-800 bg-zinc-900/50 px-5 font-medium text-zinc-500 opacity-50"
                    >
                      WIP - Em breve
                    </button>
                  ) : (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-12 items-center gap-2 rounded-2xl bg-red-600 px-5 font-medium text-white transition duration-300 hover:bg-red-700"
                    >
                      Ver Projeto
                      <ArrowUpRight size={18} />
                    </a>
                  )}

                  {project.githubUrl !== "#" && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 transition hover:bg-white/10"
                    >
                      <FaGithub size={20} />
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
