import React from 'react';

const SpecialCard = ({advertise,handleOffer}) => {
    const {product, _id} = advertise;
    const {price,image, productName} = product;
    // console.log(product)
    return (
        <div data-aos="fade-up" data-aos-duration="3000" className="card lg:card-side md:card-side bg-base-100 shadow-xl">
            <figure><img className='sm:w-1/2 md:w-1/2 lg:w-96  ' src={image} alt="Book" /></figure>
            <div className="card-body">
                <h2 className="card-title">{productName}</h2>
                <p><span className='text-bold text-primary'>offer price</span>:{price}</p>
                <div className="card-actions justify-end">
                    <button onClick={()=>handleOffer(_id)} className="btn btn-warning sm:btn-sm">Get the offer </button>
                </div>
            </div>
        </div>
    );
};

export default SpecialCard;