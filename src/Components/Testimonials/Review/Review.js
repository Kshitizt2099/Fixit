import React from 'react'
import './Review.css'
const Review = (props) => {
    const {image,name,Age,Prof,Desc}=props.data;
 return (
    <div>

        <div className='Card_cont'>
            <div className='image'>
                <img src={image} className='image_main' />
            </div>
           
            <div className='Description'>
                
            <div className='Upper'>
                <div className='Name'>
                     <p>{name}</p>
                     
                      
                 </div>
                 <div className='Details'>
                 <p>Age:{Age}, {Prof}</p>
                 </div>


                </div>
                
                <div className='Desc'>
                 <p> {Desc}</p>
                 </div>
                
            </div>
        </div>
      
    </div>
  )
}

export default Review
