import React from "react";
import { Header } from "./components/Header";
import { RoutesDirection } from "./routes";

function App() {
  return (
    <>  
      <Header />
      <main id="container">
        <RoutesDirection /> 
      </main>
    </>
  );
}

export default App;
