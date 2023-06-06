import React, {useContext, useState} from 'react';
import {useHistory} from "react-router-dom";
import {observer} from "mobx-react-lite";
import {
    MDBBtn,
    MDBCollapse,
    MDBContainer, MDBDropdown, MDBDropdownItem, MDBDropdownMenu, MDBDropdownToggle, MDBIcon,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBNavbarNav,
    MDBNavbarToggler
} from "mdb-react-ui-kit";
import {Button, Container, Dropdown, Nav, Navbar, NavLink} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Context} from "../index";
import {LOGIN_ROUTE, MAIN_ROUTE, DAY_ROUTE} from "../utils/consts";
import DropdownItem from "react-bootstrap/DropdownItem";
import DropdownToggle from "react-bootstrap/DropdownToggle";



const NavBar = observer(() => {
    const [showNavColor, setShowNavColor] = useState(false);
    const [showNavColorSecond, setShowNavColorSecond] = useState(false);
    const [showNavColorThird, setShowNavColorThird] = useState(false);
    const [showNavCentred, setShowNavCentred] = useState(false);
    const history = useHistory()
    const {user} = useContext(Context)
    const {projects} = useContext(Context)
    const [showBasic, setShowBasic] = useState(false);

    return (
        <MDBNavbar expand='lg' light style={{backgroundColor:"grey"}}>
            <MDBContainer fluid>
                <MDBNavbarBrand className='m-auto'>JetBook</MDBNavbarBrand>
                    <MDBDropdown className='m-auto'>
                        <MDBDropdownToggle tag='a' className='nav-link' role='button'>
                            Select Role
                        </MDBDropdownToggle>
                        <MDBDropdownMenu>
                            <MDBDropdownItem link>Teacher</MDBDropdownItem>
                            <MDBDropdownItem link>Student</MDBDropdownItem>
                        </MDBDropdownMenu>
                    </MDBDropdown>
            </MDBContainer>
        </MDBNavbar>
    );
})

export default NavBar;