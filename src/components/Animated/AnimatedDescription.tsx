import React from "react";
import { motion } from "framer-motion";

interface AnimatedDescriptionProps {
  phrase: string;
}

const AnimatedDescription: React.FC<AnimatedDescriptionProps> = ({
  phrase,
}) => (
  <motion.p
    key={phrase}
    initial={{ opacity: 0, x: -50 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: 50 }}
    transition={{ duration: 0.8 }}
    className="description"
  >
    {phrase}
  </motion.p>
);

export default AnimatedDescription;
