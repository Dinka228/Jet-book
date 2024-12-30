import React from 'react';
import {
    MDBBtn, MDBInput,
    MDBModal,
    MDBModalBody,
    MDBModalContent,
    MDBModalDialog,
    MDBModalFooter,
    MDBModalHeader,
    MDBModalTitle
} from "mdb-react-ui-kit";
import DatePicker from "react-datepicker";
import Form from "react-bootstrap/Form";

const SelectDeadLine = ({show,onHide}) => {
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
                            <MDBModalTitle>DeadLine</MDBModalTitle>
                        </MDBModalHeader>
                        <MDBModalBody >
                            <Form>
                                        <div className='d-flex '>
                                            Оберіть дату дедлайну
                                        </div>
                                        <MDBInput wrapperClass='mb-4' id='form9Example1' label='Оберіть дату'
                                        />
                            </Form>
                        </MDBModalBody>
                        <MDBModalFooter>
                            <MDBBtn color="success" onClick={()=>{
                                onHide()
                            }}>
                                Обрати
                            </MDBBtn>
                        </MDBModalFooter>
                    </MDBModalContent>
                </MDBModalDialog>
            </MDBModal>
        </>
    );
};

export default SelectDeadLine;