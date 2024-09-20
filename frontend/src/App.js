// App.js
import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css"; // Import your general styles
import "bootstrap/dist/css/bootstrap.min.css";
import Registration from "./components/Registration/Registration";
import Prodcut from "./components/Farmer/Product";
import BuyersPage from "./components/Buyer/BuyersPage";
import ChatPage from "./components/ChatBox/Chatpage";

function App() {
  return (
    <div className="App">
      <Header />
      {/* <Hero /> */}
      {/* <About /> */}
      {/* <BuyersPage /> */}
      {/* <Registration /> */}
      <Prodcut />
      {/* <Services />
      <Contact /> */}
      <ChatPage />
      <Footer />
    </div>
  );
}

export default App;
