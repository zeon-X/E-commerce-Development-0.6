import React from 'react';
import './Home.css'
import photo from '../../assets/home.jpg'
import { useNavigate } from 'react-router-dom';


const Home = () => {
  const navigate = useNavigate();
  const navigateToShop = () => {
    navigate("./shop");
  }
  return (
    <div className='home-container flex items-center mt-10'>

      <div className="text-container flex justify-end">
        <div className='flex flex-col align-center items-start'>
          <p className='offer-text'>Sale up to 70% off</p>
          <div className='mt-10 mb-7'>
            <h1 className='mb-0 pb-0'>New Collection For Fall</h1>
            <p className='home-slogan'>Discover all the new arrivals of ready-to-wear collection.</p>
          </div>
          <div>
            <button onClick={navigateToShop} className='shop-now-btn'>SHOP NOW</button>
          </div>
        </div>
      </div>


      <div className="photo-container">
        <img src={photo} alt="" />
      </div>

    </div>
  );
};

export default Home;