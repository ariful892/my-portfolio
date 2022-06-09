import React from 'react';

const Project = ({ img, description, site }) => {
    return (
        <div class="card card-compact bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div class="card-body">
                <p className='font-bold'>{description}</p>
                <div class="card-actions justify-end">
                    <a href={site} class="btn btn-primary">Visit Site</a>
                </div>
            </div>
        </div>
    );
};

export default Project;