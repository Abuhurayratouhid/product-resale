import React from 'react';

const OrderModal = ({ user, book }) => {
    const { email } = user;
    const { name, resalePrice } = book;
    
    return (
        <div>
            {/* The button to open modal */}


            {/* Put this part before </body> tag */}
            <input type="checkbox" id="order-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="order-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>
                    <section className='mt-10 '>
                        <form>
                            <label className="label">
                                <span className="label-text">User email:</span>
                            </label>
                            <input type="text" defaultValue={email} disabled className="input input-bordered w-full my-2" />
                            <label className="label">
                                <span className="label-text">Order for:</span>
                            </label>
                            <input type="text" defaultValue={name} disabled className="input input-bordered w-full my-2" />
                            <label className="label">
                                <span className="label-text">Price:</span>
                            </label>
                            <input type="text" defaultValue={resalePrice} disabled className="input input-bordered w-full my-2" />
                            <label className="label">
                                <span className="label-text">meeting location:</span>
                            </label>
                            <input type="text" value="Dhaka" disabled className="input input-bordered w-full my-2" />
                            <label className="label">
                                <span className="label-text">Contact:</span>
                            </label>
                            <input type="text" placeholder='Phone Number' className="input input-bordered w-full my-2" />
                            
                            <button className='btn btn-primary w-full' type='submit'>Submit</button>
                        </form>
                    </section>
                </div>
            </div>

        </div>
    );
};

export default OrderModal;