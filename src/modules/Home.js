import Hero from "../components/Hero";
import Hero2 from "../components/Hero2";
import Contact from "../components/Contact"
import Footer from '../components/Footer';
import Nav from "./Nav"
import React from "react";

export default function Home() {
  return (
    <div>
          <Hero />
          <Hero2 />
          <Contact />
    </div>
  );
}