import React from 'react'
import photo from './photo.jpg'
import "./About.css"
import b from './b.jpg'

export default function About() {
  return (
    <div class="section">
		<div class="container">
			<div class="content-section">
				<div class="title">
					<h1>About Us</h1>
				</div>
				<div class="content">
					<h3>Charity</h3>
					<p>Charity is the act of giving help to those in need of it. It is a humanitarian act. It involves giving money, goods or time and effort to those who need it. It is done without expecting something in return. Giving money or food to poor people is an example of charity. Poor, sick or injured people are generally considered the proper people to whom charity should be given.</p>
					<div class="button">
						<a href="">Read More</a>
					</div>
				</div>
				<div class="social">
					<a href="https://www.facebook.com/login/"><i class="fab fa-facebook-f"></i></a>
					<a href="https://twitter.com/login"><i class="fab fa-twitter"></i></a>
					<a href="https://www.instagram.com/accounts/login/"><i class="fab fa-instagram"></i></a>
				</div>
			</div>
			<div class="image-section">
				<img src={b} />
			</div>
		</div>
	</div>

  )
}
