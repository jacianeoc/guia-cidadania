import React from 'react';
import { NavBar } from "./NavBar";
import { Banner } from "./Banner";
import { Etapas} from "./Etapas";

const Home = () =>{
    return(
        <div className="App">
        <NavBar />
        <Banner />
        <Etapas />
        
      </div>
      )
};

export default Home;