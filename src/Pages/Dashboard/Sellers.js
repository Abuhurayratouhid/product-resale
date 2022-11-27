import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import Loading from '../../Shared/Loading/Loading';

const Sellers = () => {
    
    const {data: sellers = [], isLoading, refetch} = useQuery({
        queryKey: ['sellers'],
        queryFn: ()=>fetch('https://product-resale-server.vercel.app/sellers')
        .then(res => res.json())
    })
    // console.log(sellers)
    if(isLoading){
        return <Loading></Loading>
    }

    //handle verify seller
    
    
    //handle seller delete
    const handleSellerDelete = (_id)=>{
        // console.log(_id)

        fetch(`https://product-resale-server.vercel.app/seller/${_id}`,{
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount > 0){
                toast.success('Seller deleted')
                refetch()
            }
            // console.log(data)
        })
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
                                        <td><button  className='btn btn-sm'>Verify </button></td>
                                        
                                        <td><button onClick={()=>handleSellerDelete(user._id)} className='btn btn-sm'>Delete </button></td>
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