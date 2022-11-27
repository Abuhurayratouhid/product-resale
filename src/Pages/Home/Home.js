import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import AdvertisedSection from './AdvertisedSection';
import Banner from './Banner';
import ExtraSection from './ExtraSection';
import ProductCategories from './ProductCategories';

const Home = () => {
    const {data: advertisements= []} = useQuery({
        queryKey: ['advertisements'],
        queryFn:()=>fetch('https://product-resale-server.vercel.app/advertise')
        .then(res => res.json())
    })
    // console.log(advertisements)
    return (
        <div>
           
            <Banner></Banner>
            {
                advertisements.length > 0 && <AdvertisedSection></AdvertisedSection>
            }
            
            <ProductCategories></ProductCategories>
            <ExtraSection></ExtraSection>
            <Footer></Footer>
        </div>
    );
};

export default Home;