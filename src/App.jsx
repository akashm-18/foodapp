import React from "react";
import Navbar from "./components/navbar";
import Hero from "./components/Hero";
import Cards from "./components/Cards";
import Food from "./components/Food";
import Category from "./cate/Category.jsx";

const App = () => {
   return (
      <div>
         <Navbar />
         <Hero />
         <Cards />
         <Food />
         <Category />
      </div>
   );
};

export default App;
