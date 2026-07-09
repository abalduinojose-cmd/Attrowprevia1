import Reveal from "./Reveal.jsx";

const PILLARS = [
  {
    num: "01",
    title: "Estratégia Contábil de Crescimento",
    text: "Sua contabilidade deixa de ser custo e vira ferramenta de crescimento, com planejamento pensado para o seu momento.",
    icon: (
      <path d="M4 20V10m6 10V4m6 16v-7m4 7H2" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
  {
    num: "02",
    title: "Gestão Inteligente + Resultados Reais",
    text: "Processos automatizados e relatórios claros para você enxergar o negócio de verdade e decidir com segurança.",
    icon: (
      <path d="M12 3a9 9 0 1 0 9 9h-9V3ZM15 3.5A9 9 0 0 1 20.5 9H15V3.5Z" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
  {
    num: "03",
    title: "Elevando seu Negócio de Nível",
    text: "Do MEI à empresa consolidada: acompanhamos cada etapa para que a estrutura fiscal nunca trave a sua evolução.",
    icon: (
      <path d="M3 17l6-6 4 4 8-8m0 0h-6m6 0v6" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
  {
    num: "04",
    title: "Atendimento Personalizado",
    text: "Nada de robô ou resposta pronta. Você fala direto com quem entende do seu negócio e responde rápido.",
    icon: (
      <path d="M8 10h8m-8 4h5m-9 6V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H8l-4 3Z" strokeLinecap="round" strokeLinejoin="round" />
    ),
  },
];

export default function Pillars() {
  return (
    <section id="pilares" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold tracking-[0.3em] text-gold">
            NOSSOS PILARES
          </p>
          <h2 className="mt-4 font-display text-3xl font-bold md:text-4xl">
            O que sustenta a forma{" "}
            <span className="text-gradient-gold">Attrow</span> de trabalhar
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PILLARS.map((p, i) => (
            <Reveal key={p.num} delay={i * 0.1}>
              <article className="group h-full rounded-2xl border border-line bg-ink-2 p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-gold/50 hover:shadow-xl hover:shadow-gold/10">
                <div className="flex items-center justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold/10 text-gold transition-colors group-hover:bg-gold group-hover:text-ink">
                    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8">
                      {p.icon}
                    </svg>
                  </span>
                  <span className="font-display text-sm font-bold text-gray-mid">
                    {p.num}
                  </span>
                </div>
                <h3 className="mt-6 font-display text-lg font-semibold leading-snug">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {p.text}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
