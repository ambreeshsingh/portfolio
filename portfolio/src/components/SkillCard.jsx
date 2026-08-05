import { motion } from "framer-motion";

function SkillCard({ title, items }) {
  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      className="bg-white rounded-2xl shadow-md p-6"
    >
      <h3 className="text-xl font-semibold mb-5">
        {title}
      </h3>

      <div className="space-y-4">
        {items.map((skill) => {
          const Icon = skill.icon;

          return (
            <div
              key={skill.name}
              className="flex items-center gap-3"
            >
              {Icon && (
                <Icon className="text-2xl text-blue-600" />
              )}

              <span>{skill.name}</span>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}

export default SkillCard;