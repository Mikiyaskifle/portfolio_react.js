import React from 'react';
import './homes.css'; // Make sure to import your CSS file correctly
import my_image from '../../Assets/image/mk.jpg';

const Home = () => {
  return (
    <div className='container'>
      <div className='myname'> 
        <h1> Mikiyas Kifle</h1>
        <h2>React Developer</h2>
        <p>
         I am Mikiyas kifle 3rd year software Engineering student , am passionalted web  and Java App Developer
        </p>
        <div className='butttons'>Hire Me</div>
      </div>
      <div className='mypicture'>
        <img className='mk' src={my_image} alt="Mikiya" />
      </div>
    </div>
  );
};

export default Home;