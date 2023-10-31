import React from 'react'
import { Navbar, Container } from 'react-bootstrap'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { searchrestaurant } from '../redux/restaurantSlice';

function Header() {
  const dispatch=useDispatch()
  return (
    <>

      <Navbar className="bg-info">
        <Container>
          <Navbar.Brand >
            <Link to={'/'} className="fs-4" style={{ textDecoration: "none", color: "white" }}>
            <i class="fa-solid fa-mug-saucer fa-bounce"></i>{' '}
              Restaurant
            </Link>
          </Navbar.Brand>
          <div className='d-flex ms-auto align-items-center'>
            <input onChange={(e)=>dispatch(searchrestaurant(e.target.value))} type="text" className='form-control' placeholder='Search restaurant' />
            <i className='fa-solid fa-search' style={{marginLeft:"30px"}}></i>
          </div>
        </Container>
      </Navbar>


    </>



  )
}

export default Header;