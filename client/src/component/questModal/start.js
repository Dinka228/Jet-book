import React from 'react';
import {
    MDBBtn,
    MDBModal,
    MDBModalBody,
    MDBModalContent,
    MDBModalDialog,
    MDBModalFooter,
    MDBModalHeader,
    MDBModalTitle
} from "mdb-react-ui-kit";

    const Start = ({show,onHide}) => {
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
                                <MDBModalTitle>Починаємо Квест</MDBModalTitle>
                            </MDBModalHeader>
                            <MDBModalBody >
                                Дисципліна "Основи програмної інженерії".
                            </MDBModalBody>
                            <MDBModalFooter>
                                <MDBBtn color="success" onClick={()=>{
                                    onHide()
                                }}>
                                    Далі
                                </MDBBtn>
                            </MDBModalFooter>
                        </MDBModalContent>
                    </MDBModalDialog>
                </MDBModal>
            </>
        );
    };

export default Start;