import React, { useEffect, useState } from 'react';
import project1 from '../../../Assets/projects/project1.png';
import project2 from '../../../Assets/projects/project2.png';
import project3 from '../../../Assets/projects/project3.png';
import useProjects from '../../hooks/useProjects';
import Project from './Project';

const Projects = () => {

    const [projects, setProjects] = useProjects();


    return (
        <section id='projects' className='my-24 lg:mx-12'>
            <h1 className='text-center text-3xl text-secondary uppercase mb-5'>My Work</h1>
            <div className='grid grid-clos-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    projects.map(project => <Project key={project.id} project={project}></Project>)
                }
            </div>
        </section>


    );
};

export default Projects;