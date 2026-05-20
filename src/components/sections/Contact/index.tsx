"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const contacts = [
  {
    title: "Email",
    value: "regian.engcomp@gmail.com",
    href: "mailto:regian.engcomp@gmail.com",
    icon: Mail,
  },
  {
    title: "WhatsApp",
    value: "(89) 981214432",
    href: "https://wa.me/558998121432",
    icon: Phone,
  },
  {
    title: "Localização",
    value: "Piauí, Brasil",
    href: "#",
    icon: MapPin,
  },
];

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden py-28">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_bottom,rgba(220,38,38,0.08),transparent_60%)]" />

      <div className="container-default">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center lg:text-left"
          >
            <span className="mb-4 inline-flex rounded-full border border-red-500/20 bg-red-500/10 px-4 py-2 text-sm text-red-400">
              Contato
            </span>

            <h2 className="text-4xl font-bold leading-tight sm:text-5xl">
              Vamos construir algo{" "}
              <span className="bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">
                incrível juntos
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-400 lg:max-w-2xl">
              Estou disponível para oportunidades, projetos freelance,
              networking e novas conexões na área de tecnologia.
            </p>

            <div className="mt-10 flex items-center justify-center gap-4 lg:justify-start">
              <a
                href="https://github.com/RegianLeopoldo"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 transition duration-300 hover:scale-105 hover:bg-white/10"
              >
                <FaGithub size={22} />
              </a>

              <a
                href="https://www.linkedin.com/in/regian-leopoldo-463777304"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 transition duration-300 hover:scale-105 hover:bg-white/10"
              >
                <FaLinkedin size={22} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid gap-5"
          >
            {contacts.map((contact) => {
              const Icon = contact.icon;

              return (
                <a
                  key={contact.title}
                  href={contact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-red-500/20 hover:bg-white/[0.08]"
                >
                  <div className="flex items-center gap-5">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-red-600/10 text-red-500">
                      <Icon size={24} />
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-white">
                        {contact.title}
                      </h3>

                      <p className="text-zinc-400">{contact.value}</p>
                    </div>
                  </div>

                  <ArrowUpRight
                    size={22}
                    className="text-zinc-500 transition group-hover:text-red-500"
                  />
                </a>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
