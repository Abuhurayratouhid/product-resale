import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';
import SpecialCard from './SpecialCard';

const AdvertisedSection = () => {
    const {data: advertisements = [], refetch} = useQuery({
        queryKey: ['advertise'],
        queryFn: ()=> fetch('http://localhost:5000/advertise')
        .then(res => res.json())
    })
    // console.log(advertisements)
    // handleOffer
    const handleOffer = (_id)=>{
        console.log(_id)
        fetch(`http://localhost:5000/advertise/${_id}`,{
            method: 'DELETE',
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount){
                toast.success('you got the offer')
                refetch()
            }
            console.log(data)
        })
    }
    return (
        <div>
            <div className='text-center'>
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