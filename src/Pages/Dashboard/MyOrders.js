import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';

const MyOrders = () => {
    const {user} = useContext(AuthContext);


    const {data: orders =[],} = useQuery({
        queryKey: ['orders'],
        queryFn:()=>fetch(`http://localhost:5000/orders/${user?.email}`)
        .then(res => res.json())
    })
    // console.log(orders)
    return (
        <div>
            <h1>My orders </h1>

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