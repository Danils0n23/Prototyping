import React, { useContext } from "react";
import AppContext from "../../context/AppContext";
import "./CodeGenerator.css";

const CodeGenerator: React.FC = () => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("CodeGenerator must be used within an AppProvider");
  }

  const { designData } = context;

  // Função para gerar código dinamicamente com base no designData
  const generateCode = (): string => {
    if (!designData) return "";

    const componentsCode = designData.components
      .map(
        (component) =>
          `<div id="${component.id}" className="${component.type}">
            {/* Additional properties can be added here */}
          </div>`
      )
      .join("\n");

    return `
      import React from "react";

      const DesignComponent = () => (
        <div>
          ${componentsCode}
        </div>
      );

      export default DesignComponent;
    `;
  };

  const handleCopyCode = async () => {
    try {
      await navigator.clipboard.writeText(generateCode());
      alert("Code copied to clipboard!");
    } catch (error) {
      console.error("Failed to copy code: ", error);
      alert("Failed to copy code.");
    }
  };

  if (!designData) {
    return <p>Load a design to generate code</p>;
  }

  return (
    <div className="code-generator">
      <h2>Code Generator</h2>
      <pre>{generateCode()}</pre>
      <button onClick={handleCopyCode}>Copy Code</button>
    </div>
  );
};

export default CodeGenerator;
