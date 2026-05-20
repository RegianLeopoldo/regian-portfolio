"use client";

import { motion } from "framer-motion";
import { GraduationCap, BriefcaseBusiness, Code2 } from "lucide-react";

const experiences = [
  {
    title: "Engenharia de Software",
    company: "Formação Acadêmica",
    period: "Atual",
    description:
      "Graduação focada em desenvolvimento de software, arquitetura, algoritmos, banco de dados e engenharia de sistemas.",
    icon: GraduationCap,
  },
  {
    title: "Projetos Full Stack",
    company: "Projetos Reais",
    period: "2024 - Atual",
    description:
      "Desenvolvimento de aplicações web modernas utilizando React, Next.js, Node.js, TypeScript e integrações com APIs externas.",
    icon: Code2,
  },
  {
    title: "Backend & APIs",
    company: "Experiência Prática",
    period: "2024 - Atual",
    description:
      "Construção de APIs REST, autenticação JWT, integração com Mercado Pago, WhatsApp API, MongoDB e MySQL.",
    icon: BriefcaseBusiness,
  },
];

export function Experience() {
  return (
    <section id="experience" className="relative overflow-hidden py-28">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(220,38,38,0.08),transparent_50%)]" />

      <div className="container-default">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="mb-4 inline-flex rounded-full border border-red-500/20 bg-red-500/10 px-4 py-2 text-sm text-red-400">
            Experiência
          </span>

          <h2 className="text-4xl font-bold sm:text-5xl">
            Minha{" "}
            <span className="bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">
              jornada
            </span>{" "}
            na tecnologia
          </h2>

          <p className="mt-6 text-lg leading-8 text-zinc-400">
            Construindo experiência prática através de estudos, desenvolvimento
            Full Stack e projetos reais.
          </p>
        </motion.div>

        <div className="relative mx-auto mt-20 max-w-5xl">
          <div className="absolute left-5 top-0 h-full w-px bg-white/10 lg:left-1/2 lg:-translate-x-1/2" />

          <div className="space-y-10">
            {experiences.map((experience, index) => {
              const Icon = experience.icon;
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={experience.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className={`relative flex w-full ${
                    isLeft ? "lg:justify-start" : "lg:justify-end"
                  }`}
                >
                  <div className="absolute left-5 top-10 z-10 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full border border-red-500/20 bg-zinc-950 text-red-500 lg:left-1/2">
                    <Icon size={22} />
                  </div>

                  <div className="ml-16 w-full rounded-[32px] border border-white/10 bg-white/5 p-7 backdrop-blur-md lg:ml-0 lg:w-[46%]">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <h3 className="text-2xl font-semibold text-white">
                          {experience.title}
                        </h3>

                        <p className="mt-1 text-zinc-400">
                          {experience.company}
                        </p>
                      </div>

                      <span className="rounded-full border border-white/10 bg-black/20 px-4 py-2 text-sm text-zinc-300">
                        {experience.period}
                      </span>
                    </div>

                    <p className="mt-5 leading-8 text-zinc-400">
                      {experience.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
