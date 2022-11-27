import React from 'react';

const AddedProductCard = ({product,handleProductDelete,handleProductAdvertise}) => {
    const {productName, productStatus,image, price, _id} = product;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Book" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                   {productName}
                    <div className="badge badge-secondary">NEW added</div>
                </h2>
                <p>Status:{productStatus}</p>
                <p>Price:{price}</p>
                <div className="card-actions justify-end">
                    <div className="badge badge-outline bg-red-300"><button className='' onClick={()=>handleProductDelete(_id)}>Delete</button></div>
                    <div className="badge badge-outline bg-primary text-white"><button onClick={()=>handleProductAdvertise(product)}>Advertise</button></div>
                </div>
            </div>
        </div>
    );
};

export default AddedProductCard;