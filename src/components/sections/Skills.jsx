import { motion } from "framer-motion";
import "devicon/devicon.min.css";

const skillsData = [
  {
    category: "LANGUAGES",
    skills: [
      { name: "Html 5", icon: "devicon-html5-plain colored" },
      { name: "Css", icon: "devicon-css3-plain colored" },
      { name: "Javascript", icon: "devicon-javascript-plain colored" },
      { name: "Typescript", icon: "devicon-typescript-plain colored" },
      { name: "Java", icon: "devicon-java-plain colored" },
      { name: "C#", icon: "devicon-csharp-plain colored" },
    ],
  },
  {
    category: "FRONT",
    skills: [
      { name: "React", icon: "devicon-react-plain colored" },
    ],
  },
  {
    category: "BACK",
    skills: [
      { name: "Node.js", icon: "devicon-nodejs-plain colored" },
      { name: "Springboot", icon: "devicon-springboot-plain colored" },
      { name: "Laravel", icon: "devicon-laravel-plain colored" },
    ],
  },
  {
    category: "DATA",
    skills: [
      { name: "MySql", icon: "devicon-mysql-plain colored" },
      { name: "PostgreSql", icon: "devicon-postgresql-plain colored" },
      { name: "Oracle", icon: "devicon-oracle-plain colored" },
    ],
  },
  {
    category: "TOOLS",
    skills: [
      { name: "Figma", icon: "devicon-figma-plain colored" },
      { name: "Illustrator", icon: "devicon-illustrator-plain colored" },
    ],
  },
  {
    category: "DEPLOY",
    skills: [
      { name: "Vercel", icon: "devicon-vercel-plain colored" },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6 md:px-12 lg:px-24 bg-base-200 flex items-center min-h-screen overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto w-full flex flex-col gap-12"
      >
        <div>
          <h2 className="title text-5xl md:text-6xl mb-4">My Skills</h2>
          <p className="text-base-content/60 max-w-lg text-sm md:text-base">
            The technical stack and tools I specialize in to build reliable, optimized, and modern web architectures.
          </p>
        </div>

        <div className="overflow-x-auto w-full rounded-3xl border border-base-300 bg-base-100 shadow-xs p-6 md:p-8">
          <table className="table w-full border-collapse">
            <tbody>
              {skillsData.map((row, idx) => (
                <tr key={row.category} className={idx !== skillsData.length - 1 ? "border-b border-base-200" : ""}>
                  <td className="text-[11px] font-mono font-bold tracking-widest text-base-content/50 align-top py-6 w-24 md:w-32">
                    {row.category}
                  </td>
                  <td className="py-5">
                    <div className="flex flex-wrap gap-2.5">
                      {row.skills.map((skill) => (
                        <div
                          key={skill.name}
                          className="flex items-center gap-2 px-3 py-1.5 rounded-2xl bg-base-200/50 border border-base-300/40 text-xs md:text-sm font-medium hover:bg-base-200 transition-colors duration-200"
                        >
                          <i className={`${skill.icon} text-base md:text-lg`}></i>
                          <span className="text-base-content font-mono">{skill.name}</span>
                        </div>
                      ))}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </section>
  );
}
