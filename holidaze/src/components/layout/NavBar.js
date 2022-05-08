import { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import logo from "../../assets/img/logo.png";



function NavBar() {
  const [auth, setAuth] = useContext(AuthContext);

  const history = useHistory();

  function logout() {
    setAuth(null);
    history.push("/");
  }

  return (
    <>
      <Navbar bg="white" variant="light" expand="md">
        <Link to="/">
          <Navbar.Brand>
            <img src={logo} width="240" height="70" alt="Holidaze logo" />
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Nav.Link href="/accommodationsPage">Accommodations</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse className="justify-content-end">
          <Nav>
            {auth ? (
              <>
                <Nav.Link href="/admin">Admin</Nav.Link>
                <Nav.Link onClick={logout} href="/">
                  Log out
                </Nav.Link>
              </>
            ) : (
              <Nav.Link href="/login">Login</Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default NavBar;
