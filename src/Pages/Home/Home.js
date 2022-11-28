import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Loading from '../../Shared/Loading/Loading';
import AdvertisedSection from './AdvertisedSection';
import AudioBook from './AudioBook';
import Banner from './Banner';
import ExtraSection from './ExtraSection';
import ProductCategories from './ProductCategories';

const Home = () => {
    const { data: advertisements = [], isLoading, refetch } = useQuery({
        queryKey: ['advertisements'],
        queryFn: () => fetch('https://product-resale-server.vercel.app/advertise')
            .then(res => res.json())
    })
    // console.log(advertisements)
    if (isLoading) {
        return <Loading></Loading>
            
    }
            
        

    return (
        <div>

            <Banner></Banner>
            {
                advertisements.length > 0 &&
                    <AdvertisedSection></AdvertisedSection>
                   
            }
            <ProductCategories></ProductCategories>
            <ExtraSection></ExtraSection>
            <AudioBook></AudioBook>
            <Footer></Footer>
        </div>
    );
};

export default Home;