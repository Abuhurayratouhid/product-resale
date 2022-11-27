import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';
import Loading from '../../Shared/Loading/Loading';

const Buyers = () => {
    const {data: buyers = [],isLoading, refetch} = useQuery({
        queryKey: ['buyers'],
        queryFn: ()=>fetch('https://product-resale-server.vercel.app/buyers')
        .then(res => res.json())
    })
    // console.log(buyers)
    if(isLoading){
        return <Loading></Loading>
    }

    // handle buyers delete 
    const handleBuyerDelete = (_id)=>{
        // console.log(_id)

        fetch(`https://product-resale-server.vercel.app/buyer/${_id}`,{
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount > 0){
                toast.success('Buyer deleted')
                refetch()
            }
            // console.log(data)
        })
    }
    return (
        <div>
            <h1 className='text-center text-3xl font-semibold'>Buyers </h1>

            <div>
                
                <div  className="overflow-x-auto">
                     <table className="table w-full">
                        
                         <thead>
                             <tr>
                                 <th></th>
                                 <th>Name</th>
                                 <th>email</th>
                                 <th>Account status</th>
                                 
                                 <th>delete</th>
                             </tr>
                         </thead>
                         <tbody>
                             {
                                 buyers.map((user , i) => <tr key={user._id}>
                                     <th>{i+1}</th>
                                     <td>{user.name}</td>
                                     <td>{user.email}</td>
                                     <td>{user.account}</td>
                                     
                                     <td><button onClick={()=>handleBuyerDelete(user._id)} className='btn btn-sm'>Delete </button></td>
                                 </tr>)
                                     
                             }
                         </tbody>
                     </table>
                 </div>
             
         </div>
        </div>
    );
};

export default Buyers;