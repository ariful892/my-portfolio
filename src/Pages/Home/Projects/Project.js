import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
const Project = ({ project }) => {

    const navigate = useNavigate();
    const { _id, name, img1, img2, img3, img4, objective, description, liveSite } = project;


    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure><img src={img1} alt="Shoes" /></figure>
            <div className="card-body">
                <p className='font-bold text-center'>{objective}</p>
                <div className="card-actions justify-center">
                    <a href={liveSite} className="btn btn-sm btn-primary">Visit Site</a>
                    <Link to={`/details/${_id}`} className="btn btn-sm btn-outline btn-primary">Details</Link>
                </div>
            </div>
        </div>
    );
};

export default Project;