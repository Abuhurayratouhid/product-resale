import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';
import SpecialCard from './SpecialCard';

const AdvertisedSection = () => {
    const {data: advertisements = [], refetch} = useQuery({
        queryKey: ['advertise'],
        queryFn: ()=> fetch('https://product-resale-server.vercel.app/advertise')
        .then(res => res.json())
    })
    // console.log(advertisements)
    // handleOffer
    const handleOffer = (_id)=>{
        toast.success('you got the offer')
        // console.log(_id)
        // fetch(`https://product-resale-server.vercel.app/advertise/${_id}`,{
        //     method: 'DELETE',
        // })
        // .then(res => res.json())
        // .then(data => {
        //     if(data.deletedCount){
                
        //         refetch()
        //     }
        //     console.log(data)
        // })
    }
    return (
        <div className='max-w-[1280px] mx-auto'>
            <div className='text-center my-20'>
                <h1 className='text-4xl font-bold'>Our special offers going on</h1>
                <h1 className='text-3xl font-semibold'>Don't lose</h1>
            </div>
            <div className='grid gap-5 grid-cols-1 lg:grid-cols-2'>
                {
                    advertisements.map(advertise => <SpecialCard
                    key={advertise._id}
                    advertise={advertise}
                    handleOffer={handleOffer}
                    ></SpecialCard>)
                }
            </div>
        </div>
    );
};

export default AdvertisedSection;