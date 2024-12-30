import React from 'react';
import {
    MDBBtn,
    MDBCol, MDBListGroup, MDBListGroupItem,
    MDBModal,
    MDBModalBody,
    MDBModalContent,
    MDBModalDialog, MDBModalFooter,
    MDBModalHeader,
    MDBModalTitle
} from "mdb-react-ui-kit";
import Form from "react-bootstrap/Form";
import {Badge} from "react-bootstrap";

const ShowPassToCredit = ({show,onHide,setTestVisible}) => {
    return (
        <>
            <MDBModal
                staticBackdrop
                tabIndex="-1"
                show={show}
                onHide={onHide}
            >
                <MDBModalDialog>
                    <MDBModalContent>
                        <MDBModalHeader>
                            <MDBModalTitle>Ви набрали прохідний бал по предмету Основи програмної інженерії: 78</MDBModalTitle>
                        </MDBModalHeader>
                        <MDBModalBody >
                            Ви можете підвищити свою оцінку, пройшовши заліковий тест, або згодитися с цією оцінкою.
                        </MDBModalBody>
                        <MDBModalFooter>
                            <MDBBtn color="secondary" onClick={()=>{
                                setTestVisible()
                                onHide()
                            }}>
                                Пройти Залік
                            </MDBBtn>
                            <MDBBtn color="success" onClick={()=>{
                                onHide()
                            }}>
                                Згодитися на оцінку
                            </MDBBtn>
                            <MDBBtn color="danger" onClick={()=>{
                                onHide()
                            }}>
                                Закрити
                            </MDBBtn>
                        </MDBModalFooter>
                    </MDBModalContent>
                </MDBModalDialog>
            </MDBModal>
        </>
    );
};

export default ShowPassToCredit;