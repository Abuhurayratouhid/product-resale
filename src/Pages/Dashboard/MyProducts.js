import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../Context/AuthProvider';
import AddedProductCard from './AddedProductCard';

const MyProducts = () => {
    const {user} = useContext(AuthContext);

    const {data: addedProducts=[], refetch} = useQuery({
        queryKey: ['addProduct'],
        queryFn: ()=>fetch(`https://product-resale-server.vercel.app/addProduct?email=${user?.email}`)
        .then(res => res.json())
    })
    // console.log(addedProducts)
    // handleProductDelete
    const handleProductDelete = (_id) =>{
        console.log(_id)
        fetch(`https://product-resale-server.vercel.app/addProduct/${_id}`,{
            method: 'DELETE',
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount > 0){
                toast.success('product deleted')
                refetch()
            }
            console.log(data)
        })
        
    }
    // handleProductAdvertise
    const handleProductAdvertise = (product)=>{
        const advertiseProduct = {
            product,
        }
        // console.log(advertiseProduct)
        fetch(`https://product-resale-server.vercel.app/advertise`,{
            method: 'POST',
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify(advertiseProduct)
        })
        .then(res => res.json())
        .then(data => {
            if(data.acknowledged){
                toast.success('product will show in advertise section')
            }
            console.log(data)
        })
    }
    return (
        <div>
            <h1 className='text-center text-3xl font-bold my-10'>My products</h1>

            <div className='grid gap-5 grid-cols-1 lg:grid-cols-2'>
                {
                    addedProducts.map(product => <AddedProductCard
                    key={product._id}
                    product={product}
                    handleProductDelete={handleProductDelete}
                    handleProductAdvertise={handleProductAdvertise}
                    ></AddedProductCard>)
                }
            </div>
        </div>
    );
};

export default MyProducts;