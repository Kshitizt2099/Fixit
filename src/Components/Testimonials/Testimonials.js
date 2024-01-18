import React from 'react'
import './Style.css'
import Review from './Review/Review'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
const Testimonials = () => {
  const review_data=[
    {
      image:"https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?q=80&w=1812&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name:"Twisam",
      Age:"30",
      Prof:"Developer",
      Desc:"Care and Effort they put on every individual is great"
    },
    {
      image:"https://images.unsplash.com/photo-1619380061814-58f03707f082?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name:"Rahul",
      Age:"26",
      Prof:"Architect",
      Desc:"Started seeing results in Quick Succession,plus behaviour of Staff is great."

    },
    {
      image:"https://images.unsplash.com/photo-1552642986-ccb41e7059e7?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name:"Shailesh",
      Age:"30",
      Prof:"Consultant",
      Desc:"Loved the personal touch of the Physio's, Doctors and care manager"

    },
    {
      image:"https://images.unsplash.com/photo-1616002851413-ebcc9611139d?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name:"Manoj",
      Age:"30",
      Prof:"Data Scientist",
      Desc:"I realized treatment could be done remotely, eliminating need for in-person visits."

    },
    {
      image:"https://images.unsplash.com/flagged/photo-1571367034809-ba7669187028?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name:"Bhavesh",
      Age:"32",
      Prof:"Architect",
      Desc:"Staff was kind, gracious, patient and highly acknowledgeable with her knowledge, care and support!"

    },
    
  ]

  var settings = {
    dots:true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };
  return (
    <div>
    <div className='Main_Test'>
       <div className='Top'>

       <div className='Heading'>
           <h1>Testimonials</h1>
        </div>
        <div className='Subheading'>
           <p>See what Others have to say about Us </p>
           <div className='S1'>
           <h3>Don't just take our word for it</h3>
           </div>
        </div>
        

       </div>
          <div>
           
           <Slider {...settings}>
             {review_data.map((i)=><Review data={i}/>)}
            </Slider>
             
          <div >
             
          </div>
         

          </div>
                  </div>
   </div>
  )
}

export default Testimonials
