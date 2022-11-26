import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loading from '../../Shared/Loading/Loading';

const AllUsers = () => {

    const { data: users = [], isLoading } = useQuery({
        queryKey: ['users'],
        queryFn: () => fetch('http://localhost:5000/users')
            .then(res => res.json())
    })
    // console.log(users)
    if(isLoading){
        return <Loading></Loading>
    }
    return (
        <div>
            <h1 className='text-center text-3xl font-semibold'>All users </h1>

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
                                    users.map((user , i) => <tr key={user._id}>
                                        <th>{i+1}</th>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>{user.account}</td>
                                        <td><button className='btn btn-sm'>make admin</button></td>
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

export default AllUsers;