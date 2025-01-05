import React, { createContext, useState, ReactNode } from "react";

// Definição dos tipos para os componentes do design
export interface ComponentData {
  id: string; // ID único do componente
  type: string; // Tipo do componente, pode ser mais específico
}

// Definição dos tipos para o contexto
export interface DesignData {
  id: string;
  name: string;
  components: ComponentData[]; // Substituindo `any[]` por `ComponentData[]`
}

export interface AppContextType {
  designData: DesignData | null; // Usando o tipo DesignData
  setDesignData: React.Dispatch<React.SetStateAction<DesignData | null>>; // Tipagem para a função de atualização
}

// Contexto inicializado com valores padrão
const AppContext = createContext<AppContextType | undefined>(undefined);

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [designData, setDesignData] = useState<DesignData | null>(null); // Usando o tipo DesignData no estado

  return (
    <AppContext.Provider value={{ designData, setDesignData }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
