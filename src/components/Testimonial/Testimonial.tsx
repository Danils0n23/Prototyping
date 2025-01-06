import React, { useState, useEffect } from "react";
import "./Testimonial.css"; // Importando o CSS externo

interface ProfileInfoProps {
  name: string;
  title: string;
  imageSrc: string;
  imageAlt: string;
}

const ProfileInfo: React.FC<ProfileInfoProps> = ({
  name,
  title,
  imageSrc,
  imageAlt,
}) => (
  <div className="profile-info">
    <img src={imageSrc} alt={imageAlt} className="profile-image" />
    <div className="profile-text">
      <div className="profile-name">{name}</div>
      <div className="profile-title">{title}</div>
    </div>
  </div>
);

interface TestimonialData {
  text: string;
  profile: {
    name: string;
    title: string;
    imageSrc: string;
    imageAlt: string;
  };
}

const Testimonial: React.FC = () => {
  const testimonials: TestimonialData[] = [
    {
      text: "I Was Blown Away By His Creativity In Creating A Memorable Brand Identity. His Design Work Has Helped Us Stand Out.",
      profile: {
        name: "Danilson Junior Bengui",
        title: "Developer",
        imageSrc: "/dad.png",
        imageAlt: "Danilson Junior Bengui",
      },
    },
    {
      text: "His work has been crucial in helping us enhance our visual identity and stand out in the market.",
      profile: {
        name: "Alice Ferreira",
        title: "Designer",
        imageSrc: "/alice.png",
        imageAlt: "Alice Ferreira",
      },
    },
    {
      text: "I was amazed by the attention to detail and the ability to capture our brand vision perfectly.",
      profile: {
        name: "Carlos Silva",
        title: "Project Manager",
        imageSrc: "/carlos.png",
        imageAlt: "Carlos Silva",
      },
    },
  ];

  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  // Alterna os depoimentos automaticamente
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonialIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const { text, profile } = testimonials[currentTestimonialIndex];

  return (
    <div className="testimonial-container">
      <div className="testimonial-content">
        <div className="quote-icon">&#8220;</div>
        <p className="testimonial-text">{text}</p>
        <ProfileInfo
          name={profile.name}
          title={profile.title}
          imageSrc={profile.imageSrc}
          imageAlt={profile.imageAlt}
        />
      </div>
    </div>
  );
};

export default Testimonial;
