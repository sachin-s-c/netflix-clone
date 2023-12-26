import React from "react";
import Navbar from "./components/Navbar/Navbar"
import './App.css'
import Banner from "./components/Banner/Banner";
import Rowpost from "./components/RowPost/Rowpost";
import { originals,action } from "./urls";
function App() {
  return (
    <>
    <Navbar/>
    <Banner/>
    <Rowpost url={originals}title='Netflix originals' />
    <Rowpost url={action} title='Action movies' isSmall/>
    </>
    

   
  )
}

export default App;
