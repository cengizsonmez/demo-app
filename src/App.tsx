import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Header from "./components/header";
import Footer from "./components/footer";
import "./assets/css/main.css";
import Gallery from "./pages/gallery/gallery";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/movies"
              element={
                <Gallery
                  filters={{
                    programType: { value: "movie", operator: "equals" },
                    releaseYear: {
                      value: "2010",
                      operator: "greaterThanOrEqual",
                    },
                  }}
                  sort="asc"
                />
              }
            />
            <Route
              path="/series"
              element={
                <Gallery
                  filters={{
                    programType: { value: "series", operator: "equals" },
                    releaseYear: {
                      value: "2010",
                      operator: "greaterThanOrEqual",
                    },
                  }}
                  sort="asc"
                />
              }
            />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
