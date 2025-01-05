import React, { useState, useContext, ChangeEvent } from "react";
import AppContext, { DesignData } from "../../context/AppContext";
import "./ImportDesign.css";

const ImportDesign: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("ImportDesign must be used within an AppProvider");
  }

  const { setDesignData } = context;

  const handleFileUpload = async (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const uploadedFile = e.target.files[0];
      setFile(uploadedFile);

      try {
        // Simulating a mock API call or file parsing
        const mockData: DesignData = await new Promise((resolve) =>
          setTimeout(
            () =>
              resolve({
                id: "123",
                name: "Mock Design",
                components: [],
              }),
            1000
          )
        );

        setDesignData(mockData);
      } catch (error) {
        console.error("Error uploading or parsing file:", error);
      }
    }
  };

  return (
    <div className="import-design">
      <h2>Import Design</h2>
      <input type="file" onChange={handleFileUpload} />
      {file && <p>Uploaded file: {file.name}</p>}
    </div>
  );
};

export default ImportDesign;
