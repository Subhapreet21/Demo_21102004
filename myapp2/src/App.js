import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Classroom from "./pages/Classroom";
import Assessments from "./pages/Assessments";
import Store from "./pages/Store";
import Calendar from "./pages/Calendar";
import News from "./pages/News";
import Blog from "./pages/Blog";
import PageNotFound from "./pages/PageNotFound";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/classroom" element={<Classroom />} />
        <Route path="/assessments" element={<Assessments />} />
        <Route path="/store" element={<Store />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/news" element={<News />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
