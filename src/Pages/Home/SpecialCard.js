import React from 'react';

const SpecialCard = ({advertise,handleOffer}) => {
    const {product, _id} = advertise;
    const {price,image, productName} = product;
    // console.log(product)
    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <figure><img className='w-96' src={image} alt="Book" /></figure>
            <div className="card-body">
                <h2 className="card-title">{productName}</h2>
                <p>offer price:{price}</p>
                <div className="card-actions justify-end">
                    <button onClick={()=>handleOffer(_id)} className="btn btn-primary">Get the offer </button>
                </div>
            </div>
        </div>
    );
};

export default SpecialCard;