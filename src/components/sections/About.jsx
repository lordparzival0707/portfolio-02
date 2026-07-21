import { motion } from "framer-motion";
import { Buildings, Folder, Code, Cpu } from "phosphor-react";

export default function About() {
  return (
    <section id="about" className="py-20 px-6 md:px-12 lg:px-24 bg-base-200 flex items-center min-h-screen overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto w-full flex flex-col gap-12 lg:gap-16"
      >
        <div>
          <h2 className="title text-5xl md:text-6xl mb-6">About me</h2>
          <p className="text-base-content/85 text-sm md:text-base leading-relaxed max-w-2xl">
            I am currently a third-year computer science student at IT University Andoharanofotsy.
            <br />
            <br />
            I am looking for an internship. Despite my lack of professional experience, I believe I have the necessary skills, both technically and mentally.

            <br />
            <br />

            <a
              className="btn btn-primary"
              href="/Yako_RABESON_CV_2026.pdf"
              download="Yako_RABESON_CV_2026.pdf"
            >
              Download my CV
            </a>
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="p-6 rounded-3xl bg-base-100 border border-base-300 shadow-xs hover:border-primary/40 transition-all duration-300 hover:-translate-y-1 flex flex-col items-center justify-center gap-2"
          >
            <p className="font-bold text-4xl md:text-5xl text-primary font-mono">0</p>
            <p className="flex flex-row gap-1.5 items-center justify-center text-xs md:text-sm font-semibold text-base-content/70">
              <Buildings weight="bold" className="text-primary" /> Experience
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="p-6 rounded-3xl bg-base-100 border border-base-300 shadow-xs hover:border-primary/40 transition-all duration-300 hover:-translate-y-1 flex flex-col items-center justify-center gap-2"
          >
            <p className="font-bold text-4xl md:text-5xl text-primary font-mono">5+</p>
            <p className="flex flex-row gap-1.5 items-center justify-center text-xs md:text-sm font-semibold text-base-content/70">
              <Folder weight="bold" className="text-primary" /> Projects
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="p-6 rounded-3xl bg-base-100 border border-base-300 shadow-xs hover:border-primary/40 transition-all duration-300 hover:-translate-y-1 flex flex-col items-center justify-center gap-2"
          >
            <p className="font-bold text-4xl md:text-5xl text-primary font-mono">7</p>
            <p className="flex flex-row gap-1.5 items-center justify-center text-xs md:text-sm font-semibold text-base-content/70">
              <Code weight="bold" className="text-primary" /> Languages
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="p-6 rounded-3xl bg-base-100 border border-base-300 shadow-xs hover:border-primary/40 transition-all duration-300 hover:-translate-y-1 flex flex-col items-center justify-center gap-2"
          >
            <p className="font-bold text-4xl md:text-5xl text-primary font-mono">5</p>
            <p className="flex flex-row gap-1.5 items-center justify-center text-xs md:text-sm font-semibold text-base-content/70">
              <Cpu weight="bold" className="text-primary" /> Frameworks
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
