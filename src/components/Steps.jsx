import Reveal from "./Reveal.jsx";
import WhatsIcon from "./WhatsIcon.jsx";
import { WHATSAPP_URL } from "../lib/constants.js";

const STEPS = [
  {
    num: "1",
    title: "Chame no WhatsApp",
    text: "Conte rapidamente sobre o seu negócio (ou a empresa que você quer abrir). A primeira conversa é sem compromisso.",
  },
  {
    num: "2",
    title: "Receba um diagnóstico",
    text: "Analisamos sua situação fiscal e tributária e mostramos, com clareza, onde dá para melhorar e economizar.",
  },
  {
    num: "3",
    title: "Deixe o resto com a gente",
    text: "Cuidamos da migração ou abertura, das obrigações e da rotina contábil — e você acompanha tudo de perto.",
  },
];

export default function Steps() {
  return (
    <section id="como-funciona" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold tracking-[0.3em] text-gold">
            COMO FUNCIONA
          </p>
          <h2 className="mt-4 font-display text-3xl font-bold md:text-4xl">
            Começar é <span className="text-gradient-gold">simples</span>
          </h2>
        </Reveal>

        <div className="relative mt-14 grid gap-10 md:grid-cols-3 md:gap-6">
          {/* linha de conexão no desktop */}
          <div
            aria-hidden="true"
            className="absolute left-[16%] right-[16%] top-7 hidden border-t border-dashed border-gold/30 md:block"
          />
          {STEPS.map((s, i) => (
            <Reveal key={s.num} delay={i * 0.15} className="relative">
              <div className="flex flex-col items-center text-center">
                <span className="glow-gold relative z-10 flex h-14 w-14 items-center justify-center rounded-full bg-gold font-display text-xl font-bold text-ink">
                  {s.num}
                </span>
                <h3 className="mt-6 font-display text-xl font-semibold">
                  {s.title}
                </h3>
                <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted">
                  {s.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3} className="mt-14 text-center">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="glow-gold inline-flex items-center gap-2.5 rounded-full bg-gold px-8 py-4 font-semibold text-ink transition-all hover:scale-[1.03] hover:bg-gold-soft"
          >
            <WhatsIcon />
            Começar agora
          </a>
        </Reveal>
      </div>
    </section>
  );
}
