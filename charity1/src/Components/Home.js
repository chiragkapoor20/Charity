import React from 'react'
import {BrowserRouter as Routes,Route,Router} from "react-router-dom"
import { Link } from 'react-router-dom'
import './Home.css'
import photo from'./photo.jpg'


export default function Home() {
  return (
    <div>
       
	<div class="hero">
		<nav>
			<img  class="logo"/>
			<ul>
				<li><a href="#">HOME</a></li>
                <Link to='/about'><li><a>ABOUT</a></li></Link>
				<Link to='/contact'><li><a >CONTACT ME</a></li></Link>
			   <Link to='/login'><li><a>Admin</a></li></Link>

				
			</ul>
		</nav>

		<div class="detel">
			<h1>
DISABILITY, DON’T<br/>
LET PEOPLE DIMINISH<br/>
YOUR ABILITY</h1>
		</div>
		


		

		<img src={photo} className='images'/>
		




</div>



    </div>
  )
}
