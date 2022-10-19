import React ,{useState}from 'react'
import './Contact.css'
import { Link, useNavigate } from 'react-router-dom';
import Another from './Another';

export default function Contact() {

  const [name, setname] = useState('');
  const [team, setteam] = useState('');
  const [tnum, settnum] = useState('');

  let history = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    let a = name, b = team, c = tnum;
    Another.push({ a, b, c });
    console.log(Another);

    if(b=='admin' && a=='admin')
    {
      history('/startup');
    }
    else{
      setname('');
      setteam('');
      settnum('');
      alert('yor message has been recorded')
      history('/contact');
    }
    
  }

  return (
    <div >
        

        <div className='contact-form'>
          <h1>Donate Money</h1>
          <div className='form'>
          <label>Name</label>
          <input type="text" placeholder='Enter your Full Name'value={name}  onChange={(e) => setname(e.target.value)} required></input>
        </div>
        <div className='form'>
          <label>Email:</label>
          <input type="email" placeholder='Enter your Email' value={team} onChange={(e) => setteam(e.target.value)} required></input>
        </div>
        <div className='form'>
          <label>Rs.</label>
          <input type="number" placeholder='MOney to Donate' value={tnum} onChange={(e) => settnum(e.target.value)} required></input>
        </div>
        <div >
          <button className='button' onClick={handleSubmit}>Send</button>
        </div>
       
        
        </div>
    </div>
  )
}
