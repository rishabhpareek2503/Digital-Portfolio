import { BrowserRouter as Router, Routes, Route, Switch } from "react-router-dom";
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

// Initialize Google Analytics if tracking ID is defined
if (typeof process.env.REACT_APP_TRACKING_ID !== 'undefined') {
    ReactGA.initialize(process.env.REACT_APP_TRACKING_ID);
}

function App() {
    return (
        <Router>
            <div className="App">
                <NavBar />
                <br />
                <ScrollToTop />
                <Switch>
                    <Route path={"/portfolio"} component={Home} />
                    <Route path={"/projects"} component={Projects} />
                    <Route path={"/blogs"} component={Blogs} />
                    <Route path={"/skills"} component={Skills} />
                </Switch>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
