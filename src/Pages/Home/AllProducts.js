import React, { useContext, useState } from 'react';
import { set } from 'react-hook-form';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import OrderModal from '../../Shared/Modal/OrderModal';
import ProductCart from './ProductCart';

const AllProducts = () => {
    const books = useLoaderData();
    const {user} = useContext(AuthContext)
    const [book, setBook]= useState('');
    // const handleModal = book =>{
    //     setBook(book);
    //     console.log(book)
    // }
    // console.log(book)
    return (
        <div>
            <h1 className='text-3xl font-bold text-center '>All books </h1>

            <div className='grid gap-2 grid-cols-1 md:grid-cols-1 lg:grid-cols-2'>
                {
                    books.map(book => <ProductCart 
                    key={book._id}
                    book={book}
                    setBook={setBook}
                    ></ProductCart>)
                }
            </div>
            <div>
                <OrderModal
                user={user}
                book={book}
                ></OrderModal>
            </div>
        </div>
    );
};

export default AllProducts;