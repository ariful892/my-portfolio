import React from 'react';
import react from '../../Assets/react.png';

const About = () => {
    return (
        <section id='about' className='my-24 lg:mx-12'>
            <h1 className='text-center text-3xl text-secondary uppercase'>About Myself</h1>
            <div class="hero min-h-screen  bg-secondary mt-5">
                <div class="hero-content flex-col lg:flex-row">
                    <img src={react} class="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <p class="py-6 lg:mx-5 text-white text-xl">I am Md Ariful Islam. I am from Chattogram, Bangladesh. I have completed my graduation in Computer Science and Engineering. I have worked on several projects where two of them are full stack projects and the technologies I have used on those projects are HTML,CSS, JavaScript, React.js, Node.js, Express.js, Bootstrap, Tailwind, Firebase, Heroku, GitHub etc.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;