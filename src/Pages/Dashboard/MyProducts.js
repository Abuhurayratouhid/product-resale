import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import AddedProductCard from './AddedProductCard';

const MyProducts = () => {
    const {user} = useContext(AuthContext);

    const {data: addedProducts=[],} = useQuery({
        queryKey: ['addProduct'],
        queryFn: ()=>fetch(`http://localhost:5000/addProduct?email=${user?.email}`)
        .then(res => res.json())
    })
    // console.log(addedProducts)
    return (
        <div>
            <h1 className='text-center text-3xl font-bold my-10'>My products</h1>

            <div className='grid gap-5 grid-cols-1 lg:grid-cols-2'>
                {
                    addedProducts.map(product => <AddedProductCard
                    key={product._id}
                    product={product}
                    ></AddedProductCard>)
                }
            </div>
        </div>
    );
};

export default MyProducts;