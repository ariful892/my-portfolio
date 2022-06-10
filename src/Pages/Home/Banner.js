import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import profile from '../../Assets/profile.png';

const Banner = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={profile} className="max-w-sm rounded-lg shadow-2xl border-r-8 border-b-8 border-primary" alt='Arif' />
                <div className='lg:mr-24'>
                    <h1 className="text-5xl font-bold">Hi!</h1>
                    <h1 className="text-5xl font-bold">I'm <span className='text-primary'>A</span>rif,</h1>
                    <h1 className="text-5xl font-bold">web developer</h1>
                    <p className="py-6 text-lg font-bold text-secondary">Junior Web Developer || React Developer</p>
                    <Nav.Link href='home#contact' className="btn btn-outline btn-primary font-bold">Contact</Nav.Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;