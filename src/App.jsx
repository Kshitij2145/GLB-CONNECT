import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import QnA from "./Pages/QnA";
import ResourceSharing from "./Pages/ResourceSharing";
import Jobs from "./Pages/Jobs";
import Sessions from "./Pages/Sessions";
import AlumniNetwork from "./Pages/AlumniNetwork";
import Login from "./Pages/Login";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/qna" element={<QnA />} />
        <Route path="/resource-sharing" element={<ResourceSharing />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/sessions" element={<Sessions />} />
        <Route path="/alumni-network" element={<AlumniNetwork />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;
