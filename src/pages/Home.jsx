import React, { Component, useEffect } from "react";
import { Start } from '../components/Start.jsx'
import { Differences } from '../components/Differences'
import { Opinions } from '../components/Opinions'
import { Footer } from "../components/Footer";



export const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Start></Start>
      <Differences></Differences>
      <Opinions></Opinions>
      <Footer></Footer>
    </>
  )
}

