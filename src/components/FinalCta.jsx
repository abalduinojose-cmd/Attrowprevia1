import Reveal from "./Reveal.jsx";
import WhatsIcon from "./WhatsIcon.jsx";
import { WHATSAPP_URL } from "../lib/constants.js";

export default function FinalCta() {
  return (
    <section className="px-5 pb-20 md:px-8 md:pb-28">
      <Reveal className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-[2rem] border border-gold/30 bg-gradient-to-br from-ink-2 via-ink to-ink px-7 py-16 text-center md:px-16 md:py-20">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 left-1/2 h-72 w-[560px] -translate-x-1/2 rounded-full bg-gold/15 blur-[100px]"
          />
          <h2 className="relative font-display text-3xl font-bold leading-tight md:text-4xl lg:text-[2.6rem]">
            Pronto para ter uma contabilidade que{" "}
            <span className="text-gradient-gold">joga no seu time</span>?
          </h2>
          <p className="relative mx-auto mt-5 max-w-xl text-muted md:text-lg">
            Chame agora no WhatsApp e receba um diagnóstico gratuito da sua
            empresa — ou tire do papel o CNPJ que você sempre quis.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="glow-gold relative mt-9 inline-flex items-center gap-2.5 rounded-full bg-gold px-9 py-4 text-base font-semibold text-ink transition-all hover:scale-[1.03] hover:bg-gold-soft"
          >
            <WhatsIcon />
            Falar com a Attrow agora
          </a>
        </div>
      </Reveal>
    </section>
  );
}
