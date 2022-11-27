import React from 'react';

const AddedProductCard = ({product}) => {
    const {productName, productStatus,image} = product;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Book" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                   {productName}
                    <div className="badge badge-secondary">NEW added</div>
                </h2>
                <p>Status:{productStatus}</p>
                <div className="card-actions justify-end">
                    <div className="badge badge-outline">Fashion</div>
                    <div className="badge badge-outline">Products</div>
                </div>
            </div>
        </div>
    );
};

export default AddedProductCard;