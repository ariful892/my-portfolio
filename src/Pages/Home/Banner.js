import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import profile from '../../Assets/profile.png';
import Particle from '../Particle/Particle';
import { Typewriter } from 'react-simple-typewriter';

const Banner = () => {
    return (
        <>
            <Particle></Particle>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse sm:mr-12">
                    <img src={profile} className="max-w-sm rounded-lg shadow-2xl border-r-8 border-b-8 border-primary" alt='Arif' />
                    <div className='lg:mr-24 '>
                        <h1 className="text-5xl font-bold">Hi!</h1>
                        <h1 className="text-5xl font-bold">I'm

                            <span className='text-primary'>

                                <Typewriter
                                    words={[" A"]}

                                    typeSpeed={70}
                                    deleteSpeed={50}
                                    delaySpeed={1000}
                                />
                            </span>

                            <Typewriter
                                words={["rif"]}
                                cursor
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={2000}
                            />

                        </h1>
                        <h1 className="text-5xl font-bold">
                            <Typewriter
                                words={["web developer"]}
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={2000}
                            />
                        </h1>
                        <p className="py-6 text-lg font-bold text-secondary">
                            <Typewriter
                                words={["Junior Web Developer || React Developer"]}
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={3000}
                            />
                        </p>

                        <Nav.Link href='home#contact' className="btn btn-outline btn-primary font-bold">Contact</Nav.Link>
                    </div>
                </div>
            </div></>
    );
};

export default Banner;