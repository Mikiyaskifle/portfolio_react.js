import React from 'react'
import './services.css'
import home from '../../Assets/image/home.png'
import my_service from '../../Assets/image/my-business.png'
import price_plan from '../../Assets/image/react.png'
import recomend from '../../Assets/image/feedback.png'
import history from '../../Assets/image/mortarboard.png'
import conntac from '../../Assets/image/js.png'

const  Services =()=> {
  return (
    <div className='allcontainer'>
        <div className='suppercona'>
        <div className='contain'>
            <img   src={home} className='images' />
             <br/>
            <h>Web Development</h>
            <p>this is ethiop8ua becau</p>
        </div>
         <div className='contain'>
            <img   src={my_service} className='images' />
            <br/>
            <h>UI/UX Design</h>
            <p>this is ethiop8ua becau</p>

        </div>
         <div className='contain'>
            <img   src={price_plan} className='images' />
             <br/>
            <h>React.js Development</h>
            <p>this is ethiop8ua becau</p>
        </div>
        </div>

<div className='subcontain'>
         <div className='contains'>
            <img   src={recomend} className='images'/>
            <h>java Development</h>
            <p>this is ethiop8ua becau</p>
        </div>
         <div className='contains'>
            <img   src={history}  className='images'/>
            <h>c++</h>
            <p>this is ethiop8ua becau</p>
        </div>
         <div className='contains'>
            <img   src={conntac}  className='images'/>
            <h id='mkll'> Java Script </h>
            <p>this is ethiop8ua becau</p>
        </div>
 </div>
  </div>
  )
}

export default Services;
