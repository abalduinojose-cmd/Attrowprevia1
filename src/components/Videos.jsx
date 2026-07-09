import { useRef, useState } from "react";
import Reveal from "./Reveal.jsx";
import { INSTAGRAM_HANDLE, INSTAGRAM_URL } from "../lib/constants.js";

const BASE = import.meta.env.BASE_URL;

const VIDEOS = [
  { src: `${BASE}videos/attrow-video-1.mp4`, label: "Attrow na prática" },
  { src: `${BASE}videos/attrow-video-2.mp4`, label: "Por dentro da Attrow" },
  { src: `${BASE}videos/attrow-video-3.mp4`, label: "Contabilidade estratégica" },
];

function VideoCard({ video, index, playing, onPlay }) {
  const ref = useRef(null);
  const isPlaying = playing === index;

  const toggle = () => {
    const el = ref.current;
    if (!el) return;
    if (el.paused) {
      onPlay(index, el);
      el.play();
    } else {
      el.pause();
      onPlay(-1, null);
    }
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isPlaying ? `Pausar vídeo: ${video.label}` : `Assistir vídeo: ${video.label}`}
      className="group relative block w-full overflow-hidden rounded-2xl border border-line bg-ink-2 transition-all duration-300 hover:-translate-y-1.5 hover:border-gold/50 hover:shadow-xl hover:shadow-gold/10"
    >
      <video
        ref={ref}
        src={`${video.src}#t=0.5`}
        preload="metadata"
        playsInline
        onEnded={() => onPlay(-1, null)}
        className="aspect-[9/16] w-full object-cover"
      />

      {/* Overlay com botão de play */}
      <span
        className={`absolute inset-0 flex items-center justify-center bg-ink/40 transition-opacity duration-300 ${
          isPlaying ? "pointer-events-none opacity-0" : "opacity-100"
        }`}
      >
        <span className="glow-gold flex h-16 w-16 items-center justify-center rounded-full bg-gold text-ink transition-transform duration-300 group-hover:scale-110">
          <svg viewBox="0 0 24 24" className="ml-1 h-7 w-7" fill="currentColor" aria-hidden="true">
            <path d="M8 5.5v13l11-6.5-11-6.5Z" />
          </svg>
        </span>
      </span>

      {/* Legenda */}
      <span
        className={`absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink via-ink/70 to-transparent px-5 pb-4 pt-12 text-left transition-opacity duration-300 ${
          isPlaying ? "opacity-0" : "opacity-100"
        }`}
      >
        <span className="font-display text-sm font-semibold text-white">
          {video.label}
        </span>
      </span>
    </button>
  );
}

export default function Videos() {
  const [playing, setPlaying] = useState(-1);
  const currentRef = useRef(null);

  const handlePlay = (index, el) => {
    // pausa o vídeo anterior ao tocar um novo
    if (currentRef.current && currentRef.current !== el) {
      currentRef.current.pause();
    }
    currentRef.current = el;
    setPlaying(index);
  };

  return (
    <section id="videos" className="relative overflow-hidden py-20 md:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-1/3 h-[380px] w-[380px] -translate-x-1/2 rounded-full bg-gold/10 blur-[120px]"
      />
      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold tracking-[0.3em] text-gold">
            A ATTROW EM AÇÃO
          </p>
          <h2 className="mt-4 font-display text-3xl font-bold md:text-4xl">
            Veja como a gente{" "}
            <span className="text-gradient-gold">faz diferente</span>
          </h2>
          <p className="mt-4 text-muted">
            Um pouco do nosso jeito de pensar contabilidade — direto do nosso
            Instagram.
          </p>
        </Reveal>

        <div className="mx-auto mt-14 grid max-w-4xl gap-6 sm:grid-cols-3">
          {VIDEOS.map((v, i) => (
            <Reveal key={v.src} delay={i * 0.12}>
              <VideoCard
                video={v}
                index={i}
                playing={playing}
                onPlay={handlePlay}
              />
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3} className="mt-12 text-center">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 rounded-full border border-gold px-7 py-3.5 text-sm font-semibold text-gold transition-all hover:bg-gold hover:text-ink"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none" />
            </svg>
            Seguir {INSTAGRAM_HANDLE}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
