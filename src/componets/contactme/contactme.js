import React from 'react';
import './conact.css';

const Contactme = () => {
  return (
    <div className='contacts'>
      <h1>Contact Me</h1>
      <form>
        <div className='naming'>
          <input type="text" placeholder='Full Name' required />
          <input type="text" placeholder='Last Name' required />
        </div>
        <div className='em'>
          <input type='email' placeholder='Email' required />
        </div>
        <div className='mess'>
          <textarea placeholder='Your Message' required></textarea>
        </div>
        <button type='submit'>Send Message</button>
      </form>
    </div>
  );
}

export default Contactme;