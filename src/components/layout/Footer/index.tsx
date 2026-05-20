"use client";

import { FaGithub, FaLinkedin } from "react-icons/fa";

const currentYear = new Date().getFullYear();
const links = [
  {
    label: "Home",
    href: "#home",
  },
  {
    label: "Sobre",
    href: "#about",
  },
  {
    label: "Skills",
    href: "#skills",
  },
  {
    label: "Experiência",
    href: "#experience",
  },
  {
    label: "Projetos",
    href: "#projects",
  },
  {
    label: "Contato",
    href: "#contact",
  },
];

export function Footer() {
  return (
    <footer className="relative border-t border-white/10 py-10">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_bottom,rgba(220,38,38,0.08),transparent_60%)]" />

      <div className="container-default">
        <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">
          <div className="text-center lg:text-left">
            <h3 className="text-2xl font-bold text-white">
              Regian{" "}
              <span className="bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">
                Leopoldo
              </span>
            </h3>

            <p className="mt-2 text-sm text-zinc-500">
              Full Stack Developer • Engenharia de Software
            </p>
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-5 text-sm text-zinc-400">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="transition duration-300 hover:text-red-500"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/RegianLeopoldo"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 transition duration-300 hover:scale-105 hover:bg-white/10"
            >
              <FaGithub size={20} />
            </a>

            <a
              href="https://www.linkedin.com/in/regian-leopoldo-463777304"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 transition duration-300 hover:scale-105 hover:bg-white/10"
            >
              <FaLinkedin size={20} />
            </a>
          </div>
        </div>

        <div className="mt-8 border-t border-white/10 pt-6 text-center text-sm text-zinc-500">
          © {currentYear} Regian Leopoldo. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
