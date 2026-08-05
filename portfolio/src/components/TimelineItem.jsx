import { motion } from "framer-motion";

function TimelineItem({ item }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="relative pl-10 pb-12"
    >
      {/* Timeline line */}
      <div className="absolute left-3 top-0 h-full w-0.5 bg-blue-200"></div>

      {/* Circle */}
      <div className="absolute left-0 top-2 w-6 h-6 rounded-full bg-blue-600 border-4 border-white shadow"></div>

      <h3 className="text-2xl font-semibold">
        {item.degree}
      </h3>

      <p className="text-blue-600 font-medium mt-1">
        {item.institute}
      </p>

      <span className="text-sm text-slate-500">
        {item.year}
      </span>

      <p className="mt-3 text-slate-600">
        {item.description}
      </p>
    </motion.div>
  );
}

export default TimelineItem;