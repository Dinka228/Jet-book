import React, {useContext, useState} from 'react';
import {useHistory} from "react-router-dom";
import {observer} from "mobx-react-lite";
import {
    MDBCollapse,
    MDBContainer, MDBIcon,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBNavbarNav,
    MDBNavbarToggler
} from "mdb-react-ui-kit";
import {Button, Container, Nav, Navbar, NavLink} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Context} from "../index";
import {LOGIN_ROUTE, MAIN_ROUTE, DAY_ROUTE} from "../utils/consts";


const NavBar = observer(() => {
    const [showNavColor, setShowNavColor] = useState(false);
    const [showNavColorSecond, setShowNavColorSecond] = useState(false);
    const [showNavColorThird, setShowNavColorThird] = useState(false);
    const [showNavCentred, setShowNavCentred] = useState(false);
    const history = useHistory()
    const {user} = useContext(Context)
    const {projects} = useContext(Context)
    return (
        <Navbar bg="dark" expand="lg"><Container>
                    <Navbar.Brand  style={{cursor:"pointer", color:"white"}}
                    >Jet-Book</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto" >
                        </Nav>
                        <Nav className="ms-auto" onClick={()=>{
                            user.setIsAuth(false)
                            history.push(LOGIN_ROUTE)
                        }
                        }>
                            <Nav.Link style={{color:"white"}}
                            >
                                Exit
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container> : <div></div>

        </Navbar>
    );
})

export default NavBar;