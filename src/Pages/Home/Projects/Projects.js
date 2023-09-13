import React, { useEffect, useState } from 'react';
import Loading from '../../Shared/Loading';
import Project from './Project';

const Projects = () => {

    const [projects, setProjects] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch('https://my-portfolio-6ndc.onrender.com/project')
            .then(res => res.json())
            .then(data => {
                setProjects(data);
                setIsLoading(false);
            })
    }, []);

    if (isLoading) {
        return <Loading></Loading>
    }


    return (
        <section id='projects' className='my-24 lg:mx-12'>
            <h1 className='text-center text-3xl text-primary uppercase mb-5'>Recent Works</h1>
            <div className='grid grid-clos-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    projects.map(project => <Project key={project._id} project={project}></Project>)
                }
            </div>
        </section>


    );
};

export default Projects;