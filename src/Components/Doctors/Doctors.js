import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import './Doctors.css';
import Doctor_card from './Doctor_Card/Doctor_card';
import NavBar from '../Home/NavBar/NavBar';
const Doctors = () => {
    const state=useParams().State;
    const[stateDoctors,setDoctors]=useState([])
    const doctors=[
       {
            Name:"Dr.Narayan",
            State:"Delhi",
            Speciality:["Neurological Disorders","Geriatric Rehab","Shoulder Injuries"],
            Image:"https://media.istockphoto.com/id/177373093/photo/indian-male-doctor.jpg?s=612x612&w=0&k=20&c=5FkfKdCYERkAg65cQtdqeO_D0JMv6vrEdPw3mX1Lkfg=",
            Price:789
       },
       { 
        Name:"Dr.Panchal",
        State:"Delhi",
        Speciality:["Chronic Low Back Pain","Vertigo","Knee Injuries"],
        Image:"https://t4.ftcdn.net/jpg/03/20/52/31/360_F_320523164_tx7Rdd7I2XDTvvKfz2oRuRpKOPE5z0ni.jpg",
        Price:897
       },

       {
        Name:"Dr.Rahul Shetty",
        State:"Delhi",
        Speciality:["Neurological Disorders","Geriatric Rehab","Shoulder Injuries"],
        Image:"https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",            
        Price:897
       },
       { 
        Name:"Dr.Arup_Sahu",
        State:"Aandhra Pradesh",
        Speciality:["Chronic Low Back Pain","Vertigo","Knee Injuries"],
        Image:"https://cdn.askapollo.com/live/images/doctors/general-medicine/dr-arup-sahu-general-medicine-in-kolkata.png",
        Price:560
       },

       {
        Name:"Dr.Kiran Reddy",
        State:"Aandhra Pradesh",
        Speciality:["Neurological Disorders","Geriatric Rehab","Shoulder Injuries"],
        Image:"https://cdn.askapollo.com/live/images/doctors/general-medicine/dr-aman-kumar-general-medicine-in-chennai.png",
        Price:1234             

       },

       { 
        Name:"Dr.BalaKrishna",
        State:"Tamil Nadu",
        Speciality:["Chronic Low Back Pain","Vertigo","Knee Injuries"],
        Image:"https://thumbs.dreamstime.com/b/portrait-indian-doctor-portrait-male-indian-doctor-serious-expression-crossed-arms-wearing-white-coat-having-open-137577527.jpg",
        Price:900
       },

       {
        Name:"Dr.Jagjith Reddy",
        State:"Karantaka",
        Speciality:["Neurological Disorders","Geriatric Rehab","Shoulder Injuries"],
        Image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOEiryDkEP-4VHP9gmeTSu215gDM7VdBe0H5fTHs6mb4T24-fnrJezpQEY7l7tKIdWeEs" ,             
        Price:1000
       },
       
       {
        Name:"Dr.Mohan Munniswamy",
        State:"Karantaka",
        Speciality:["Neurological Disorders","Geriatric Rehab","Shoulder Injuries"],
        Image:"https://www.gleneaglesglobalhospitals.com/docprofile/Dr-Srinivasa-Chary-Avancha.jpg" ,             
        Price:690
       },

       {
        Name:"Dr.Rohit Sharma",
        State:"Maharastra",
        Speciality:["Neurological Disorders","Geriatric Rehab","Shoulder Injuries"],
        Image:"https://cdn.siasat.com/wp-content/uploads/2023/04/Dr-Sudhir-Kumar.png",
        Price:5000          

       }
         

    ]

    useEffect(()=>{
        
       console.log(state,"effect");
       setDoctors(doctors.filter((i)=>
           i.State==state
       ))





    },[])

  return (
    <>
    <NavBar/>
    <div className='Doctor'>
      
      <div className='Heading_S1'>
      <h4>Doctors of {state} are:
</h4>      </div>
     
       <div className='Cards'>
       {stateDoctors.map((i)=>(<Doctor_card data={i}/>))}
       </div>
       
    </div>
    </>
    
  )
}

export default Doctors
