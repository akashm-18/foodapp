import React from "react";

const Cards = () => {
   return (
      <div className="max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6">
         {/*cards*/}
         <div className="rounded-xl relative">
            {/*overlay*/}
            <div className="absolute text-white w-full h-full bg-black/50 rounded-xl">
               <p className="font-bold px-2 text-2xl pt-4">
                  Sun's Out, BOGO's out
               </p>
               <p className="px-2 ">Through 8/26</p>
               <button className="border-white bg-white text-black mx-2 absolute bottom-4 mt-2">
                  Order Now
               </button>
            </div>
            <img
               className="rounded-xl  max-h-[160px] md:max-h-[200px] w-full object-cover"
               src="https://tse3.explicit.bing.net/th?id=OIP.0TwfmNYqTafWQd-sjDNAFwHaEo&pid=Api&P=0"
               alt=""
            />
         </div>

         <div className="rounded-xl relative">
            {/*overlay*/}
            <div className="absolute text-white w-full h-full bg-black/50 rounded-xl">
               <p className="font-bold px-2 text-2xl pt-4">New Restaurants </p>
               <p className="px-2">Added Daily </p>
               <button className="border-white bg-white text-black mx-2 absolute bottom-4">
                  Order Now
               </button>
            </div>
            <img
               className="rounded-xl  max-h-[160px] md:max-h-[200px] w-full object-cover"
               src="https://tse1.mm.bing.net/th?id=OIP.mLg2psW5bI6LnmK9HB-byQHaE6&pid=Api&P=0"
               alt=""
            />
         </div>

         <div className="rounded-xl relative">
            {/*overlay*/}
            <div className="absolute text-white w-full h-full bg-black/50 rounded-xl">
               <p className="font-bold px-2 text-2xl pt-4">
                  We Delivier Desserts Too
               </p>
               <p className="px-2">Tasty Treats</p>
               <button className="border-white bg-white text-black mx-2 absolute bottom-4">
                  Order Now
               </button>
            </div>
            <img
               className="rounded-xl  max-h-[160px] md:max-h-[200px] w-full object-cover"
               src="https://tse1.mm.bing.net/th?id=OIP.abSqsJV26pSm9L-OztjFGQHaEo&pid=Api&P=0"
               alt=""
            />
         </div>
      </div>
   );
};

export default Cards;
