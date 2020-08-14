import React from "react";
import "./style.css";
import Header from "./Header";
import Footer from "./footer";
import Content from "./content";


function App() {
  return (
    <div className="App">
      <Header />
      <div className="header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
        <h1 className="display-4">Tradonics</h1>
        <p className="lead">The Future of Trade.</p>
      </div>

      <div className="container">
        <Content />

        <Footer />
      </div>
    </div>
  );
}

export default App;