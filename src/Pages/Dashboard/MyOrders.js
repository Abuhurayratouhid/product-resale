import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import Loading from '../../Shared/Loading/Loading';

const MyOrders = () => {
    const {user} = useContext(AuthContext);


    const {data: orders =[], isLoading} = useQuery({
        queryKey: ['orders'],
        queryFn:()=>fetch(`https://product-resale-server.vercel.app/orders/${user?.email}`)
        .then(res => res.json())
    })
    // console.log(orders)
    if(isLoading){
        return <Loading></Loading>
    }
    return (
        <div>
            <h1 className='text-center text-3xl text-semibold my-5'>My orders </h1>

            <div>
                <div className="overflow-x-auto">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Item name</th>
                                <th>Price</th>
                                <th>Meeting location</th>
                                <th>Payment</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                orders.map((order, i) => <tr key={order._id}>
                                    <th>{i + 1}</th>
                                    <td>{order.itemName}</td>
                                    <td>{order.price}</td>
                                    <td>{order.meetingLocation}</td>
                                    <td><button className='btn btn-primary btn-sm'>Pay</button></td>

                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    );
};

export default MyOrders;