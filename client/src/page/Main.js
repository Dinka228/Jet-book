import React, {useContext} from 'react';
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBIcon,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBBtn,
    MDBDropdown,
    MDBDropdownToggle,
    MDBDropdownMenu,
    MDBDropdownItem,
    MDBCollapse, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage,
} from 'mdb-react-ui-kit';
import Form from 'react-bootstrap/Form';
import {Context} from "../index";
import {Card} from "react-bootstrap";
import './EditorStyle.css'
import bookImage from './864685.png'

const Main = () => {
    const {book} = useContext(Context)
    return (
            <section className="vh-100" style={{ backgroundColor: "#eee" }}>
            <MDBContainer className="py-5 h-100">
                <MDBRow className="d-flex ">
                    <MDBCol md={4} className="d-flex ">
                        <MDBRow>
                            <MDBCol>
                                <MDBCard>
                                    <MDBCardBody>
                                        <MDBCardTitle className='d-flex justify-content-center'>Today plan</MDBCardTitle>
                                        <MDBCardText>
                                        </MDBCardText>
                                    </MDBCardBody>
                                </MDBCard>
                                <MDBCard className='mt-4'>
                                    <MDBCardBody>
                                        <MDBCardTitle className='d-flex justify-content-center'>Catalog</MDBCardTitle>
                                        <MDBCardText>
                                        </MDBCardText>
                                        <MDBRow>
                                            <MDBCol md={2}>
                                            </MDBCol>
                                            <MDBCol md={8}>
                                                <MDBBtn  className='d-flex justify-content-center' href='#'>Add item to Catalog</MDBBtn>
                                            </MDBCol>
                                            <MDBCol md={2}>
                                            </MDBCol>
                                        </MDBRow>

                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                        </MDBRow>

                    </MDBCol>
                    <MDBCol md={8}>
                        <MDBRow>
                            <MDBCol md={3} className="d-flex">
                                <div>
                                    <Form.Select className=''>
                                        <option>Select subject</option>
                                    </Form.Select>
                                </div>


                            </MDBCol>
                            <MDBCol md={3} className="d-flex">

                            </MDBCol>
                            <MDBCol md={3} className="d-flex">

                            </MDBCol>
                            <MDBCol md={3} className="d-flex">
                                <div>
                                    <Form.Select className=''>
                                        <option>Select teacher</option>
                                    </Form.Select>
                                </div>


                            </MDBCol>
                        </MDBRow>
                        <MDBRow>
                                {book.themes.map(books=>
                                    <MDBCol md={3}>
                                        <MDBCard className=" mt-4" style={{border: '1px solid black'}}>
                                            <MDBRow className='d-flex flex-column justify-content-center align-items-center'>
                                                <MDBCol  className='d-flex justify-content-center align-items-center'>
                                                    {books.creator}
                                                </MDBCol>
                                                <MDBCol md={6} className='d-flex justify-content-center align-items-center'>
                                                    <MDBCardImage src={bookImage} className='bookImageStyle'/>
                                                </MDBCol>
                                                <MDBCol  className='d-flex justify-content-center align-items-center'>
                                                    {books.name}
                                                </MDBCol>
                                            </MDBRow>

                                        </MDBCard>

                                    </MDBCol>
                                )}
                        </MDBRow>
                    </MDBCol>

                </MDBRow>
            </MDBContainer>
            </section>
    );
};

export default Main;