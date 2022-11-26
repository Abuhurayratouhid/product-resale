import { useQuery } from '@tanstack/react-query';
import React from 'react';

const AllOrders = () => {
    const {data: orders = [],} = useQuery({
        queryKey: ['orders'],
        queryFn: ()=>fetch('http://localhost:5000/orders')
        .then(res => res.json())
    })
    console.log(orders)
    return (
        <div>
            <h1 className='text-center text-3xl font-semibold'>All orders</h1>

            <div>
                
                   <div  className="overflow-x-auto">
                        <table className="table w-full">
                           
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>user email</th>
                                    <th>Item name</th>
                                    <th>Price</th>
                                    <th>Meeting Location</th>
                                    <th>Phone </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    orders.map((order , i) => <tr key={order._id}>
                                        <th>{i+1}</th>
                                        <td>{order.userEmail}</td>
                                        <td>{order.itemName}</td>
                                        <td>{order.price}</td>
                                        <td>{order.meetingLocation}</td>
                                        <td>{order.phone}</td>
                                        
                                    </tr>)
                                        
                                }
                            </tbody>
                        </table>
                    </div>
                
            </div>
        </div>
    );
};

export default AllOrders;