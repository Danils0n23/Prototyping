import React from "react";
import { motion } from "framer-motion"; // Importando o framer-motion
import "./Footer.css";
import logo from "../../assets/img/logo1.png";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <motion.div
        className="footer-top"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }} // Animação de opacidade ao carregar
      >
        <div className="footer-brand">
          <motion.img
            src={logo}
            alt="Logo"
            className="logo"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          />
          <p className="p">
            Beautiful design has the power to captivate audiences
          </p>
        </div>
        <div className="footer-links">
          <div>
            <h4>Main</h4>
            <ul>
              <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                Home
              </motion.li>
              <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                About
              </motion.li>
              <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                Works
              </motion.li>
            </ul>
          </div>
          <div>
            <h4>Pages</h4>
            <ul>
              <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                Contact
              </motion.li>
              <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                Terms & Conditions
              </motion.li>
              <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                Privacy Policy
              </motion.li>
            </ul>
          </div>
          <div>
            <h4>Utilities</h4>
            <ul>
              <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                Style Guide
              </motion.li>
              <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                Instructions
              </motion.li>
              <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                Licenses
              </motion.li>
              <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                Changelog
              </motion.li>
            </ul>
          </div>
        </div>
      </motion.div>

      <hr />

      <motion.div
        className="footer-bottom"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <p>© 2024 DESIGNER & DEVELOPER. All Rights Reserved.</p>
        <p>Powered by Danilson Junior Bengui | Software Developer </p>
      </motion.div>
    </footer>
  );
};

export default Footer;
