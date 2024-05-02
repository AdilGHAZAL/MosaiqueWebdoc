import React, { useEffect, useRef } from 'react';
import Navbar from './Navbar';
import { Application } from '@splinetool/runtime';
import './HomePage.css';
import MonComposant from './Athletes';
import MonComposant2 from './Athletes2';
import MonComposant3 from './Athletes3';
import VideoYoutube from './VideoYoutube';
import TroisDivs from './TroisDivs';
import SliderComponentContainer from './SliderComponentContainer';
import Footer from './Footer';
import PhotoGrid from './PhotoGrid';



const HomePage = () => {


  return (
    <div className="app-container">
      <Navbar />
      <div className="content">
        <h1 className="main-title">
          <span className="bold-text">Paris 2024:</span><span> Célébrez la beauté et la puissance du corps humain.</span>
        </h1>
        <div className="UBimage">
          <img src="./src/assets/ub1.png" alt="imageUB" />
        </div>
        <section className='scroll-reveal' >
          <span>
            Les épreuves d'athlétisme aux Jeux Olympiques regroupent un large éventail de disciplines, toutes basées sur les capacités physiques fondamentales de l'être humain : courir, sauter et lancer. Elles se répartissent en quatre grandes catégories, course, saut, lancers et épreuves combinées.
          </span>
        </section>

      </div>
      <div className='athletes'>
        {/* Adding the ScrollPhotos component */}
        <MonComposant/>
        <MonComposant2/>
        <MonComposant3/>
      </div>
      <VideoYoutube
        titre="Inspirational Music Video"
        videoId="54SjaE0Z29c"  // YouTube video ID
        footerText="Enjoy this stunning music video from early in Usain Bolt's career!"
      />
      <TroisDivs/>
      <SliderComponentContainer />
      <PhotoGrid/>
      <Footer/>
      

    </div>
  );
};

export default HomePage;
