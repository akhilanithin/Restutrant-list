import React from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';


function ResetCard({restaurant}) {

    const id=restaurant.id
    

  return (
 <>
  
      <Card style={{width:"18rem"}} className='mb-1 mt-1'>
      <Card.Img style={{height:"150px"}} className='rounded p-2'variant="top" src={restaurant?.photograph} />
      <Card.Body>
        <Card.Title>{restaurant?.name}</Card.Title>
        <Card.Text>
        <p>Cuisine :{restaurant?.cuisine_type}</p>
         <p>Neighborhood :{restaurant?.neighborhood}</p>
        </Card.Text>
      </Card.Body>
      <Link to={`/view/${id}`} style={{ textDecoration: "none", color: "black"}}>View</Link>
    </Card>
 </>
  )
}

export default ResetCard