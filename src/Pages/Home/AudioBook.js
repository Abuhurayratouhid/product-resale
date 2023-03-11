import React from 'react';

const AudioBook = () => {
    return (
        <div className="hero my-20 ">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img data-aos="fade-left" alt='' src="https://img.freepik.com/premium-vector/audiobook-logo-template-literature-ebooks-audio-format_349999-1238.jpg?w=2000" className="lg:w-1/2 rounded-lg shadow-2xl" />
                <div data-aos="fade-right">
                    <h1 className="text-5xl font-bold">Increase your Knowledge with our audio books </h1>
                    <p className="py-6">never stop learning. always try to learn something . make your self Knowledgeable .</p>
                    <button className="btn btn-warning">Start listening</button>
                </div>
            </div>
        </div>
    );
};

export default AudioBook;