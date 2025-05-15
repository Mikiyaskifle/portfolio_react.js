import React from 'react'
import './heading.css';
import home from '../../Assets/image/home.png'
import my_service from '../../Assets/image/my-business.png'
import price_plan from '../../Assets/image/portfolio.png'
import recomend from '../../Assets/image/feedback.png'
import history from '../../Assets/image/mortarboard.png'
import conntac from '../../Assets/image/subscription.png'
const  Heading = ()=> {
  return (
    <div className='allheader'>
       <div className='icons'>  <h2 > Home </h2></div>
       <div className='icons'>  <h2> My service </h2></div>
       {/* <div className='icons'>  <h2> Price plan </h2></div> */}
       <div className='icons'>  <h2> Recommendation </h2></div>
       <div className='icons'>  <h2> Education </h2></div>
       <div className='icons'>  <h2> Work History </h2></div>
       <div className='icons'>  <h2> contact info </h2></div>
      
    </div>
  )
}

export default Heading;
