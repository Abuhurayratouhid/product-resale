import React from 'react';

const Blogs = () => {
    return (
        <section className="py-6 sm:py-12 bg-gray-100 text-gray-800">
            <div className="container p-6 mx-auto space-y-8">
                <div className="space-y-2 text-center">
                    <h2 className="text-3xl font-bold">Our recent Blogs</h2>
                    <p className="font-serif text-sm text-gray-600">Discover the magic of books and ignite your passion for reading.</p>
                </div>
                <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
                    <article className="flex flex-col bg-gray-50">
                        <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
                            <img alt="" className="object-cover w-full h-52 bg-gray-500" src="https://images.unsplash.com/photo-1511500210851-7b5a6fd70703?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHllbGxvdyUyMGJvb2tzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" />
                        </a>
                        <div className="flex flex-col flex-1 p-6">
                            <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
                            <a rel="noopener noreferrer" href="#" className="text-xs tracking-wider uppercase hover:underline text-violet-600">Reade more..</a>
                            <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">Te nulla oportere reprimique his dolorum</h3>
                            <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs text-gray-600">
                                <span>June 1, 2020</span>
                                <span>2.1K views</span>
                            </div>
                        </div>
                    </article>
                    <article className="flex flex-col bg-gray-50">
                        <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
                            <img alt="" className="object-cover w-full h-52 bg-gray-500" src="https://images.unsplash.com/photo-1670523798656-eda0ea506db6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fHllbGxvdyUyMGJvb2tzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" />
                        </a>
                        <div className="flex flex-col flex-1 p-6">
                            <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
                            <a rel="noopener noreferrer" href="#" className="text-xs tracking-wider uppercase hover:underline text-violet-600">Reade more..</a>
                            <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">Te nulla oportere reprimique his dolorum</h3>
                            <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs text-gray-600">
                                <span>June 2, 2020</span>
                                <span>2.2K views</span>
                            </div>
                        </div>
                    </article>
                    <article className="flex flex-col bg-gray-50">
                        <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
                            <img alt="" className="object-cover w-full h-52 bg-gray-500" src="https://plus.unsplash.com/premium_photo-1677187301535-b46cec7b2cc8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGJvb2tzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" />
                        </a>
                        <div className="flex flex-col flex-1 p-6">
                            <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
                            <a rel="noopener noreferrer" href="#" className="text-xs tracking-wider uppercase hover:underline text-violet-600">Reade more..</a>
                            <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">Te nulla oportere reprimique his dolorum</h3>
                            <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs text-gray-600">
                                <span>June 3, 2020</span>
                                <span>2.3K views</span>
                            </div>
                        </div>
                    </article>
                    <article className="flex flex-col bg-gray-50">
                        <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
                            <img alt="" className="object-cover w-full h-52 bg-gray-500" src="https://images.unsplash.com/photo-1665569102899-be105a0bb5f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8eWVsbG93JTIwYm9va3N8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60" />
                        </a>
                        <div className="flex flex-col flex-1 p-6">
                            <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
                            <a rel="noopener noreferrer" href="#" className="text-xs tracking-wider uppercase hover:underline text-violet-600">Reade more..</a>
                            <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">Te nulla oportere reprimique his dolorum</h3>
                            <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs text-gray-600">
                                <span>June 4, 2020</span>
                                <span>2.4K views</span>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    );
};

export default Blogs;