import React from 'react';
import { Navbar, Container } from 'react-bootstrap';


const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        
        <Navbar.Brand href="#home">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRIms4FITWMAxdKq6oMVMA9uu4MZxsKxLDsA&s" width="50" height="50" alt=""/>
        </Navbar.Brand>
       
        <Navbar.Brand className='h1 mb-0 text-center'>Image Gallery</Navbar.Brand>

      </Container>
    </Navbar>
  );
};

export default Header;
