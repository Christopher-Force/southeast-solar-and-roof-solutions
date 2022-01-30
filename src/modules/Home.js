import Hero from "../components/Hero";
import Hero2 from "../components/Hero2";
// import Contact from "../components/Contact"
import React from "react";
// import EstimateButton from "../components/EstimateButton";
import FreeQuote from "../components/FreeQuote";

export default function Home() {
  return (
    <div>
          <Hero />
          {/* <div className="-mt-4 md:-mt-10 lg:-mt-20 xl:-mt-32 pb-6 md:pb-10 lg:pb-20">
            <EstimateButton />
          </div> */}
          <Hero2 />
          <FreeQuote />
          {/* <Contact /> */}
    </div>
  );
}