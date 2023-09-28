import React from "react";
import Homepage from "./homepage";
import Login from "./login";
import Register from "./register";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" exact element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/homepage" element={<Homepage/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
