import React from 'react';
import project1 from '../../../Assets/projects/project1.png';
import project2 from '../../../Assets/projects/project2.png';
import project3 from '../../../Assets/projects/project3.png';
import Project from './Project';

const Projects = () => {
    return (
        <section className='my-24 lg:mx-12'>
            <h1 className='text-center text-3xl text-secondary mb-5'>Projects</h1>
            <div className='grid grid-clos-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                <Project img={project1} description='An web application for a car parts manufacturer company.' site='https://motocar-junction.web.app/'></Project>
                <Project img={project2} description='A web application for a motorcycle warehouse.' site='https://assignment11-motozone.web.app'></Project>
                <Project img={project3} description='A web application for a programming instructor.' site='https://programming-fundamental-b1ee0.web.app/'></Project>
            </div>
        </section>


    );
};

export default Projects;