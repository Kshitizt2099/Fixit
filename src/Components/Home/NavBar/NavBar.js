import React from 'react'
import './NavBar.css'
import { Link } from 'react-router-dom'
const NavBar = () => {
  return (
    <div className='NavBar'>
        <div className='Fix'>
        <img alt="Fix Health"  className='Logo' srcset="https://ik.imagekit.io/tcfp7i31d/logo_with_yp_black_urUeyjKwY.svg 640w, https://ik.imagekit.io/tcfp7i31d/logo_with_yp_black_urUeyjKwY.svg 750w, https://ik.imagekit.io/tcfp7i31d/logo_with_yp_black_urUeyjKwY.svg 828w, https://ik.imagekit.io/tcfp7i31d/logo_with_yp_black_urUeyjKwY.svg 1080w, https://ik.imagekit.io/tcfp7i31d/logo_with_yp_black_urUeyjKwY.svg 1200w, https://ik.imagekit.io/tcfp7i31d/logo_with_yp_black_urUeyjKwY.svg 1920w, https://ik.imagekit.io/tcfp7i31d/logo_with_yp_black_urUeyjKwY.svg 2048w, https://ik.imagekit.io/tcfp7i31d/logo_with_yp_black_urUeyjKwY.svg 3840w" src="https://ik.imagekit.io/tcfp7i31d/logo_with_yp_black_urUeyjKwY.svg"/>
 
        </div>

        <div className='Routes'>
            <div className='Route'>
            <Link  to="/" style={{textDecoration: 'none',color:'white'}}><p>Home</p></Link>

            </div>

            <div className='Route'>
            <Link to="/c_form" style={{textDecoration: 'none',color:'white'}}><p>Booking</p></Link>
            </div>
                    
        </div>
    </div>
  )
}

export default NavBar
