import React from "react";
import { motion } from "framer-motion";
import Animations from "@/components/Animatios/Animations";
import TechStack from "@/components/TechStack/TechStack";
import Services from "@/components/ServicesComponent/Services";
import Stats from "@/components/Stats/Stats";
import Testimonial from "@/components/Testimonial/Testimonial";
import "../styles/Home.css";
import ContactMe from "@/components/Contact/ContactMe";
const fadeInUpWithScale = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: { opacity: 1, y: 0, scale: 1 },
};

const sectionTransition = {
  duration: 0.8,
  ease: "easeInOut",
};

const staggeredTransition = {
  ...sectionTransition,
  staggerChildren: 0.3,
};

const Home: React.FC = () => {
  return (
    <div className="home">
      {/* Seção Animations com animação ao rolar */}
      <motion.section
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={sectionTransition}
        className="section-spacing"
      >
        <Animations />
      </motion.section>

      <div className="dracula">Powered By Danilson Bengui</div>

      {/* Seção TechStack e Services com animação ao rolar */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeInUpWithScale}
        transition={staggeredTransition}
        className="section-spacing"
      >
        <motion.div
          variants={fadeInUpWithScale}
          transition={sectionTransition}
          className="section-inner-spacing"
        >
          <TechStack />
        </motion.div>

        <motion.div
          variants={fadeInUpWithScale}
          transition={{ ...sectionTransition, delay: 0.2 }}
          className="section-inner-spacing"
        >
          <Services />
        </motion.div>

        <motion.div
          variants={fadeInUpWithScale}
          transition={{ ...sectionTransition, delay: 0.4 }}
          className="section-inner-spacing"
        >
          <Stats customers={124} awards={7} projects={85} />
        </motion.div>

        <motion.div
          variants={fadeInUpWithScale}
          transition={{ ...sectionTransition, delay: 0.6 }}
          className="section-inner-spacing"
        >
          <Testimonial />
        </motion.div>
        <motion.div
          variants={fadeInUpWithScale}
          transition={{ ...sectionTransition, delay: 0.8 }}
          className="section-inner-spacing"
        >
          <ContactMe />
        </motion.div>
      </motion.section>
    </div>
  );
};

export default Home;
