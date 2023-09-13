import React, { useEffect, useState } from 'react';
import useProjects from '../../hooks/useProjects';
import { useParams } from 'react-router-dom';
import Loading from '../../Shared/Loading';


const ProjectDetails = () => {

    const { id } = useParams();
    const [project, setProject] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch(` https://my-portfolio-6ndc.onrender.com/project/${id}`)
            .then(res => res.json())
            .then(data => {
                setProject(data)
                setIsLoading(false);
            })
    }, [id]);

    if (isLoading) {
        return <Loading></Loading>
    }


    return (
        <div className='min-h-screen mx-12 my-8'>
            <h2 className='text-3xl text-center font-bold text-secondary my-5'>{project.name}</h2>
            <div className='hero'>
                <div className='hero-content flex-col lg:flex-row  bg-secondary p-5'>
                    <div className="carousel lg:w-1/2 ">
                        <div id="slide1" className="carousel-item relative w-full">
                            <img src={project.img1} className="w-full" alt='projectImg' />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide4" className="btn btn-circle">❮</a>
                                <a href="#slide2" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="slide2" className="carousel-item relative w-full">
                            <img src={project.img2} className="w-full" alt='projectImg' />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide1" className="btn btn-circle">❮</a>
                                <a href="#slide3" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="slide3" className="carousel-item relative w-full">
                            <img src={project.img3} className="w-full" alt='projectImg' />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide2" className="btn btn-circle">❮</a>
                                <a href="#slide4" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="slide4" className="carousel-item relative w-full">
                            <img src={project.img4} className="w-full" alt='projectImg' />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide3" className="btn btn-circle">❮</a>
                                <a href="#slide1" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                    </div>
                    <div className='text-center lg:w-1/2 font-bold mx-12 text-white'>
                        <h2>{project.objective}</h2>
                        <p>{project.description}</p>

                    </div>
                </div>
            </div>
            <div className='mt-3 text-center'>
                <p className='font-bold  mb-5'>Technology: {project.technology}</p>
                <a href={project.liveSite} className='btn btn-outline btn-secondary btn-sm mr-3'>Live Site</a>
                <a href={project.clientCode} className='btn btn-outline btn-secondary btn-sm mr-3'>Client Side Code</a>
                {project.serverCode && <a href={project.serverCode} className='btn btn-outline btn-secondary btn-sm'>Server Side Code</a>}
            </div>
        </div>
    );
};

export default ProjectDetails;