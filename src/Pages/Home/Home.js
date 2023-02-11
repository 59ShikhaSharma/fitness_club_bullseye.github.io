import React from 'react'
import './Home.css';
import { useEffect } from 'react';
import { useState } from 'react';


const handleSubmit = (event) => {
  alert("User Added Successfully")
  
};



const Home = () => {
  const [data, setData] = useState([]);
  useEffect(() => { localStorage. setItem('dataKey', JSON. stringify(data)); }, [data]);
  return (
    <>
    <form action=''>
    <div className='home'>
       <label htmlFor='username'>Username : </label>
       <input type="text" name="username" id="username"/>
    </div>
    <br></br>
    <div className='home'>
       <label htmlFor='email'>Email : </label>
       <input type="text" name="email" id="email"/>
    </div>
    <br></br>
    <div className='home'>
       <label htmlFor='phone number'>Phone Number : </label>
       <input type="text" name="phone number" id="phone number"/>
    </div>
    <br></br>
    <div className='home'>
       <label htmlFor='address'>Address : </label>
       <input type="text" name="paddress" id="address"/>
    </div>
      <br></br>
      <div className='btn'>
        <button onClick={handleSubmit}>Add Member</button> </div>
      
    
    </form>
    <br></br>
    <div className='btn'>
     <button >View Member List</button> 
     </div>
    </>
  )
}


export default Home
