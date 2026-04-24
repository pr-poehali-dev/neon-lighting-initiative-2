import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "50vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
    >
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full h-full"
      >
        <img
          src="https://cdn.poehali.dev/projects/17ba5d0e-0c9d-4de9-8817-507875aa08e4/files/1388bb9c-ee68-44b6-9228-a980784ae96b.jpg"
          alt="Екатеринбург с высоты"
          className="w-full h-full object-cover"
        />
      </motion.div>

      <div className="absolute inset-0 bg-black/40 z-[5]" />
      <div className="relative z-10 text-center text-white px-6">
        <p className="uppercase tracking-[0.3em] text-sm md:text-base mb-4 opacity-80">Третья столица России</p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6">
          ЕКАТЕРИНБУРГ
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90 leading-relaxed">
          Город на границе Европы и Азии — культурный, промышленный и исторический центр Урала
        </p>
      </div>
    </div>
  );
}