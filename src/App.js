import React from "react";
import { Header } from "./components/Header";
import { RoutesDirection } from "./routes";
import Modal from "react-modal";

Modal.setAppElement('#root');

function App() {
  return (
    <>  
      <header>
        <Header />
      </header>
      <main id="container">
        <RoutesDirection /> 
      </main>
    </>
  );
}

export default App;
