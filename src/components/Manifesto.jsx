import Reveal from "./Reveal.jsx";
import WhatsIcon from "./WhatsIcon.jsx";
import { WHATSAPP_URL } from "../lib/constants.js";

export default function Manifesto() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-1/2 h-[420px] w-[420px] -translate-y-1/2 translate-x-1/3 rounded-full bg-gold/10 blur-[120px]"
      />
      <div className="relative mx-auto max-w-4xl px-5 text-center md:px-8">
        <Reveal>
          <p className="text-xs font-semibold tracking-[0.3em] text-gold">
            MANIFESTO
          </p>
          <blockquote className="mt-8 font-display text-2xl font-medium leading-[1.5] text-white md:text-[2rem] md:leading-[1.5]">
            “A Attrow chega quebrando padrões: uma contabilidade que{" "}
            <span className="text-gold">não olha só pro passado</span>, mas
            constrói o futuro junto com você.{" "}
            <span className="text-gold">
              Se é pra fazer igual todo mundo, nem começa.
            </span>{" "}
            A Attrow veio pra fazer diferente.”
          </blockquote>
        </Reveal>
        <Reveal delay={0.15}>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex items-center gap-2.5 rounded-full border border-gold px-8 py-4 font-semibold text-gold transition-all hover:bg-gold hover:text-ink"
          >
            <WhatsIcon />
            Quero fazer diferente
          </a>
        </Reveal>
      </div>
    </section>
  );
}
