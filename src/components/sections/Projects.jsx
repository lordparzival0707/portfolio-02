import { motion } from "framer-motion";
import { Folder, GithubLogo, ArrowSquareOut } from "phosphor-react";

// NOTE: Please ensure images are placed in src/assets/projects/
import ecommerceImg from "../../assets/projects/ecommerce.png";
import fishFarmingImg from "../../assets/projects/fish-farming.png";
import dotgameImg from "../../assets/projects/dotgame.png";
import reservationVehiculeImg from "../../assets/projects/reservation-vehicule.png";
import forageImg from "../../assets/projects/forage.png";

const projectsData = [
  {
    title: "E-Commerce",
    description: "E-commerce platform with a product catalog, shopping cart management, order management, and administration.",
    technologies: ["React", "Tailwind CSS", "Bagisto (Laravel)", "MySql"],
    github: "https://github.com/lordparzival0707/e-commerce-eval",
    demo: "https://github.com/lordparzival0707/e-commerce-eval",
    image: ecommerceImg,
  },
  {
    title: "Fish farming",
    description: "Web application for monitoring fish farming activities",
    technologies: ["React", "Tailwind CSS", "Spring boot", "PostgreSql"],
    github: "https://github.com/Yako-Rabeson",
    demo: "https://github.com/Yako-Rabeson",
    image: fishFarmingImg,
  },
  {
    title: "Connect five",
    description: "A game application where the goal is to be the first player to connect five points between the two players.",
    technologies: [".NET (C#)"],
    github: "",
    demo: "",
    image: dotgameImg,
  },
  {
    title: "Vehicle reservation",
    description: "A web application for airport-to-hotel vehicle reservation and transportation management.",
    technologies: ["Spring boot", "Thymeleaf", "Tailwind CSS"],
    github: "",
    demo: "",
    image: reservationVehiculeImg,
  },
  {
    title: "Forage",
    description: "A web application for a water drilling company (quote requests, customer management, transaction tracking, etc.).",
    technologies: ["Spring boot", "Thymeleaf", "Tailwind CSS"],
    github: "",
    demo: "",
    image: forageImg,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 md:px-12 lg:px-24 bg-base-200 flex items-center min-h-screen overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto w-full flex flex-col gap-12"
      >
        <div>
          <h2 className="title text-5xl md:text-6xl mb-4">Projects</h2>
          <p className="text-base-content/60 max-w-lg text-sm md:text-base">
            A selection of key academic and personal projects that demonstrate my technical capability and passion for building functional software.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card bg-base-100 border border-base-300 shadow-xs hover:border-primary/40 transition-all duration-300 hover:-translate-y-1.5 overflow-hidden"
            >
              <img 
                src={project.image} 
                alt={`${project.title} screenshot`} 
                className="w-full h-48 object-cover"
              />
              <div className="card-body p-6 md:p-8 flex flex-col gap-4">
                <div className="flex justify-between items-center">
                  <div className="text-primary bg-primary/5 p-3 rounded-xl">
                    <Folder size={28} weight="regular" />
                  </div>
                  <div className="flex gap-4 text-base-content/60">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary transition-colors duration-200"
                      aria-label={`${project.title} GitHub repository`}
                    >
                      <GithubLogo size={22} weight="regular" />
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary transition-colors duration-200"
                      aria-label={`${project.title} Live Demo`}
                    >
                      <ArrowSquareOut size={22} weight="regular" />
                    </a>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <h3 className="text-xl font-bold font-mono tracking-tight text-base-content">{project.title}</h3>
                  <p className="text-sm text-base-content/70 leading-relaxed min-h-[72px]">{project.description}</p>
                </div>

                <div className="flex flex-wrap gap-1.5 mt-auto pt-4 border-t border-base-200">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="badge badge-outline badge-sm text-xs font-mono px-2.5 py-2 text-base-content/80 border-base-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
