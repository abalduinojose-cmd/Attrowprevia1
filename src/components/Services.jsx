import Reveal from "./Reveal.jsx";
import { WHATSAPP_URL } from "../lib/constants.js";

const SERVICES = [
  {
    title: "Abertura de Empresa",
    text: "Tiramos seu CNPJ do papel com agilidade: escolha do regime tributário, registro e tudo pronto para faturar.",
    icon: <path d="M12 3 2 9l10 6 10-6-10-6Zm-6 9.5V17c0 1.5 2.7 3 6 3s6-1.5 6-3v-4.5" strokeLinecap="round" strokeLinejoin="round" />,
  },
  {
    title: "Troca de Contador",
    text: "Migração sem dor de cabeça: cuidamos de toda a transição com o contador atual e você não para nem um dia.",
    icon: <path d="M4 7h13m0 0-3-3m3 3-3 3m6 7H7m0 0 3 3m-3-3 3-3" strokeLinecap="round" strokeLinejoin="round" />,
  },
  {
    title: "Contabilidade Completa",
    text: "Fiscal, contábil e pró-labore em dia, com rotina 100% digital e relatórios que você realmente entende.",
    icon: <path d="M9 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-4M9 3h10a2 2 0 0 1 2 2v10M9 3v18m4-11h5m-5 4h5" strokeLinecap="round" strokeLinejoin="round" />,
  },
  {
    title: "Planejamento Tributário",
    text: "Análise do regime ideal para pagar apenas o imposto necessário — dentro da lei e com economia real.",
    icon: <path d="M12 8v4l2.5 2.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" strokeLinecap="round" strokeLinejoin="round" />,
  },
  {
    title: "Folha e Departamento Pessoal",
    text: "Admissão, folha, férias e obrigações trabalhistas sem erro e sem atraso, para o time trabalhar tranquilo.",
    icon: <path d="M16 11a4 4 0 1 0-8 0m8 0a4 4 0 0 1-8 0m8 0c2.8 0 5 2.2 5 5v3H3v-3c0-2.8 2.2-5 5-5" strokeLinecap="round" strokeLinejoin="round" />,
  },
  {
    title: "Consultoria e Gestão",
    text: "Indicadores, precificação e visão financeira estratégica para transformar números em decisões de crescimento.",
    icon: <path d="M9 18h6m-5 3h4M12 3a6 6 0 0 1 3.6 10.8c-.6.5-.6 1.2-.6 2.2h-6c0-1-.1-1.7-.7-2.2A6 6 0 0 1 12 3Z" strokeLinecap="round" strokeLinejoin="round" />,
  },
];

export default function Services() {
  return (
    <section id="servicos" className="relative bg-ink-2/60 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold tracking-[0.3em] text-gold">
            SERVIÇOS
          </p>
          <h2 className="mt-4 font-display text-3xl font-bold md:text-4xl">
            Tudo o que sua empresa precisa,{" "}
            <span className="text-gradient-gold">em um só lugar</span>
          </h2>
          <p className="mt-4 text-muted">
            Do CNPJ novo à empresa em crescimento: assumimos a parte chata para
            você focar no que importa.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={(i % 3) * 0.1}>
              <article className="group flex h-full flex-col rounded-2xl border border-line bg-ink p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-gold/50 hover:shadow-xl hover:shadow-gold/10">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold/10 text-gold transition-colors group-hover:bg-gold group-hover:text-ink">
                  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
                    {s.icon}
                  </svg>
                </span>
                <h3 className="mt-6 font-display text-lg font-semibold">
                  {s.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                  {s.text}
                </p>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-gold transition-all group-hover:gap-3"
                >
                  Solicitar proposta
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14m-6-6 6 6-6 6" />
                  </svg>
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
