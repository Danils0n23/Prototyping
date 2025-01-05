import React, { useContext } from "react";
import AppContext from "../../context/AppContext";
import "./DesignPreview.css";

const DesignPreview: React.FC = () => {
  // Obtendo o contexto
  const context = useContext(AppContext);

  // Garantindo que o contexto está definido
  if (!context) {
    throw new Error("DesignPreview must be used within an AppProvider");
  }

  const { designData } = context;

  if (!designData) {
    return <p>No design loaded</p>;
  }

  return (
    <div className="design-preview">
      <h2>Design Preview</h2>
      <div className="preview-content">
        <pre>{JSON.stringify(designData, null, 2)}</pre>
      </div>
    </div>
  );
};

export default DesignPreview;
