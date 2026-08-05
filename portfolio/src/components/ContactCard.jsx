import { motion } from "framer-motion";

function ContactCard({ icon: Icon, title, value, link }) {
  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ y: -6 }}
      className="flex items-center gap-4 bg-white p-5 rounded-2xl shadow-md hover:shadow-xl transition"
    >
      <div className="bg-blue-100 p-3 rounded-xl">
        <Icon className="text-2xl text-blue-600" />
      </div>

      <div>
        <h3 className="font-semibold">{title}</h3>
        <p className="text-slate-500 text-sm">{value}</p>
      </div>
    </motion.a>
  );
}

export default ContactCard;