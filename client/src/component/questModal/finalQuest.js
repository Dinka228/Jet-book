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

const FinalQuest = ({show,onHide}) => {
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
                            <MDBModalTitle>Готові до презентації</MDBModalTitle>
                        </MDBModalHeader>
                        <MDBModalBody >
                            Презентація проєкту у 11:30 03.01.2024.
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

export default FinalQuest;