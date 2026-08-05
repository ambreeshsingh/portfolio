import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

function ProjectCard({ project }) {
  return (
    <motion.div
      whileHover={{
        y: -10,
      }}
      className="bg-white rounded-3xl overflow-hidden shadow-lg"
    >
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-56 object-cover"
      />

      <div className="p-6">

        <h3 className="text-2xl font-bold">
          {project.title}
        </h3>

        <p className="text-gray-500 mt-3">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-6">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
   <div className="flex gap-4 mt-8">
  <a
    href={project.github}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-300 hover:bg-slate-100 transition"
  >
    <FaGithub />
    GitHub
  </a>

  <a
    href={project.live}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
  >
    <FiExternalLink />
    Live Demo
  </a>
</div>

      </div>
    </motion.div>
  );
}

export default ProjectCard;