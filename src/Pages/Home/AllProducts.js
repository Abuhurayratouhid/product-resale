import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductCart from './ProductCart';

const AllProducts = () => {
    const books = useLoaderData();
    
    // console.log(books)
    return (
        <div>
            <h1 className='text-3xl font-bold text-center '>All books </h1>

            <div className='grid gap-2 grid-cols-1 md:grid-cols-1 lg:grid-cols-2'>
                {
                    books.map(book => <ProductCart 
                    key={book._id}
                    book={book}
                    ></ProductCart>)
                }
            </div>
        </div>
    );
};

export default AllProducts;