import React from "react";
import Navbar from "./components/navbar";
import Hero from "./components/Hero";
import Cards from "./components/Cards";
import Food from "./components/Food";
import Category from "./cate/Category.jsx";
import Footer from "./components/Footer";

const App = () => {
   return (
      <div>
         <Navbar />
         <Hero />
         <Cards />
         <Food />
         <Category />
         <Footer />
      </div>
   );
};

export default App;
