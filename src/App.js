import "./App.css";
import Card from "./modules/Card/Card";
import Footer from "./modules/Footer/Footer";
import Header from "./modules/Header/Header";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Task from "./pages/Task/Task";
import Home from "./pages/Home/Home";
import NewTask from "./pages/NewTask/NewTask";

function App() {
  return (
    <div className="App">
      <Header />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/task/:id" element={<Task />} />
          <Route path="/newTask" element={<NewTask />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
