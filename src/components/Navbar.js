import { Navbar, Nav, NavDropdown, Dropdown } from "react-bootstrap";
import logo from '../assets/logo.png'
import {Link} from "react-router-dom";


const TopNavbar = () => {
  return (
    <Navbar bg="primary" expand="lg">
      <img src={logo} style={styles.logo}></img>
      <Navbar.Brand href="/">Fake Api Store</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Link className="nav-link" to="/">Home</Link>
          <Link className="nav-link" to="/cart">Cart</Link>
        </Nav>
      <Nav>
          <Nav.Link href="#deets">
            <Dropdown>
              <Dropdown.Toggle id="dropdown-basic">
                <img
                  style={styles.profileImg}
                  src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
                />
              </Dropdown.Toggle>

              <Dropdown.Menu style={styles.profileDropDownMenu}>
                <Dropdown.Item href="#/action-2">
                <Link className="nav-link" to="/profile">Profile</Link>
                  </Dropdown.Item>
                <Dropdown.Item href="#/action-3">Logout</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default TopNavbar;

const styles = {
  profileImg: {
    height: "30px",
    borderRadius: "50%",
  },
  logo: {
    height: "40px",
    width:"40px",
    borderRadius: "50%",
    marginRight:"20px"
  },
  profileDropDownMenu: {
    left: "-80px",
  },
};
