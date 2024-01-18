import React, { useState } from 'react'
import './Form.css';
import { Link, useNavigate } from 'react-router-dom'
import NavBar from '../Home/NavBar/NavBar';

const Form = () => {
    const initial={
        State:"Delhi",
        physiotherapy:"No",
        age:2,
        Name:"",
        problem:"",
        phone:"",
        City:""


    }
    const [checked,setchecked]=useState("No");
    const navigate=useNavigate();
      const [data,setdata]=useState(initial);
      console.log(data.State,data.physiotherapy);

      const process=()=>{
        
         if(data.Name.length===0 || data.City.length===0|| data.phone.length===0||data.problem.length===0 )
         {
          console.log("here") 
          navigate(`/Error/please fill all fields/c_form`)
          return
         }
         if(data.age<1 && data.age>100)
         {
          navigate(`/Error/Wrong Age/c_form`)
          return
         }
         if(data.phone.length!==0)
         {
          for (const char of data.phone) {
            if ((char >= "a" && char <= "z") ||
                (char >= "A" && char <= "Z")) {
                  navigate(`/Error/No Alphabets in PhoneNumber/c_form`)
                  return;
              }
            }
            for (const char of data.problem) {
              if ((!(char >= "a" && char <= "z")&&
                  !(char >= "A" && char <= "Z"))) {
                    if(char!==" ")
                    {
                      navigate(`/Error/Wrong Problem description/c_form`)
                      return;

                    }
                   
                }
              }
          if(data.phone.length!==10)
          {
            navigate(`/Error/please enter right number/c_form`)
              return
    
          }
         }
         if(true){
          console.log(data);
          navigate(`/Doctors/${data.State}`)
          return
         }
        
      }
      return (
        <>
        <NavBar/>
    <div className= "Form_body">
      
     <div className="background">

<div className="shape"></div>

<div className="shape"></div>

<div className="shape"></div>

</div>
<div className='form'>

<label>Name</label>
<input type="text"  onChange={(e)=>{setdata({...data,Name:e.target.value})}}required/><br/><br/>
<label>Phone number</label>
<input type="text"  onChange={(e)=>{setdata({...data,phone:e.target.value})}}required/><br/><br/>
<label>Enter City</label>
<input type="text"  onChange={(e)=>{setdata({...data,City:e.target.value})}} required/><br/><br/>



<label>Enter Company</label>
<input type="text" name="Genre" id="Genre" required/><br/><br/>
<label>Enter Age</label>
<input type="number" name="price" id="price"onChange={(e)=>{setdata({...data,age:e.target.value})}} required/><br/><br/>

<label>Enter Chief complaints</label>
<input type="text  " name="Year" id="Year" onChange={(e)=>{setdata({...data,problem:e.target.value})}} required/><br/><br/>
 {data.age>=40?
<div>
<label>previous experience with physiotherapy</label>
<div className='Radiobtns'>
<div className='Radio'>
  <input type='radio' name="mk1" onChange={()=>{setchecked("Yes");setdata({...data,physiotherapy:"Yes"})}} checked={checked==="Yes"}/>
 <label className='rl'>Yes</label>
  </div>
  <div className='Radio'>
  <input type='radio' name="mk2" onChange={()=>{setchecked("No");setdata({...data,physiotherapy:"No"})}} checked={checked==="No"}/>
 <label className='rl'>No</label>
  </div>

</div>
</div>:""}
 
 
<label>Enter State</label>
<select onChange={(e)=>{setdata({...data,State:e.target.value})}}>
  <option value="Delhi">Delhi</option>
  <option value="Maharastra">Maharastra</option>
  <option value="Karantaka">Karantaka</option>
  <option value="Tamil Nadu">Tamil Nadu</option>
  <option value="Aandhra Pradesh">Aandhra Pradesh</option>
</select>


<button type="submit" className='button' onClick={process} >Search Doctors</button>
</div>


     
     </div>
    
        </>
        

  )
}

export default Form
