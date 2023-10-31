import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Col, Row, Spinner } from 'react-bootstrap'
import ResetCard from '../components/ResetCard'
import restaurantSlice, { fetchRestaurant } from '../redux/restaurantSlice'



function Home() {
    const allResturants = useSelector((state) => state.restutantSlice.allRestaurant)
  
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchRestaurant())
    }, [])
    return (
        <>
            {/* <div className='d-flex justify-content-center align-items-center mt-5 w-100'>
                {
                    loading && <div><Spinner animation="border" variant="dark" />><span className='ms-2'>loading.....</span></div>
                }
            </div> */}
            <Row classname='mt-5'>
                {allResturants.length > 0 ? allResturants.map(restaurant => (
                    <Col classname="px-5 py-3" sm={12} md={6} lg={4} xl={3}>
                        <ResetCard restaurant={restaurant} />
                    </Col>
                )) : <div className='fw-bolder d-flex justify-content-center align-items-center text-danger mt-2 w-100'>No restaurants are available </div>}

            </Row>
        </>
    )
}

export default Home