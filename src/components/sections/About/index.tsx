"use client";

import { motion } from "framer-motion";
import { Code2, Database, Globe, Smartphone } from "lucide-react";

const highlights = [
  {
    title: "Full Stack",
    description: "Web, APIs e aplicações escaláveis",
    icon: Code2,
  },
  {
    title: "Backend",
    description: "Node.js, APIs REST e integrações",
    icon: Database,
  },
  {
    title: "Frontend",
    description: "Interfaces modernas com React e Next.js",
    icon: Globe,
  },
  {
    title: "Mobile",
    description: "Experiência cross-platform com React Native",
    icon: Smartphone,
  },
];

export function About() {
  return (
    <section id="about" className="relative overflow-hidden py-28">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_bottom,rgba(220,38,38,0.08),transparent_50%)]" />

      <div className="container-default">
        <div className="grid items-center gap-20 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center lg:text-left"
          >
            <span className="mb-4 inline-flex rounded-full border border-red-500/20 bg-red-500/10 px-4 py-2 text-sm text-red-400">
              Sobre mim
            </span>

            <h2 className="text-4xl font-bold leading-tight sm:text-5xl">
              Construindo experiências digitais com foco em{" "}
              <span className="bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">
                performance e escalabilidade
              </span>
            </h2>

            <p className="mt-8 text-lg leading-8 text-zinc-400">
              Sou desenvolvedor Full Stack focado em criar aplicações modernas,
              performáticas e escaláveis, utilizando tecnologias como React,
              Next.js, Node.js, TypeScript e React Native.
            </p>

            <p className="mt-5 text-lg leading-8 text-zinc-400">
              Atualmente curso Engenharia de Software e desenvolvo projetos
              reais aplicando boas práticas de arquitetura, clean code,
              integração de APIs e experiência do usuário.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4 lg:justify-start">
              <div className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur-sm">
                <strong className="block text-2xl font-bold text-white">
                  Full Stack
                </strong>
                <span className="text-sm text-zinc-400">
                  React • Node • Mobile
                </span>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur-sm">
                <strong className="block text-2xl font-bold text-white">
                  APIs
                </strong>
                <span className="text-sm text-zinc-400">
                  REST • Integrações • Backend
                </span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid gap-5 sm:grid-cols-2"
          >
            {highlights.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur-md transition duration-300 hover:-translate-y-2 hover:border-red-500/20 hover:bg-white/[0.08]"
                >
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-red-600/10 text-red-500 transition group-hover:scale-110">
                    <Icon size={28} />
                  </div>

                  <h3 className="text-2xl font-semibold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-2 leading-7 text-zinc-400">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
