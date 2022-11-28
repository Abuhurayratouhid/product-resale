import React from 'react';

const ExtraSection = () => {
    return (
        <div className="hero my-20 ">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">be with BOOK-HUT</h1>
                    <p className="py-6">we respect your privacy. we know very well . privacy is not for sale. and don't worry we won't sent you notification without any reason.</p>
                </div>
                <div className="card flex-shrink-0 w-full lg:w-1/2 shadow-2xl bg-base-100">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" placeholder="password" className="input input-bordered" />
                            
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">subscribe</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExtraSection;