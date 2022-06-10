import React from 'react';

const Project = ({ img, description, site }) => {
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <p className='font-bold text-center'>{description}</p>
                <div className="card-actions justify-center">
                    <a href={site} className="btn btn-sm btn-secondary">Visit Site</a>
                    <button className="btn btn-sm btn-outline btn-secondary">Details</button>
                </div>
            </div>
        </div>
    );
};

export default Project;