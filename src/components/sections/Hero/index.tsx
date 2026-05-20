"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const technologies = [
  "React",
  "Next.js",
  "Node.js",
  "TypeScript",
  "React Native",
];

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-28"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(220,38,38,0.18),transparent_55%)]" />

      <div className="container-default">
        <div className="grid min-h-[85vh] items-center gap-16 py-10 lg:grid-cols-2 lg:gap-24">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-8 inline-flex rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm text-zinc-300 backdrop-blur-md"
            >
              Software Engineering | Full Stack Developer
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="max-w-3xl text-5xl font-bold leading-[1.05] sm:text-6xl lg:text-7xl"
            >
              Olá, eu sou
              <br />
              <span className="bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">
                Regian Leopoldo
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-8 max-w-2xl text-base leading-8 text-zinc-400 sm:text-lg"
            >
              Desenvolvedor Full Stack focado em criar aplicações modernas,
              performáticas e escaláveis utilizando React, Next.js, Node.js,
              React Native e TypeScript.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-10 flex flex-wrap items-center justify-center gap-4 lg:justify-start"
            >
              <a
                href="#projects"
                className="flex h-14 items-center gap-2 rounded-2xl bg-red-600 px-8 font-medium text-white transition duration-300 hover:scale-105 hover:bg-red-700"
              >
                Ver Projetos
                <ArrowRight size={18} />
              </a>

              <a
                href="https://github.com/RegianLeopoldo"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 transition duration-300 hover:scale-105 hover:border-red-500/30 hover:bg-white/10"
              >
                <FaGithub size={22} />
              </a>

              <a
                href="https://www.linkedin.com/in/regian-leopoldo-463777304"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 transition duration-300 hover:scale-105 hover:border-red-500/30 hover:bg-white/10"
              >
                <FaLinkedin size={22} />
              </a>
            </motion.div>

            <div className="mt-10 flex flex-wrap justify-center gap-3 lg:justify-start">
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-400 backdrop-blur-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="flex items-center justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-red-600/20 blur-[120px]" />

              <div className="relative h-[360px] w-[300px] overflow-hidden rounded-[36px] border border-white/10 bg-zinc-900 shadow-[0_0_60px_rgba(220,38,38,0.12)] sm:h-[450px] sm:w-[360px] lg:h-[540px] lg:w-[420px]">
                <Image
                  src="/profile.png"
                  alt="Regian Leopoldo"
                  fill
                  priority
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
