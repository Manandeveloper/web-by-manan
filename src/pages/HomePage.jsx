import React from "react";
import Banner from "./Sections/Banner";
import About from "./Sections/About";
import Skills from "./Sections/Skills";
import Projects from './Sections/Projects'
const HomePage = () => {
    return(
        <>
            <Banner/>
            <About/>
            <Skills/>
            <Projects/>
        </>
    );
};

export default HomePage;