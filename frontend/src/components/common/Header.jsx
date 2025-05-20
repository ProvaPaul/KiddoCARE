import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const Header = () => {
  return (
    <> 
     <header>
      <div className='container py-3'>
      <Navbar expand="lg" >
        <Navbar.Brand href="/" className='logo'> <span className='kiddo'>Kiddo</span>CARE</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/" className='nav-link'>Home</Nav.Link>
            <Nav.Link href="/about" className='nav-link'>About</Nav.Link>
            <Nav.Link href="#link" className='nav-link'>Services</Nav.Link>
            <Nav.Link href="#link" className='nav-link'>Activities</Nav.Link>
            <Nav.Link href="#link" className='nav-link'>Articles</Nav.Link> 
            <Nav.Link href="#link" className='nav-link'>Gallery</Nav.Link>
            <Nav.Link href="#link" className='nav-link'>Testimonials</Nav.Link>
            <Nav.Link href="#link"className='nav-link' >Contact Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
      </div>
    </header>
    </>
  

  )
}

export default Header