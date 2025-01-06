import React from "react";
import { motion } from "framer-motion";
import "./Stats.css";

interface StatsProps {
  customers: number;
  awards: number;
  projects: number;
}

const Stats: React.FC<StatsProps> = ({ customers, awards, projects }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      className="stats-container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div className="stat-item" variants={itemVariants}>
        <div className="stat-number">{customers}</div>
        <div className="stat-label">Customers</div>
      </motion.div>
      <motion.div className="stat-item" variants={itemVariants}>
        <div className="stat-number">{awards}</div>
        <div className="stat-label">Awards</div>
      </motion.div>
      <motion.div className="stat-item" variants={itemVariants}>
        <div className="stat-number">{projects}</div>
        <div className="stat-label">Projects</div>
      </motion.div>
    </motion.div>
  );
};

export default Stats;
