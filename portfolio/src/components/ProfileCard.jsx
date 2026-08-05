import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
} from "react-icons/fa";

import {
  SiMongodb,
} from "react-icons/si";

import profile from "../assets/images/profile.jpg";

function ProfileCard() {
  return (
    <motion.div
      animate={{
        y: [0, -12, 0],
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
      }}
      className="relative"
    >
      {/* Card */}

      <div
        className="
        backdrop-blur-xl
        bg-white/70
        rounded-3xl
        shadow-2xl
        p-8
        border
        border-white
        w-[340px]
        "
      >

        <img
          src={profile}
          alt="Profile"
          className="
          w-48
          h-48
          rounded-full
          mx-auto
          object-cover
          border-4
          border-white
          shadow-xl
          "
        />

        <h2 className="text-2xl font-bold text-center mt-6">
          Ambreesh Singh
        </h2>

        <p className="text-center text-slate-500 mt-2">
          Mern Stack Developer
        </p>

        <div className="mt-6">

          <div
            className="
            bg-blue-100
            text-blue-700
            rounded-full
            py-2
            text-center
            font-semibold
            "
          >
            🚀 260+ LeetCode Problems
          </div>

        </div>

      </div>

      {/* React */}

      <motion.div
        animate={{
          y: [0, -8, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 3,
        }}
        className="
        absolute
        -left-10
        top-12
        bg-white
        p-4
        rounded-2xl
        shadow-xl
        "
      >
        <FaReact className="text-4xl text-sky-500" />
      </motion.div>

      {/* Node */}

      <motion.div
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 4,
        }}
        className="
        absolute
        -right-8
        top-36
        bg-white
        p-4
        rounded-2xl
        shadow-xl
        "
      >
        <FaNodeJs className="text-4xl text-green-600" />
      </motion.div>

      {/* Mongo */}

      <motion.div
        animate={{
          y: [0, -12, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 5,
        }}
        className="
        absolute
        left-24
        -bottom-6
        bg-white
        p-4
        rounded-2xl
        shadow-xl
        "
      >
        <SiMongodb className="text-4xl text-green-700" />
      </motion.div>
    </motion.div>
  );
}

export default ProfileCard;