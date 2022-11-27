import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const AddProduct = () => {
    const { user } = useContext(AuthContext)
    const navigate = useNavigate();

    // handle add product form 
    const handleAddProduct = (event) => {
        event.preventDefault();
        const form = event.target;
        const sellerEmail = form.sellerEmail.value;
        const productName = form.productName.value;
        const image = form.photoURL.value;
        const price = form.price.value;
        const condition = form.condition.value;
        const phone = form.phone.value;
        const location = form.location.value;
        const categoryName = form.categoryName.value;
        const productStatus = form.productStatus.value;
        const purchaseDate = form.purchaseDate.value;
        const description = form.description.value;

        const product = {
            sellerEmail,
            productName,
            image,
            price,
            condition,
            phone,
            location,
            categoryName,
            productStatus,
            purchaseDate,
            description
        }
        // console.log(product)
        fetch('http://localhost:5000/addProduct',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
        .then(res => res.json())
        .then(data => {
            if(data.acknowledged){
                toast.success('product successfully added')
                navigate('/dashboard/myProduct')
            }
            // console.log(data)
        })

    }
    return (
        <div>
            <h1 className='text-center text-3xl font-bold'>Add a product </h1>

            <section className=''>
                <form className='p-5' onSubmit={handleAddProduct}>
                    {/* input  1*/}
                    <label className="label">
                        <span className="label-text">Seller email :</span>
                    </label>
                    <input name='sellerEmail' type="email" placeholder="Type here" defaultValue={user?.email} disabled className="input input-bordered w-full" />
                    {/* input  2*/}
                    <label className="label">
                        <span className="label-text">Product name:</span>
                    </label>
                    <input name='productName' type="text" placeholder="Type here" className="input input-bordered w-full" required />
                    {/* input  3*/}
                    <label className="label">
                        <span className="label-text">Photo URL:</span>
                    </label>
                    <input name='photoURL' type="text" placeholder="Photo URL" className="input input-bordered w-full" required />
                    {/* input  3*/}
                    <label className="label">
                        <span className="label-text">Price:</span>
                    </label>
                    <input name='price' type="text" placeholder="Type here" className="input input-bordered w-full" required />
                    {/* input  4*/}
                    <label className="label">
                        <span className="label-text">Condition type</span>
                    </label>
                    <select name='condition' className="select select-bordered w-full" required >
                        <option selected>Good</option>
                        <option>Excellent</option>
                        <option>Fair</option>
                    </select>
                    {/* input  5*/}
                    <label className="label">
                        <span className="label-text">Phone</span>
                    </label>
                    <input name='phone' type="text" placeholder="Type here" className="input input-bordered w-full" required />
                    {/* input  6*/}
                    <label className="label">
                        <span className="label-text">location</span>
                    </label>
                    <input name='location' type="text" placeholder="Type here" className="input input-bordered w-full" required />
                    {/* input  7*/}
                    <label className="label">
                        <span className="label-text">Choose your product category </span>
                    </label>
                    <select name='categoryName' className="select select-bordered w-full" required >
                        <option selected>Horror</option>
                        <option>Action & adventure</option>
                        <option>Historical fiction</option>
                    </select>
                    {/* input  8*/}
                    <label className="label">
                        <span className="label-text">product status</span>
                    </label>
                    <input name='productStatus' type="text" placeholder="Type here" value={'Available'} disabled className="input input-bordered w-full" required />
                    {/* input  9*/}
                    <label className="label">
                        <span className="label-text">Year or purchase</span>
                    </label>
                    <input name='purchaseDate' type="text" placeholder="Type here" className="input input-bordered w-full" required />
                    {/* input  10*/}
                    <label className="label">
                        <span className="label-text">Description</span>
                    </label>
                    <input name='description' type="text" placeholder="Type here" className="input input-bordered w-full" required />

                    {/* submit button  */}
                    <button type='submit' className='btn btn-primary w-full my-3'>Add product</button>
                </form>
            </section>
        </div>
    );
};

export default AddProduct;