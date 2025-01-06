import React from "react";
import { motion } from "framer-motion";
import "./ContactMe.css";

const ContactMe: React.FC = () => {
  return (
    <div className="contact-container">
      <motion.p
        className="small-text"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        CONTACT ME
      </motion.p>

      <motion.h1
        className="title"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {Array.from("GET IN").map((letter, index) => (
          <motion.span
            key={index}
            whileHover={{
              transition: {
                duration: 1,
                repeat: Infinity,
                repeatType: "reverse",
              },
              color: ["#ffffff", "#7f7f7f", "#ffffff", "#b3b3b3", "#ffffff"], // Tons de cinza e branco
            }}
            className="letter"
          >
            {letter}
          </motion.span>
        ))}
        <motion.span
          className="arrow"
          initial={{ rotate: 0 }}
          animate={{ rotate: [0, 20, -20, 0] }}
          transition={{
            duration: 0.8,
            repeat: 3,
            repeatType: "loop",
          }}
        >
          ↗
        </motion.span>
      </motion.h1>

      <motion.h1
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <span className="outlined">
          {Array.from("TOUCH").map((letter, index) => (
            <motion.span
              key={index}
              whileHover={{
                transition: {
                  duration: 1,
                  repeat: Infinity,
                  repeatType: "reverse",
                },
                color: ["#ffffff", "#7f7f7f", "#ffffff", "#b3b3b3", "#ffffff"], // Tons de cinza e branco
              }}
              className="letter"
            >
              {letter}
            </motion.span>
          ))}
        </span>
      </motion.h1>

      <motion.button
        className="contact-button"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.5 }}
      >
        CONTACT <span className="button-arrow">↗</span>
      </motion.button>
    </div>
  );
};

export default ContactMe;
