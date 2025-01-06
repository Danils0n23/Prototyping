import React from "react";
import { motion } from "framer-motion";
import "./Services.css";

import brandingIcon from "../../assets/img/branding-icon.png";
import marketingIcon from "../../assets/img/marketing-icon.png";
import developmentIcon from "../../assets/img/development-icon.png";
import designIcon from "../../assets/img/design-icon.png";

const services = [
  {
    title: "BRANDING",
    description:
      "We build your brand identity by aligning purpose, values, and visual communication to create authentic connections with your audience.",
    image: brandingIcon,
  },
  {
    title: "MARKETING",
    description:
      "We develop marketing strategies that maximize reach and engagement through creative campaigns and data-driven insights.",
    image: marketingIcon,
  },
  {
    title: "DEVELOPMENT",
    description:
      "We create innovative tech solutions focused on performance, security, and user experience, turning ideas into reality.",
    image: developmentIcon,
  },
  {
    title: "DESIGN",
    description:
      "We craft unique interfaces and visual experiences that combine aesthetics, functionality, and accessibility to captivate and convert.",
    image: designIcon,
  },
];

const Services = () => {
  return (
    <div className="services">
      <section className="services-container">
        <motion.div
          className="services-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } },
          }}
        >
          {services.map((service, index) => (
            <motion.div
              className="service-card"
              key={index}
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.4)",
              }}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
            >
              <div className="service-icon">
                <img src={service.image} alt={service.title} />
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
};

export default Services;
