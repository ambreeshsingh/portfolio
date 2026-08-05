import { motion } from "framer-motion";

function AchievementCard({ title, subtitle }) {
  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.03,
      }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-2xl shadow-lg p-8 text-center"
    >
      <h2 className="text-4xl font-bold text-blue-600">
        {title}
      </h2>

      <p className="mt-4 text-slate-600">
        {subtitle}
      </p>
    </motion.div>
  );
}

export default AchievementCard;