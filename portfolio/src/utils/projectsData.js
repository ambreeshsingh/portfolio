import luxebags from "../assets/images/luxebags.png";
import weather from "../assets/images/weather.png";
import parallax from "../assets/images/parallax.png"


export const projects = [
    {
      id: 1,
      title: "LuxeBags",
      category: "Full Stack",
      description:
        "Developed a MERN e-commerce platform with authentication, product management, shopping cart, and Razorpay payment integration.",
  
      technologies: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "Tailwind",
        "JWT",
        "Razorpay",
      ],
  
      image: luxebags,
  
      github: "https://github.com/ambreeshsingh/luxebags-frontened",
  
      live: "https://luxebags-frontened.vercel.app",
    },
  
    {
      id: 2,
      title: "Weather App",
      category: "Frontend",
  
      description:
        "Responsive weather application using OpenWeather API with real-time weather updates.",
  
      technologies: [
        "React",
        "API",
        "Tailwind",
      ],
  
      image: weather,
  
      github: "https://github.com/ambreeshsingh/Weather_App",
  
      live: "https://weather-app-plum-alpha-35.vercel.app",
    },
  
    {
      id: 3,
  
      title: "Parallax Website",
  
      category: "Frontend",
  
      description:
        "Animated landing page with immersive scrolling effects and responsive design.",
  
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
      ],
  
      image: parallax ,
  
      github: "https://github.com/ambreeshsingh/parallex_website_project",
  
      live: "https://parallex-website-project-theta.vercel.app",
    },
  ];