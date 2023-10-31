import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Modal } from 'react-bootstrap';



function View() {
  const { id } = useParams()
  // const {allRestaurants,loading,error}=useSelector((state)=>state.resturantSlice)
  const allResturants = useSelector((state) => state.restutantSlice.allRestaurant)


  const [restaurant, setRestaurant] = useState({})
  console.log(allResturants);
  useEffect(() => {
    setRestaurant(allResturants.find(item => item.id == id))
  }, [])
  

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div className='d-flex  w-100 flex-wrap mt-3'>
        <Card style={{ width: "25rem", height: "100%" }}>
          <Card.Img className='rounded p-2' src={restaurant?.photograph} />
        </Card>

        <Card className='ms-3' style={{ width: "40rem", height: "100%", backgroundColor: "black", color: "white" }}>
          <Card.Body>
            <Card.Title>{restaurant?.name}</Card.Title>
            <Card.Text>
              <p>{restaurant?.neighborhood}</p>
              <p>Cuisine :{restaurant?.cuisine_type}</p>
              <p>Address :{restaurant?.address}</p>
            </Card.Text>
          </Card.Body>
         <div className='mt-3 btn-primary rounded'>
            <Button  onClick={handleShow} variant="primary" size="lg" active>
              Operating Hours
            </Button>{' '}
         </div>
         {/* <div className='mt-3 btn-primary rounded'>
            <Button  variant="primary" size="lg" active>
        Click here to view the Reviews
            </Button>{' '}
         </div> */}
        </Card>


        <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title> Operating Hours</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <p>Operating Hourse</p>
       
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>Understood</Button>
        </Modal.Footer>
      </Modal>

      </div>
    </>
  )
}

export default View