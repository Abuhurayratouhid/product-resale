import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

const OrderModal = ({ user, book, setBook }) => {
    const { email } = user;
    const { name, resalePrice } = book;

    const {register,handleSubmit} = useForm();
    

    const handleOrder = event =>{
        event.preventDefault();
        const form = event.target;
        const userEmail = form.email.value;
        const itemName = form.name.value;
        const price = form.price.value;
        const meetingLocation = form.meetingLocation.value;
        const phone = form.phone.value;
        // console.log(userEmail, itemName, price,meetingLocation,phone)

        // order 
        const order ={
            userEmail,
            itemName,
            price,
            meetingLocation,
            phone
        }
        // console.log(order)
        fetch('https://product-resale-server.vercel.app/orders',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
        .then(res => res.json())
        .then(data => {
            if(data.acknowledged){
                toast.success('order successfully booked')
                setBook('')
            }
            // console.log(data)
        })
    }
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
                        <form onSubmit={handleOrder}>
                            <label className="label">
                                <span className="label-text">User email:</span>
                            </label>
                            <input name='email' type="email" {...register('email')}  value={email} disabled className="input input-bordered w-full my-2" />
                            <label className="label">
                                <span className="label-text">Order for:</span>
                            </label>
                            <input name='name' type="text" {...register('name')} defaultValue={name} disabled className="input input-bordered w-full my-2" />
                            <label className="label">
                                <span className="label-text">Price:</span>
                            </label>
                            <input name='price' type="text" {...register('price')} defaultValue={resalePrice} disabled className="input input-bordered w-full my-2" />
                            <label className="label">
                                <span className="label-text">meeting location:</span>
                            </label>
                            <input name='meetingLocation' type="text" {...register('meetingLocation')} value="Dhaka" disabled className="input input-bordered w-full my-2" />
                            <label className="label">
                                <span className="label-text">Phone:</span>
                            </label>
                            <input name='phone' type="text" {...register('phone')} placeholder='Phone Number' className="input input-bordered w-full my-2" />
                            
                            <button className='btn btn-primary w-full' type='submit'>Submit</button>
                        </form>
                    </section>
                </div>
            </div>

        </div>
    );
};

export default OrderModal;