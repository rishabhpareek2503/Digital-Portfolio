import { HashRouter as Router, Routes, Route } from "react-router-dom";
import ReactGA from 'react-ga';
import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/Home/Home";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills/Skills";
import Blogs from "./pages/Blogs";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer/Footer";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';



function App() {
    return (
        <Router>
            <div className="App">
                <NavBar />
                <br />
                <ScrollToTop />
                <Routes>
                    <Route path={"/portfolio"} element={<Home />} />
                    <Route path={"/projects"} element={<Projects />} />
                    <Route path={"/blogs"} element={<Blogs />} />
                    <Route path={"/skills"} element={<Skills />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
