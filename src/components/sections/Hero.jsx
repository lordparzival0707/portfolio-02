import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="home" className="hero min-h-screen bg-base-200 flex items-center justify-center pt-16 overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex flex-col gap-6 max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl px-6 w-full"
      >
        <p className="text-base-content/60 tracking-widest text-xs uppercase font-mono">Hi, I am</p>
        <div>
          <h1 className="hero-title text-7xl sm:text-8xl md:text-9xl font-bold tracking-tight text-base-content leading-none">
            YAKO
            <br />
            RABESON
          </h1>
          <p className="font-bold text-lg md:text-xl text-primary mt-4 font-mono">
            Full-stack developer junior
          </p>
        </div>

        <p className="text-base-content/70 ">
          I build complete web applications, from frontend to backend.
        </p>
      </motion.div>
    </section>
  );
}
