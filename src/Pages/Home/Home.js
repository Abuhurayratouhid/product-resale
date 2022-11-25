import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import AdvertisedSection from './AdvertisedSection';
import Banner from './Banner';
import ExtraSection from './ExtraSection';
import ProductCategories from './ProductCategories';

const Home = () => {
    return (
        <div>
           
            <Banner></Banner>
            <AdvertisedSection></AdvertisedSection>
            <ProductCategories></ProductCategories>
            <ExtraSection></ExtraSection>
            <Footer></Footer>
        </div>
    );
};

export default Home;