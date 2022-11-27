import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';
import Loading from '../../Shared/Loading/Loading';

const AllUsers = () => {

    const { data: users = [], isLoading, refetch } = useQuery({
        queryKey: ['users'],
        queryFn: () => fetch('http://localhost:5000/users')
            .then(res => res.json())
    })
    // console.log(users)
    if (isLoading) {
        return <Loading></Loading>
    }

    const handleMakeAdmin = (_id) => {
        // console.log(_id)
        fetch(`http://localhost:5000/user/${_id}`, {
            method: 'PUT'
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('admin make successfully')
                    refetch()
                }
                console.log(data)
            })
    }
    return (
        <div>
            <h1 className='text-center text-3xl font-semibold'>All users </h1>

            <div>
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>email</th>
                                <th>Account status</th>
                                <th>Make admin</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((user, i) => <tr key={user._id}>
                                    <th>{i + 1}</th>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.account}</td>
                                    <td>{user?.role !== 'admin' ? <button onClick={() => handleMakeAdmin(user._id)} className='btn btn-sm'>make admin</button> : <span>Admin </span>}</td>

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