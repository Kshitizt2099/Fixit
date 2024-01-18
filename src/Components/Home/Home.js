import React from 'react'
import { Link } from 'react-router-dom'
import Slideshow from './SlideShow/SlideShow'
import './Home.css';
import Testimonials from '../Testimonials/Testimonials';
import NavBar from './NavBar/NavBar';
const Home = () => {
    const images = [
        'https://img.freepik.com/free-photo/handsome-smiling-medical-professional-examining-with-stethoscope-colored-background_662251-366.jpg?w=740&t=st=1705516360~exp=1705516960~hmac=c98769482c31a7b1dd7fc135475544558fa260b336100e9c151e6357e0346bb6',
                'https://img.freepik.com/free-photo/young-handsome-physician-medical-robe-with-stethoscope_1303-17814.jpg?w=1060&t=st=1705516445~exp=1705517045~hmac=63e577b9434b77ffa7c390eb63482d70b7799130229febda65edbe5481e5f00f',
                'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        

      ];
  return (
    <div className='Main'>
             <NavBar/>
                <div className='Slides'>
                <Slideshow images={images}/>
                </div>

                <div className='Form_con'>
                
                <Link to="/c_form" style={{textDecoration: 'none',color:'white'}}><div className='Booking'>Book the Appointment</div></Link>
                <div className='Message'>
                  <h3>Take Your first Step towards Recovery</h3>
                </div>
                </div>


                <div>
                   <Testimonials/>


                </div>
                

                
      
    </div>
  )
}

export default Home
