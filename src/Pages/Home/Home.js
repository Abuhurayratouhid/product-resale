import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Loading from '../../Shared/Loading/Loading';
import AdvertisedSection from './AdvertisedSection';
import AudioBook from './AudioBook';
import Banner from './Banner';
import ExtraSection from './ExtraSection';
import NewRelease from './NewRelease';
import ProductCategories from './ProductCategories';
import StudySpace from './StudySpace';
import Summary from './Summary';
import WhyWeBest from './WhyWeBest';
import AboutUs from './AboutUs';
import Blogs from './Blogs';


const Home = () => {
    const { data: advertisements = [], isLoading, } = useQuery({
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
            <Summary></Summary>
            {
                advertisements.length > 0 &&
                <AdvertisedSection></AdvertisedSection>
                
            }
            <ProductCategories></ProductCategories>
            <ExtraSection></ExtraSection>
            <WhyWeBest></WhyWeBest>
            <StudySpace></StudySpace>
            <AudioBook></AudioBook>
            <AboutUs/>
            <NewRelease></NewRelease>
            <Blogs/>
            <Footer></Footer>
            
        </div>
    );
};

export default Home;