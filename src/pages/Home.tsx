import React from "react";
import { motion } from "framer-motion";
import Animations from "@/components/Animatios/Animations";
import TechStack from "@/components/TechStack/TechStack";

const Home: React.FC = () => {
  return (
    <div className="home">
      <motion.section
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Animations />
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <TechStack />
      </motion.section>
    </div>
  );
};

export default Home;
