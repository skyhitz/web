import React from 'react';
import NavBar from 'app/components/navbar/navbar';
import BackgroundImage from 'app/components/background-image/background-image';
import MainWrapper from 'app/components/main-wrapper/main-wrapper';
import Footer from 'app/components/footer/footer';

const Home = () => (
  <div>
    <NavBar />
    <BackgroundImage />
    <MainWrapper />
    <Footer />
  </div>
);

export default Home;
