import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Header() {
    return (


        <Navbar bg="light" variant="light" >
            <Container>
                <Navbar.Brand as={Link} to='/home' className='position-relative'>Quiz Central</Navbar.Brand>
                <Nav className="me-auto position-absolute end-0 pe-5">


                    <Nav.Link as={Link} to='/home'>Home</Nav.Link>
                    <Nav.Link as={Link} to='/statistics'>Statistics</Nav.Link>
                    <Nav.Link as={Link} to='/blog'>Blog</Nav.Link>
                </Nav>
            </Container>

        </Navbar>


    );
}

export default Header;