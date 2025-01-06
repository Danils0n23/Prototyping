import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Editor from "./pages/Editor";
import Settings from "./pages/Settings";
import Header from "./components/Header/Header";
import { AppProvider } from "./context/AppContext";
import "./App.css"; // Certifique-se de que o CSS está importado
import Footer from "./components/Footer/Footer";

const App: React.FC = () => {
  return (
    <AppProvider>
      <Router>
        {/* Cabeçalho */}

        {/* Container principal */}
        <div className="container1">
          <Header />

          {/* Conteúdo das rotas */}
          <div className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/editor" element={<Editor />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </div>

          {/* Rodapé */}
          <Footer />
        </div>
      </Router>
    </AppProvider>
  );
};

export default App;
