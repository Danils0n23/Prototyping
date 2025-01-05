import Animations from "@/components/Animatios/Animations";
import TechStack from "@/components/TechStack/TechStack";
import React from "react";

const Home: React.FC = () => {
  return (
    <div className="home">
      <Animations />
      <TechStack />
    </div>
  );
};

export default Home;
