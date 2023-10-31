import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div style={{ width: '100%', height: '300px' }} className='d-flex flex-column justify-content-center align-item-center bg-info'>
      <div className="footer-div d-flex justify-content-evenly w-100 flex-wrap">
        <div className="website" style={{ width: "400px",color: "white"  }}>
          <h4>   <i class="fa-solid fa-mug-saucer fa-bounce"></i>{' '}
        Resturant</h4>
          <h6>Designed and built with all the love in the world by the Luminar team with the help of our contributors.</h6>
          <h6>Code licensed Luminar, docs CC BY 3.0.</h6>
          <p>Currently cc3.0</p>
        </div>
        <div className="links d-flex flex-column">
          <h4>Links</h4>
          <Link to={'/'} style={{ textDecoration: "none", color: "white" }}>Landing Page</Link>
          <Link to={'/home'} style={{ textDecoration: "none", color: "white" }}>Home</Link>
          <Link to={'/watch-history'} style={{ textDecoration: "none", color: "white" }}>Watch History</Link>
        </div>
        <div className="guides d-flex flex-column">
          <h4>Guides</h4>
          <Link to={'https://getbootstrap.com/'} style={{ textDecoration: "none", color: "white" }}>React</Link>
          <Link to={'https://getbootstrap.com/'} style={{ textDecoration: "none", color: "white" }}>React Boostrap</Link>
          <Link to={'https://getbootstrap.com/'} style={{ textDecoration: "none", color: "white" }}>Routing</Link>
        </div>
        <div className="contact">
          <h4>Contact Us</h4>
          <div className="sub d-flex ">
            <input type="text" className='form-control' placeholder='Enter your email ID' />
            <button className='btn btn-primary ms-3'>Subscribe</button>
          </div>
          <div className='icon fs-4 d-flex justify-content-evenly mt-3'>
            <Link to={'/'} style={{ textDecoration: "none", color: "white" }}><i className="fa-solid fa-envelope"></i></Link>
            <Link to={'/'} style={{ textDecoration: "none", color: "white" }}><i className="fa-brands fa-twitter"></i></Link>
            <Link to={'/'} style={{ textDecoration: "none", color: "white" }}><i className="fa-brands fa-linkedin"></i></Link>
            <Link to={'/'} style={{ textDecoration: "none", color: "white" }}><i class="fa-brands fa-instagram"></i></Link>
            <Link to={'/'} style={{ textDecoration: "none", color: "white" }}><i class="fa-brands fa-github"></i></Link>
            <Link to={'/'} style={{ textDecoration: "none", color: "white" }}><i class="fa-brands fa-facebook"></i></Link>
          </div>

        </div>
      </div>
      <p className='d-flex  justify-content-center '>Copyright @2023 Media Player.Build with React</p>
    </div>
  )
}

export default Footer