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

const ConfirmTheme = ({show,onHide}) => {
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
                            <MDBModalTitle>Затвердження теми</MDBModalTitle>
                        </MDBModalHeader>
                        <MDBModalBody >
                            Command1 обрала тему Theme23.
                        </MDBModalBody>
                        <MDBModalFooter>
                            <MDBBtn color="danger" onClick={()=>{
                                onHide()
                            }}>
                                Відмовлено
                            </MDBBtn>
                            <MDBBtn color="success" onClick={()=>{
                                onHide()
                            }}>
                                Затверджую
                            </MDBBtn>
                        </MDBModalFooter>
                    </MDBModalContent>
                </MDBModalDialog>
            </MDBModal>
        </>
    );
};

export default ConfirmTheme;