import { motion } from "framer-motion";
import { LogoMark } from "./Logo.jsx";
import WhatsIcon from "./WhatsIcon.jsx";
import { WHATSAPP_URL } from "../lib/constants.js";

const HIGHLIGHTS = [
  { title: "100% digital", text: "sem burocracia e sem papelada" },
  { title: "Visão estratégica", text: "números que viram decisões" },
  { title: "Atendimento humano", text: "você fala com gente de verdade" },
];

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden pt-36 pb-20 md:pt-44 md:pb-28"
    >
      {/* brilho dourado de fundo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-gold/10 blur-[140px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.05)_1px,transparent_0)] [background-size:34px_34px]"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 md:px-8 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-gold"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            CONTABILIDADE ESTRATÉGICA EM PETRÓPOLIS/RJ
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl font-bold leading-[1.12] md:text-5xl lg:text-6xl"
          >
            A contabilidade que{" "}
            <span className="text-gradient-gold">constrói o futuro</span> com
            você
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-muted"
          >
            Tecnologia de ponta, processos inteligentes e uma visão estratégica
            que transforma números em decisões. Aqui não é só sobre cumprir
            obrigações — é sobre crescimento, clareza e evolução contínua.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-9 flex flex-col gap-4 sm:flex-row"
          >
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="glow-gold inline-flex items-center justify-center gap-2.5 rounded-full bg-gold px-8 py-4 text-base font-semibold text-ink transition-all hover:scale-[1.03] hover:bg-gold-soft"
            >
              <WhatsIcon />
              Falar no WhatsApp
            </a>
            <a
              href="#servicos"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-line bg-card/50 px-8 py-4 text-base font-semibold text-white transition-all hover:border-gold/60 hover:text-gold"
            >
              Conhecer os serviços
            </a>
          </motion.div>

          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-12 grid gap-4 sm:grid-cols-3"
          >
            {HIGHLIGHTS.map((h) => (
              <li
                key={h.title}
                className="rounded-2xl border border-line bg-ink-2 p-4"
              >
                <p className="font-display text-sm font-semibold text-gold">
                  {h.title}
                </p>
                <p className="mt-1 text-sm text-muted">{h.text}</p>
              </li>
            ))}
          </motion.ul>
        </div>

        {/* Marca animada */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="relative mx-auto hidden max-w-sm lg:block"
        >
          <div
            aria-hidden="true"
            className="absolute inset-0 rounded-full bg-gold/15 blur-[90px]"
          />
          <motion.div
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="relative rounded-[2rem] border border-line bg-ink-2/80 p-14 backdrop-blur"
          >
            <LogoMark className="h-56 w-56" />
            <p className="mt-8 text-center font-display text-2xl font-bold tracking-[0.3em]">
              ATTROW
            </p>
            <p className="mt-2 text-center text-[11px] font-medium tracking-[0.4em] text-muted">
              ASSESSORIA CONTÁBIL
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
