import Logo from "./Logo.jsx";
import WhatsIcon from "./WhatsIcon.jsx";
import {
  ADDRESS,
  CNPJ,
  FACEBOOK_URL,
  INSTAGRAM_URL,
  WHATSAPP_DISPLAY,
  WHATSAPP_URL,
} from "../lib/constants.js";

const NAV_LINKS = [
  { href: "#inicio", label: "Início" },
  { href: "#pilares", label: "Pilares" },
  { href: "#servicos", label: "Serviços" },
  { href: "#videos", label: "Vídeos" },
  { href: "#duvidas", label: "Dúvidas" },
  { href: "#contato", label: "Contato" },
];

function InstagramIcon({ className = "h-5 w-5" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  );
}

function FacebookIcon({ className = "h-5 w-5" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M13.5 21v-7h2.4l.45-3H13.5V9.1c0-.87.24-1.6 1.66-1.6h1.34V4.85c-.65-.09-1.42-.17-2.2-.17-2.28 0-3.8 1.39-3.8 3.95V11H8v3h2.5v7h3Z" />
    </svg>
  );
}

const SOCIALS = [
  {
    label: "Instagram da Attrow",
    href: INSTAGRAM_URL,
    icon: <InstagramIcon />,
  },
  {
    label: "Facebook da Attrow",
    href: FACEBOOK_URL,
    icon: <FacebookIcon />,
  },
  {
    label: "WhatsApp da Attrow",
    href: WHATSAPP_URL,
    icon: <WhatsIcon className="h-5 w-5" />,
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-line bg-ink-2/60">
      <div className="mx-auto max-w-7xl px-5 py-14 md:px-8">
        <div className="grid gap-10 md:grid-cols-[1.3fr_0.8fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted">
              A contabilidade que constrói o futuro com você. Estratégia,
              tecnologia e atendimento personalizado para o seu negócio subir
              de nível.
            </p>

            {/* Redes sociais */}
            <ul className="mt-6 flex items-center gap-3">
              {SOCIALS.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    title={s.label}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-line bg-ink text-muted transition-all duration-300 hover:-translate-y-1 hover:border-gold hover:bg-gold hover:text-ink"
                  >
                    {s.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-display text-sm font-semibold tracking-wider text-white">
              NAVEGAÇÃO
            </p>
            <ul className="mt-4 space-y-3 text-sm text-muted">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="transition-colors hover:text-gold">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-display text-sm font-semibold tracking-wider text-white">
              CONTATO
            </p>
            <ul className="mt-4 space-y-3 text-sm text-muted">
              <li>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 transition-colors hover:text-gold"
                >
                  <WhatsIcon className="h-4 w-4 shrink-0 text-gold" />
                  {WHATSAPP_DISPLAY}
                </a>
              </li>
              <li>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 transition-colors hover:text-gold"
                >
                  <InstagramIcon className="h-4 w-4 shrink-0 text-gold" />
                  @attrow_assessoriacontabil
                </a>
              </li>
              <li>
                <a
                  href={FACEBOOK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 transition-colors hover:text-gold"
                >
                  <FacebookIcon className="h-4 w-4 shrink-0 text-gold" />
                  Attrow Assessoria Contábil
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-display text-sm font-semibold tracking-wider text-white">
              ENDEREÇO
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted">{ADDRESS}</p>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-line pt-6 text-xs text-gray-mid md:flex-row">
          <p>
            © {new Date().getFullYear()} Attrow Assessoria Contábil · CNPJ{" "}
            {CNPJ}
          </p>
          <p>Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
