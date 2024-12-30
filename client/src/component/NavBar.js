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
import {fetchGlossary} from "../http/glossaryAPI";
import Chat from "./main/chat";



const NavBar = observer(() => {
    const [showNavColor, setShowNavColor] = useState(false);
    const [showNavColorSecond, setShowNavColorSecond] = useState(false);
    const [showNavColorThird, setShowNavColorThird] = useState(false);
    const [showNavCentred, setShowNavCentred] = useState(false);
    const history = useHistory()
    const {user} = useContext(Context)
    const {book} = useContext(Context)
    const {projects} = useContext(Context)
    const [showBasic, setShowBasic] = useState(false);

    return (
        <MDBNavbar expand='lg' light style={{backgroundColor:"grey"}}>
            <MDBContainer fluid>
                <MDBNavbarBrand className='m-auto'
                                style={{cursor:"pointer"}}
                                onClick={()=>{
                    book.setSelectBook(false)
                    book.setSelectGlos(false)
                    history.push(MAIN_ROUTE)
                }
                }>JetBook</MDBNavbarBrand>
                {
                    user.currUser.role === 'Teacher' ? <MDBNavbarBrand className='m-auto' style={{cursor:"pointer"}} onClick={()=>{
                        fetchGlossary(user.currUser.id).then(data=>book.setGlossary(data))
                        book.setSelectGlos(true)
                    }
                    }>Глосарій</MDBNavbarBrand> : <div></div>
                }
                {
                    user.isAuth ? <div className='m-auto d-flex flex-row' >
                        <MDBNavbarBrand >{user.currUser.fullName}</MDBNavbarBrand>
                        <MDBNavbarBrand
                            style={{cursor:"pointer"}}
                            onClick={()=>{
                            book.setSelectBook(false)
                            book.setSelectGlos(false)
                            user.setIsAuth(false)
                            book.setAuthVisible(true)
                            history.push(LOGIN_ROUTE)
                        }
                        }>Вихід</MDBNavbarBrand>
                    </div> : <div></div>
                }

            </MDBContainer>
        </MDBNavbar>
    );
})

export default NavBar;