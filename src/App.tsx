import React from "react";
import "./App.css";
import { VendingScreen } from "./components/VendingScreen";
import { RootContextProvider } from "./context/RootContext";

function App() {
  return (
    <RootContextProvider>
      <div className="App">
        <header className="App-header">
          <VendingScreen />
        </header>
      </div>
    </RootContextProvider>
  );
}

export default App;
