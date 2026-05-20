"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Database,
  Globe,
  Smartphone,
  Server,
  GitBranch,
} from "lucide-react";

const skills = [
  {
    title: "Frontend",
    description: "Criação de interfaces modernas, responsivas e performáticas.",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    icon: Globe,
  },
  {
    title: "Backend",
    description: "Desenvolvimento de APIs escaláveis e integrações robustas.",
    technologies: ["Node.js", "Express", "REST API", "JWT"],
    icon: Server,
  },
  {
    title: "Banco de Dados",
    description: "Estruturação, modelagem e persistência de dados.",
    technologies: ["MongoDB", "MySQL", "Mongoose"],
    icon: Database,
  },
  {
    title: "Mobile",
    description: "Aplicações mobile multiplataforma com foco em performance.",
    technologies: ["React Native", "Expo"],
    icon: Smartphone,
  },
  {
    title: "Versionamento",
    description: "Controle de versão e fluxo profissional de desenvolvimento.",
    technologies: ["Git", "GitHub"],
    icon: GitBranch,
  },
  {
    title: "Arquitetura",
    description: "Boas práticas, clean code e organização escalável.",
    technologies: ["SOLID", "REST", "Componentização"],
    icon: Code2,
  },
];

export function Skills() {
  return (
    <section id="skills" className="relative overflow-hidden py-28">
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
            Skills
          </span>

          <h2 className="text-4xl font-bold sm:text-5xl">
            Tecnologias e{" "}
            <span className="bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">
              especialidades
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-zinc-400">
            Tecnologias e ferramentas que utilizo no desenvolvimento de
            aplicações modernas, escaláveis e performáticas.
          </p>
        </motion.div>

        <div className="mt-20 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {skills.map((skill, index) => {
            const Icon = skill.icon;

            return (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="group rounded-[32px] border border-white/10 bg-white/5 p-7 backdrop-blur-md transition duration-300 hover:-translate-y-2 hover:border-red-500/20 hover:bg-white/[0.08]"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-red-600/10 text-red-500 transition duration-300 group-hover:scale-110">
                  <Icon size={30} />
                </div>

                <h3 className="text-2xl font-semibold text-white">
                  {skill.title}
                </h3>

                <p className="mt-3 leading-7 text-zinc-400">
                  {skill.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {skill.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-white/10 bg-black/20 px-4 py-2 text-sm text-zinc-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
