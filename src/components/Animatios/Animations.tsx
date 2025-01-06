import React, { useEffect, useState } from "react";
import AnimatedText from "@/components/Animate/AnimatedText";
import AnimatedDescription from "@/components/Animate/AnimatedDescription";
import { motion } from "framer-motion";
import "./Animations.css";
import robotImage from "../../../public/robot.png";

const Animations: React.FC = () => {
  const [text, setText] = useState("DESIGNER");
  const phrases = [
    "From stunning designs to working code, in one click.",
    "Turn your visual ideas into interactive interfaces, ready for React, Vue and more.",
    "The future of front-end development starts here: Designs that become code.",
    "Automate component creation and focus on what matters: innovation.",
    "From prototype to product with support for TailwindCSS, Material-UI and modern frameworks.",
  ];

  const [currentPhrase, setCurrentPhrase] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setText((prev) => (prev === "DESIGNER" ? "DEVELOPER" : "DESIGNER"));
    }, 2000);

    const phraseIntervalId = setInterval(() => {
      setCurrentPhrase((prev) => (prev + 1) % phrases.length);
    }, 4000);

    return () => {
      clearInterval(intervalId);
      clearInterval(phraseIntervalId);
    };
  }, [phrases.length]);

  return (
    <div className="home-container">
      <div className="space-items">
        <div className="text-section">
          <motion.span
            className="welcome"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            WELCOME
          </motion.span>
          <AnimatedText text={text} />
          <AnimatedDescription phrase={phrases[currentPhrase]} />
        </div>
        <img src={robotImage} alt="robot" className="robot" />
      </div>
    </div>
  );
};

export default Animations;
