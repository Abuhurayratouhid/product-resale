import React from 'react';

const Blog = () => {
    return (
        <section>
            <h1 className='text-center text-5xl font-semibold pt-10'>Blogs</h1>
            {/* blog-1  */}
            <div className="card  bg-base-100 shadow-xl my-10">
                <div className="card-body">
                    <h2 className="text-center text-3xl">What are the different ways to manage a state in a React application?</h2>
                    <p className='text-center'>Ans:</p>
                    <p className='lg:w-2/4 text-center mx-auto'> React state management is a process for managing the data that React components need in order to render themselves. This data is typically stored in the component's state object. When the state object changes, the component will re-render itself. React state management is basically half of a React app.</p>
                    
                </div>
            </div>
            {/* blog-2  */}
            <div className="card  bg-base-100 shadow-xl my-10">
                <div className="card-body">
                    <h2 className="text-center text-3xl">How does prototypical inheritance work?</h2>
                    <p className='text-center'>Ans:</p>
                    <p className='lg:w-2/4 text-center mx-auto'> Prototypical inheritance allows us to reuse the properties or methods from one JavaScript object to another through a reference pointer function. All JavaScript objects inherit properties and methods from a prototype: Date objects inherit from Date.The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object.</p>
                    
                </div>
            </div>
            {/* blog-3  */}
            <div className="card  bg-base-100 shadow-xl my-10">
                <div className="card-body">
                    <h2 className="text-center text-3xl"> What is a unit test? Why should we write unit tests?</h2>
                    <p className='text-center'>Ans:</p>
                    <p className='lg:w-2/4 text-center mx-auto'> The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.</p>
                    
                </div>
            </div>
            {/* blog-4  */}
            <div className="card  bg-base-100 shadow-xl my-10">
                <div className="card-body">
                    <h2 className="text-center text-3xl">React vs. Angular vs. Vue?</h2>
                    <p className='text-center'>Ans:</p>
                    <p className='lg:w-2/4 text-center mx-auto'> React is a UI library, Angular is a fully-fledged front-end framework, while Vue.js is a progressive framework.Vue provides higher customizability and hence is easier to learn than Angular or React. Further, Vue has an overlap with Angular and React with respect to their functionality like the use of components. Hence, the transition to Vue from either of the two is an easy option.</p>
                    
                </div>
            </div>
        </section>
    );
};

export default Blog;