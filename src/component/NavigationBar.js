import { Navbar, Nav } from 'react-bootstrap';
import cooking_icon from "../assets/cooking_icon.png"
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/NavigationBar.css'

const NavigationBar = () => {

    return (
        <Navbar className='nav-color' expand="lg">
            <Navbar.Brand as={Link} to="/" className='nav-brand'>
                <img src={cooking_icon} alt="cooking-icon" className='cooking-icon' />
            </Navbar.Brand>
            <Navbar.Toggle className='navbar-toggle' aria-controls="navbarNavDropdown" />
            <Navbar.Collapse id="navbarNavDropdown" className='collpased-bar'>
                <Nav className="mr-auto" >
                    <Nav.Link as={Link} to="/inventory" className='nav-item'>Inventory</Nav.Link>
                    <Nav.Link as={Link} to="/recipes" className='nav-item'>Recipes</Nav.Link>
                    <Nav.Link as={Link} to="/profile" className='nav-item'>Profile</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};
export default NavigationBar;