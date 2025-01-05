import React from "react";
import ImportDesign from "../components/ImportDesign/ImportDesign";
import DesignPreview from "../components/DesignPreview/DesignPreview";
import CodeGenerator from "../components/CodeGenerator/CodeGenerator";

const Editor: React.FC = () => {
  return (
    <div>
      <h1>Editor</h1>
      <ImportDesign />
      <DesignPreview />
      <CodeGenerator />
    </div>
  );
};

export default Editor;
