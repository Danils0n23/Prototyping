import React from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaVuejs,
  FaCss3Alt,
  FaGitlab,
  FaGithub,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiFigma,
  SiSketch,
  SiAdobexd,
  SiAngular,
  SiSvelte,
  SiNextdotjs,
  SiNuxtdotjs,
} from "react-icons/si";
import "./TechStack.css";

const icons = [
  { icon: <FaReact />, name: "React" },
  { icon: <FaVuejs />, name: "Vue" },
  { icon: <FaCss3Alt />, name: "CSS3" },
  { icon: <SiTailwindcss />, name: "TailwindCSS" },
  { icon: <SiFigma />, name: "Figma" },
  { icon: <SiSketch />, name: "Sketch" },
  { icon: <SiAdobexd />, name: "Adobe XD" },
  { icon: <SiAngular />, name: "Angular" },
  { icon: <SiSvelte />, name: "Svelte" },
  { icon: <SiNextdotjs />, name: "Next.js" },
  { icon: <SiNuxtdotjs />, name: "Nuxt.js" },
  { icon: <FaGitlab />, name: "GitLab" },
  { icon: <FaGithub />, name: "GitHub" },
];

const TechStack = () => {
  return (
    <div className="container">
      {icons.map((item, index) => (
        <motion.div
          className="icon-wrapper"
          key={index}
          whileHover={{ scale: 1.2 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {item.icon}
          <span className="color">{item.name}</span>
        </motion.div>
      ))}
    </div>
  );
};

export default TechStack;
