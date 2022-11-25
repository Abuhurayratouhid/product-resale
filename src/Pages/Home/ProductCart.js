import React from 'react';
import OrderModal from '../../Shared/Modal/OrderModal';

const ProductCart = ({ book, setBook }) => {
    const {name,picture,location,originalPrice,resalePrice,postedDate, sellerName,useOnly} = book;
    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <figure><img className='h-80' src={picture} alt="Movie" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>Original Price:{originalPrice}</p>
                <p>Resale Price:{resalePrice}</p>
                <p>just use :{useOnly} Days</p>
                <p>seller name:{sellerName}</p>
                <p>location:{location}</p>
                <p>posted date :{postedDate} December 2022 </p>

                <div className="card-actions ">
                    
                    <label onClick={()=>setBook(book)} htmlFor="order-modal" className="btn btn-primary">Order now </label>
                </div>
                {/* <OrderModal></OrderModal> */}
            </div>
        </div>
    );
};

export default ProductCart;