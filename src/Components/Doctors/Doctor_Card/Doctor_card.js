import React from 'react'
import './Style.css'
import { Link } from 'react-router-dom';
const Doctor_card = (props) => {
    const{data}=props;
  return (
    <div>
          <Link style={{textDecoration: 'none',color:'white'}} to={`/Success/${data.Name}/Start`}>
          <div className='Cont'>
      
      <div className='Card' >
      <div className='box'>
         <img src={data.Image}/>
    </div>
    <div className='bottom'>
      
      <div className='Detailsmk1'>
      <div className='Title'>
      {data.Name}
      </div>
      <div className='Info'>
      Speciality:{data.Speciality}
       <br/>
       <br/>
       <p>Price:Rs {data.Price}</p>
       
 
      </div>
      
      </div>
     
     
 
    </div>
      
     
     </div>
     </div>
 
          </Link>
         
    
    
    
    
    
    </div>
  )
}

export default Doctor_card
