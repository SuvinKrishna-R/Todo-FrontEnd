import React from 'react'
import { Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'


function LandingPage() {
  return (
    <div>
    {/* <Row style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
        <h1>TICK TICK</h1>
        <h4>Todo List</h4>
    </Row> */}

        <Container style={{height:'100%',width:'100%'}}>
            <p style={{marginTop:'200px',fontFamily:'Rammetto One',fontSize:'100px'}} className='text-white'>TODOIST</p>
            <h4 style={{fontFamily: 'Kaushan Script'}} className='text-white'>IN-PERSON & VIRTUAL EVENT</h4>

            <Link to={'/add'}>
            <button type='button' className='btn btn-primary w-50'><b>Start</b></button>
            </Link>
        
        
        </Container>

    </div>
  )
}

export default LandingPage