import React ,{useState} from 'react'
import './Contact.css'
import { useNavigate } from 'react-router-dom'

export default function Login() {
    const [name,setName]=useState('');
    const [pass,setpass]=useState('');

    let history=useNavigate();

    const display=(e)=>{
        e.preventDefault();
        let n=name,p=pass;
        if(n=='chirag' && p=='chirag'){
            history('/Startup')
        }
        else{
            setName('');
            setpass('');
            alert('Your username and password is invalid');
        }
    }

    

  return (
    <div>
      <div className='contact-form'>
          <h1>Donate Money</h1>
          <div className='form'>
          <label>Name</label>
          <input type="text" placeholder='Enter your Full Name'value={name}  onChange={(e) => setName(e.target.value)} required></input>
        </div>
        <div className='form'>
          <label>password</label>
          <input type="email" placeholder='password' value={pass} onChange={(e) => setpass(e.target.value)} required></input>
        </div>
       
          <button className='button' onClick={display}>Admin</button>
        </div>
        
        </div>
 
  )
}


        

       
