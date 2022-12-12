import React from 'react';
import react from '../../Assets/hacker.png';

const About = () => {
    return (
        <section id='about' className='my-24 lg:mx-12'>
            <div className=''>
                <h1 className='text-3xl text-primary uppercase'>About Myself </h1>
            </div>
            <div className="hero  bg-secondary mt-5 sm:pr-5">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={react} className="max-w-sm rounded-lg shadow-2xl" alt='' />
                    <div className='sm:px-5'>
                        <p className="py-6 pr-5 lg:mx-5 text-white text-xl">I am Md Ariful Islam. I am from Chattogram, Bangladesh. I have completed my graduation in Computer Science and Engineering. I have worked on several projects where two of them are full stack projects. I am skilled in HTML,CSS, JavaScript, React.js, Node.js, Express.js, Bootstrap, Tailwind CSS, Firebase, Heroku, GitHub etc.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;