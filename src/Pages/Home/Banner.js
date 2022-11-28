import React from 'react';
import banner from '../../assets/banner-1.webp';
import banner2 from '../../assets/Banner-2.jpg';
import './Banner.css';

const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url("https://s2982.pcdn.co/wp-content/uploads/2021/09/open-book-pages-fanned-out.jpg.optimal.jpg")` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">We got best book reseller award last year </h1>
                    <p className="mb-5">We deeply believe. the book can change the nation. doesn't matter the book is new or old .</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;