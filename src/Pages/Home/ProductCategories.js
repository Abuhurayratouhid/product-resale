import { useQuery } from '@tanstack/react-query';
import React from 'react';
import CategoryCard from './CategoryCard';


const ProductCategories = () => {
    const { data: categories = [] } = useQuery({
        queryKey: ['categories'],
        queryFn: () => fetch('https://product-resale-server.vercel.app/categories')
            .then(res => res.json())
    })
    // console.log(categories)
    return (
        <div className='max-w-[1280px] mx-auto'>
            <div className='my-20'>
            <h1 className='text-4xl text-center font-bold'>Our books categories:</h1>
            <h1 className='text-2xl text-center font-bold'>choose your favorite one</h1>

            </div>
            <div className='grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    categories?.map(category => <CategoryCard
                        key={category._id}
                        category={category}
                    ></CategoryCard>)
                }
            </div>


        </div>
    );
};

export default ProductCategories;