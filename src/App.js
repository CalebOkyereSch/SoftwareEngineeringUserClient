import React from "react";

import "./App.css";

// importing components
import Navbar from "./component/layout/Navbar";
import Footer from "./component/layout/Footer";
import Landing from "./component/layout/Landing";

function App() {
  return (
    <div>
      <Navbar />
      <Landing />
      <Footer />
    </div>
  );
}

export default App;
