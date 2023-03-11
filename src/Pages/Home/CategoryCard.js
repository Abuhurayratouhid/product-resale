import React from 'react';
import { Link } from 'react-router-dom';

const CategoryCard = ({category}) => {
    const {_id,name,picture}= category;
    return (
        <div data-aos="zoom-in" data-aos-duration="3000" className="card  w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img  src={picture} alt="Shoes" className="rounded-xl h-40 w-full" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                
                <div className="card-actions">
                    <Link to={`/categories/${_id}`}><button className="btn btn-warning">All this category</button></Link>
                </div>
            </div>
        </div>
    );
};

export default CategoryCard;