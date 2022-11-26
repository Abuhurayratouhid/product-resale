import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loading from '../../Shared/Loading/Loading';

const Sellers = () => {
    const {data: sellers = [], isLoading} = useQuery({
        queryKey: ['sellers'],
        queryFn: ()=>fetch('http://localhost:5000/sellers')
        .then(res => res.json())
    })
    // console.log(sellers)
    if(isLoading){
        return <Loading></Loading>
    }
    return (
        <div>
            <h1 className='text-center text-3xl font-semibold'>Sellers </h1>

            <div>
                
                   <div  className="overflow-x-auto">
                        <table className="table w-full">
                           
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Name</th>
                                    <th>email</th>
                                    <th>Account status</th>
                                    <th>Make admin</th>
                                    <th>delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    sellers.map((user , i) => <tr key={user._id}>
                                        <th>{i+1}</th>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>{user.account}</td>
                                        <td><button className='btn btn-sm'>Verify </button></td>
                                        <td><button className='btn btn-sm'>Delete </button></td>
                                    </tr>)
                                        
                                }
                               
                                
                               
                                
                            
                                
                            </tbody>
                        </table>
                    </div>
                
            </div>
        </div>
    );
};

export default Sellers;