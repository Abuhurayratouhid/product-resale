import React from 'react';
import pic1 from '../../assets/delevary-icon.png';
import pic2 from '../../assets/discound-icon.png';
import pic3 from '../../assets/quality-icon.png';
import pic4 from '../../assets/support-icon.png';
import Marquee from "react-fast-marquee";

const bestFeatures = [
    {
        id: 1,
        title: 'Fast Delivery',
        subTitle: 'Shipping Worldwide',
        picture: pic1,
    },
    {
        id: 2,
        title: 'Open Discount',
        subTitle: 'Offering Open Discount',
        picture: pic2,
    },
    {
        id: 3,
        title: 'Eyes On Quality',
        subTitle: 'Publishing Quality Work',
        picture: pic3,
    },
    {
        id: 4,
        title: '24/7 Support',
        subTitle: 'Serving Every Moments',
        picture: pic4,
    }
]

const WhyWeBest = () => {
    return (
        <div>
            <Marquee speed={80} pauseOnHover={true}>
            <div className='grid lg:grid-cols-4 gap-5'>
                {
                    bestFeatures.map(item => <div key={item.id} className='h-40 w-72  flex justify-center items-center gap-3 bg-yellow-500'>
                        <div>
                            <img className='h-10 w-10' src={item.picture} alt="" />
                        </div>
                        <div>
                            <h1 className='text-2xl font-semibold'>{item.title}</h1>
                            <p>{item.subTitle}</p>
                        </div>
                    </div>)
                }
            </div>
            </Marquee>



        </div>
    );
};

export default WhyWeBest;