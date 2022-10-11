import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';

function Header() {
    return (



        <div className='header'>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand as={Link} to='/home' >Quiz Central</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-4">
                            <NavLink className={({ isActive }) =>
                                isActive ? "active" : undefined
                            } to='/home'>Home</NavLink>
                            <NavLink to='/statistics'>Statistics</NavLink>
                            <NavLink to='/blog'>Blog</NavLink>


                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>


    );
}

export default Header;