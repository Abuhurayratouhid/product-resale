import React from 'react';
import book1 from '../../assets/black-book.jpg';
import book2 from '../../assets/new-book.jfif';
import book3 from '../../assets/yellow-Book.jpg';

const NewRelease = () => {
    return (
        <div data-aos="fade-up" data-aos-duration="3000" className="hero min-h-screen bg-white">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img alt='' src={book1} className="max-w-sm rounded-lg shadow-2xl" />
                <img alt='' src={book3} className="max-w-sm rounded-lg shadow-2xl" />
                <img alt='' src={book2} className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">New Release Books!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-warning">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default NewRelease;