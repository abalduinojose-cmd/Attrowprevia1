import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "./Reveal.jsx";

const FAQS = [
  {
    q: "Quero trocar de contador. É complicado?",
    a: "Não. A troca de contador é um direito seu e pode ser feita em qualquer época do ano. A Attrow cuida de toda a transição: solicitamos os documentos ao escritório atual, conferimos a situação da empresa e assumimos a rotina sem que você precise se preocupar com nada.",
  },
  {
    q: "Vocês atendem só em Petrópolis?",
    a: "Nosso escritório fica em Petrópolis/RJ, mas o atendimento é 100% digital: assinatura eletrônica, documentos na nuvem e contato direto pelo WhatsApp. Atendemos empresas de todo o Brasil.",
  },
  {
    q: "Quanto custa abrir uma empresa?",
    a: "Depende do tipo de empresa, da atividade e do regime tributário ideal para o seu caso. Chame a gente no WhatsApp: fazemos uma análise gratuita e apresentamos uma proposta transparente, sem surpresa.",
  },
  {
    q: "Atendem MEI, Simples Nacional, Lucro Presumido?",
    a: "Sim. Acompanhamos desde o MEI que está crescendo e precisa migrar, até empresas no Simples Nacional e no Lucro Presumido. O planejamento tributário indica o enquadramento que faz você pagar menos imposto dentro da lei.",
  },
  {
    q: "Como funciona o atendimento no dia a dia?",
    a: "Você fala direto com quem cuida da sua empresa, pelo WhatsApp. Nada de protocolo, fila ou robô: atendimento personalizado, com respostas rápidas e linguagem que você entende.",
  },
];

function FaqItem({ item, open, onClick }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-line bg-ink-2">
      <button
        onClick={onClick}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
      >
        <span className="font-display text-base font-semibold md:text-lg">
          {item.q}
        </span>
        <span
          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
            open
              ? "rotate-45 border-gold bg-gold text-ink"
              : "border-line text-gold"
          }`}
        >
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M12 5v14M5 12h14" />
          </svg>
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <p className="px-6 pb-6 text-sm leading-relaxed text-muted md:text-base">
              {item.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Faq() {
  const [open, setOpen] = useState(0);
  return (
    <section id="duvidas" className="bg-ink-2/60 py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-5 md:px-8">
        <Reveal className="text-center">
          <p className="text-xs font-semibold tracking-[0.3em] text-gold">
            DÚVIDAS FREQUENTES
          </p>
          <h2 className="mt-4 font-display text-3xl font-bold md:text-4xl">
            Perguntas que sempre{" "}
            <span className="text-gradient-gold">chegam pra gente</span>
          </h2>
        </Reveal>
        <div className="mt-12 space-y-4">
          {FAQS.map((f, i) => (
            <Reveal key={f.q} delay={i * 0.07}>
              <FaqItem
                item={f}
                open={open === i}
                onClick={() => setOpen(open === i ? -1 : i)}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
