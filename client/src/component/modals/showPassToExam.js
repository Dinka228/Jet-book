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

const ShowPassToExam = ({show,onHide}) => {
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
                            <MDBModalTitle>Ви виконали всі лабораторні роботи по дисципліні Основи програмної інженерії, заробивши 53 балів, отже іспит обов'язковий.
                                Він пройде о 12:00 02.01.2024.</MDBModalTitle>
                        </MDBModalHeader>
                        <MDBModalBody >

                        </MDBModalBody>
                        <MDBModalFooter>
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

export default ShowPassToExam;