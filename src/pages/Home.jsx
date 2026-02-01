import React from 'react';
import Hero from '../components/home/Hero';
import Intro from '../components/home/Intro';
import ServicesPreview from '../components/home/ServicesPreview';
import WhyUs from '../components/home/WhyUs';
import Industries from '../components/home/Industries';
import Newsletter from '../components/home/Newsletter';
import InquiryCTA from '../components/home/InquiryCTA';
import FAQ from '../components/common/FAQ';

const Home = () => {
    return (
        <div className="home-page">
            <Hero />
            <Intro />
            <ServicesPreview />
            <WhyUs />
            <Industries />
            <Newsletter />
            <InquiryCTA />
            <FAQ />
        </div>
    );
};

export default Home;

