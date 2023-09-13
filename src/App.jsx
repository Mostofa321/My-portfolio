import { useEffect, useState } from 'react';
import './App.css'
import About from "./components/about/About";
import { Nav } from "./components/header/Nav"
import Hero from "./components/hero/Hero"
import Projects from './components/projects/Projects';
import Skills from "./components/skills/Skills";
import Contact from './components/contact/Contact';
import MessengerCustomerChat from 'react-messenger-customer-chat';
import Footer from './components/footer/Footer';


function App() {

  return (
    <div className="">
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      <MessengerCustomerChat
        pageId="2370092676647148"
        appId="323652806818378"
      />
    </div>
  )
}

export default App
