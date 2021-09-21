import React from 'react'
import { Col, Card } from 'react-bootstrap'

export default function Home () {
  return (
    <div className='text-center' >
      <div style={{ height: '30vh' }} >
        <h1 className='animated animatedFadeInUp fadeInUp' style={{ marginTop: '20vh', color: 'gray', textDecoration: 'underline' }} >The App That Helps Freelancers keep track of their project creations and stats.</h1>
        <p>Created and Designed by Ivan Ly.</p>
      </div>
      <div>
        <Col>
          <p style={{ color: 'black', fontSize: '24px' }} >Get started using Project Tracker! First, create an account to help you keep track of your projects that you have been working on or plan to create. Next, select “View All Projects” and from there you will be able to view, create, or edit your project. Additionally, on this screen you will be able to delete projects, and edit any of the projects created. Help yourself get back on track and have fun doing it with Project Tracker!</p>
        </Col>
        <Col md={4}>
          <Card className= 'card' style={{ color: '#fffff', borderRadius: '10rem' }}>
            <div className='main-text' >
              <h2 className='nameHeader' style={{ color: 'red' }}>Ivan Ly</h2>
              <p>College Station, Texas</p>
              <p>Fullstack Web Developer</p> <hr />
            </div>
            <div className='socials'>
              <a href="https://www.linkedin.com/in/ivan-ly/">LinkedIn</a>
              <br></br>
              <a href="https://github.com/Ivanly25">Github</a>
            </div>
          </Card>
        </Col>
      </div>
    </div>

  )
}
