import {
    FaHtml5,
    FaCss3Alt,
    FaReact,
    FaNodeJs,
    FaGitAlt,
    FaGithub,
  } from "react-icons/fa";
  
  import {
    SiJavascript,
    SiTailwindcss,
    SiExpress,
    SiMongodb,
    SiPostman,
    SiVercel,
    SiRender,
    SiCplusplus,
  } from "react-icons/si";
  
  export const skills = [
    {
      title: "Languages",
      items: [
        { name: "C++", icon: SiCplusplus },
        { name: "JavaScript", icon: SiJavascript },
        { name: "SQL", icon: null },
      ],
    },
  
    {
      title: "Frontend",
      items: [
        { name: "HTML", icon: FaHtml5 },
        { name: "CSS", icon: FaCss3Alt },
        { name: "Tailwind CSS", icon: SiTailwindcss },
        { name: "React", icon: FaReact },
      ],
    },
  
    {
      title: "Backend",
      items: [
        { name: "Node.js", icon: FaNodeJs },
        { name: "Express", icon: SiExpress },
      ],
    },
  
    {
      title: "Database",
      items: [
        { name: "MongoDB", icon: SiMongodb },
      ],
    },
  
    {
      title: "Tools",
      items: [
        { name: "Git", icon: FaGitAlt },
        { name: "GitHub", icon: FaGithub },
        { name: "Postman", icon: SiPostman },
        { name: "VS Code", icon: null },
        { name: "Vercel", icon: SiVercel },
        { name: "Render", icon: SiRender },
      ],
    },
  ];