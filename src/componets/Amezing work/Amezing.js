import React from 'react'
import './Amezing.css'
import ghi_image from '../../Assets/image/Ghiblie image.png';
const  Amezing = ()=> {
  return (
    <div className='amez'>

        <div className='components'>
            <h> ⭐⭐⭐⭐⭐</h>
            <h2>Great Quality!</h2>
            <p>To create a similar rating and testimonial layout as shown in the image, you can use a combination of HTML and CSS. 
                Below is an example of how you might implement this in a React component.</p>

                <div className='how'>
                     <img className='mkk' src={ghi_image} alt="Mikiya" />
                    <div className='loo'>
                        <h>james bond</h>
                        <p>Software engineer</p>
                    </div>
                </div>

        </div>
         <div className='components'>
             <h> ⭐⭐⭐⭐⭐</h>
            <h2>Great Quality!</h2>
             <p>To create a similar rating and testimonial layout as shown in the image, you can use a combination of HTML and CSS. 
                Below is an example of how you might implement this in a React component.</p>

                <div className='how'>
                     <img className='mkk' src={ghi_image} alt="Mikiya" />
                    <div className='loo'>
                        <h>james bond</h>
                        <p>testimonial layout as shown in the image,</p>
                    </div>
                </div>
            
        </div>
         <div className='components'>
             <h> ⭐⭐⭐⭐⭐</h>
            <h2>Great Quality!</h2>
             <p>To create a similar rating and testimonial layout as shown in the image, you can use a combination of HTML and CSS. 
                Below is an example of how you might implement this in a React component.</p>

                <div className='how'>
                     <img className='mkk' src={ghi_image} alt="Mikiya" />
                    <div className='loo'>
                        <h>james bond</h>
                        <p>Software engineer</p>
                    </div>
                </div>
            
        </div>
      
    </div>
  )
}

export default Amezing
