import React from 'react';
import ReactDOM from 'react-dom/client';
import "./App.css"
import Main from "./components/Main.js"
import Navbar from "./components/Navbar.js"

function App() {
  return (
    <div className="container">
      <Navbar />
      <Main />
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);


