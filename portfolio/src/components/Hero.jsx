import { motion } from "framer-motion";
import Container from "./Container";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { MdEmail } from "react-icons/md";
import BackgroundBlobs from "./BackgroundBlobs";
import profile from "../assets/images/profile.jpeg"
import ProfileCard from "./ProfileCard.jsx";


function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-slate-50 pt-24"
    >
      {/* Animated Background */}
      <BackgroundBlobs />

      <Container>
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}

            <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
               Available for Internship
            </div>

            {/* Intro */}

            <p className="mt-8 text-lg font-semibold text-blue-600">
              Hello, I'm
            </p>

            {/* Name */}

            <h1 className="mt-3 text-5xl font-extrabold leading-tight md:text-7xl">
              <span className="bg-gradient-to-r from-blue-700 via-sky-500 to-cyan-400 bg-clip-text text-transparent">
                Ambreesh Singh
              </span>
            </h1>

            {/* Title */}

            <h2 className="mt-6 text-2xl font-semibold text-slate-700 md:text-3xl">
              MERN Stack Developer | Problem Solver
            </h2>

            {/* Description */}

            <p className="mt-6 max-w-xl leading-8 text-slate-600">
              I build scalable web applications and solve real-world
              problems using modern technologies. Passionate about
              Full Stack Development, Data Structures & Algorithms,
              and continuously learning new technologies.
            </p>

            {/* Buttons */}

            <div className="mt-10 flex flex-wrap gap-5">
              <a
                href="#projects"
                className="rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-xl"
              >
                View Projects
              </a>

              <a
                href="/resume.pdf"
                download
                className="rounded-xl border-2 border-blue-600 px-8 py-4 font-semibold text-blue-600 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-600 hover:text-white"
              >
                Download Resume
              </a>
            </div>

            {/* Social Icons */}

            <div className="mt-10 flex gap-6">

              <a
                href="https://github.com/ambreeshsingh"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-3xl text-slate-700 transition hover:scale-110 hover:text-blue-600"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/YOUR-LINKEDIN-ID"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-3xl text-slate-700 transition hover:scale-110 hover:text-blue-600"
              >
                <FaLinkedin />
              </a>

              <a
                href="https://leetcode.com/u/YOUR_LEETCODE_USERNAME/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LeetCode"
                className="text-3xl text-slate-700 transition hover:scale-110 hover:text-orange-500"
              >
                <SiLeetcode />
              </a>

              <a
                href="mailto:ambreeshsingh2003@gmail.com"
                aria-label="Email"
                className="text-3xl text-slate-700 transition hover:scale-110 hover:text-blue-600"
              >
                <MdEmail />
              </a>

            </div>
          </motion.div>

          {/* RIGHT CONTENT */}

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <ProfileCard />
          </motion.div>

        </div>
      </Container>
    </section>
  );
}

export default Hero;