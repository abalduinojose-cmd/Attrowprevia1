import Reveal from "./Reveal.jsx";
import WhatsIcon from "./WhatsIcon.jsx";
import {
  ADDRESS,
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  MAPS_EMBED_URL,
  WHATSAPP_DISPLAY,
  WHATSAPP_URL,
} from "../lib/constants.js";

export default function Location() {
  return (
    <section id="contato" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <p className="text-xs font-semibold tracking-[0.3em] text-gold">
              ONDE ESTAMOS
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold md:text-4xl">
              Venha tomar um café{" "}
              <span className="text-gradient-gold">com a gente</span>
            </h2>
            <p className="mt-4 max-w-md text-muted">
              Atendimento digital para todo o Brasil — e um escritório de
              portas abertas em Petrópolis para quem prefere conversar
              pessoalmente.
            </p>

            <ul className="mt-9 space-y-5">
              <li className="flex items-start gap-4">
                <span className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gold/10 text-gold">
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 21s7-5.1 7-11a7 7 0 1 0-14 0c0 5.9 7 11 7 11Z" />
                    <circle cx="12" cy="10" r="2.5" />
                  </svg>
                </span>
                <div>
                  <p className="text-sm font-semibold text-white">Endereço</p>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{ADDRESS}</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gold/10 text-gold">
                  <WhatsIcon className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-white">WhatsApp</p>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 inline-block text-sm text-muted transition-colors hover:text-gold"
                  >
                    {WHATSAPP_DISPLAY}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gold/10 text-gold">
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="18" height="18" rx="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none" />
                  </svg>
                </span>
                <div>
                  <p className="text-sm font-semibold text-white">Instagram</p>
                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 inline-block text-sm text-muted transition-colors hover:text-gold"
                  >
                    {INSTAGRAM_HANDLE}
                  </a>
                </div>
              </li>
            </ul>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="overflow-hidden rounded-2xl border border-line">
              <iframe
                src={MAPS_EMBED_URL}
                title="Mapa - Attrow Assessoria Contábil em Petrópolis/RJ"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                className="h-[380px] w-full grayscale-[35%] contrast-[1.05] md:h-[440px]"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
