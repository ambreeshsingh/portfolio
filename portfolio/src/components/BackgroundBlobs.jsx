import { motion } from "framer-motion";

function BackgroundBlobs() {
  return (
    <>
      {/* Blob 1 */}
      <motion.div
        animate={{
          x: [0, 40, 0],
          y: [0, -40, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-20 left-10 w-72 h-72 bg-blue-300/20 rounded-full blur-3xl"
      />

      {/* Blob 2 */}
      <motion.div
        animate={{
          x: [0, -50, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-300/20 rounded-full blur-3xl"
      />

      {/* Blob 3 */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
        }}
        className="absolute top-1/2 left-1/2 w-64 h-64 bg-sky-200/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"
      />
    </>
  );
}

export default BackgroundBlobs;