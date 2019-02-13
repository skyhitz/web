import React from 'react';
import NavBar from 'app/components/navbar/navbar';
import BackgroundImage from 'app/components/background-image/background-image';
import MainWrapper from 'app/components/main-wrapper/main-wrapper';
import Footer from 'app/components/footer/footer';
import PromoSection from 'app/components/promo-section/promo-section';
import ScreenshotsCarousel from 'app/components/screenshots-carousel/screenshots-carousel';
import HeaderSection from 'app/components/header-section/header-section';
import RewardsSection from 'app/components/rewards-section/rewards-section';

const Home = () => (
  <div>
    <NavBar />
    <BackgroundImage />
    <MainWrapper />
    <PromoSection />
    <ScreenshotsCarousel />
    <HeaderSection />
    <RewardsSection />
    <Footer />
  </div>
);

export default Home;
