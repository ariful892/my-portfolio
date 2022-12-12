import React from 'react';
import About from './About';
import Banner from './Banner';
import Contact from './Contact';
import Projects from './Projects/Projects';

const Home = () => {
    return (
        <div >
            <Banner></Banner>
            <About></About>
            <Projects></Projects>
            <Contact></Contact>


        </div>
    );
};

export default Home;