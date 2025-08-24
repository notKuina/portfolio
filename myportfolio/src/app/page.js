"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

import Hero from "@/section/Hero";
import About from "@/section/About";
import Skills from "@/section/Skills";
import Experience from "@/section/Experience";
import Project from "./Projects/page";
import Contact from "./Contact/page";



export default function Home() {
  return (
    <main className="bg-black text-white scroll-smooth" id="top">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Project />
      <Contact />
      <Footer />
      <BackToTop />
    </main>
  );
}
