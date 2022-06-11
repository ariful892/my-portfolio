import React, { useEffect, useState } from 'react';
import useProjects from '../../hooks/useProjects';
import { useParams } from 'react-router-dom';
import Loading from '../../Shared/Loading';

const port = process.env.PORT || 3000;

const ProjectDetails = () => {

    const { id } = useParams();
    const [project, setProject] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch(`http://localhost:${port}/projects.json`)
            .then(res => res.json())
            .then(data => {
                const project = data.filter(pro => pro.id == id);
                setProject(project)
                setIsLoading(false);
            })
    }, []);

    if (isLoading) {
        return <Loading></Loading>
    }


    console.log(project);

    return (
        <div className='min-h-screen mx-12 my-8'>
            <h2 className='text-3xl text-center font-bold text-secondary my-5'>{project[0].name}</h2>
            <div className='hero'>
                <div className='hero-content flex-col lg:flex-row  bg-secondary p-5'>
                    <div className="carousel lg:w-1/2 ">
                        <div id="slide1" className="carousel-item relative w-full">
                            <img src={project[0].img1} className="w-full" alt='projectImg' />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide4" className="btn btn-circle">❮</a>
                                <a href="#slide2" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="slide2" className="carousel-item relative w-full">
                            <img src={project[0].img2} className="w-full" alt='projectImg' />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide1" className="btn btn-circle">❮</a>
                                <a href="#slide3" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="slide3" className="carousel-item relative w-full">
                            <img src={project[0].img3} className="w-full" alt='projectImg' />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide2" className="btn btn-circle">❮</a>
                                <a href="#slide4" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="slide4" className="carousel-item relative w-full">
                            <img src={project[0].img4} className="w-full" alt='projectImg' />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide3" className="btn btn-circle">❮</a>
                                <a href="#slide1" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                    </div>
                    <div className='text-center lg:w-1/2 font-bold mx-12 text-white'>
                        <h2>{project[0].objective}</h2>
                        <p>{project[0].description}</p>

                    </div>
                </div>
            </div>
            <div className='mt-3 text-center'>
                <p className='font-bold  mb-5'>Technology: {project[0].technology}</p>
                <a href={project[0].liveSite} className='btn btn-outline btn-secondary btn-sm mr-3'>Live Site</a>
                <a href={project[0].clientCode} className='btn btn-outline btn-secondary btn-sm mr-3'>Client Side Code</a>
                {project[0].serverCode && <a href={project[0].serverCode} className='btn btn-outline btn-secondary btn-sm'>Server Side Code</a>}
            </div>
        </div>
    );
};

export default ProjectDetails;