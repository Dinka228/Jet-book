import React from 'react';
import {
    MDBBtn, MDBDropdown, MDBDropdownItem, MDBDropdownMenu, MDBDropdownToggle, MDBInput,
    MDBModal,
    MDBModalBody,
    MDBModalContent,
    MDBModalDialog,
    MDBModalFooter,
    MDBModalHeader,
    MDBModalTitle
} from "mdb-react-ui-kit";
import Form from "react-bootstrap/Form";

const RoleTask = ({show,onHide}) => {
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
                            <MDBModalTitle>Оберіть завдання для команди</MDBModalTitle>
                        </MDBModalHeader>
                        <MDBModalBody >
                            <MDBDropdown className='mt-3'>
                                <MDBDropdownToggle color='link' outline>Оберіть роль</MDBDropdownToggle>
                                <MDBDropdownMenu>
                                    <MDBDropdownItem link>
                                        Менеджер
                                    </MDBDropdownItem>
                                    <MDBDropdownItem link>
                                        Тестувальник
                                    </MDBDropdownItem>
                                    <MDBDropdownItem link>
                                        Програміст
                                    </MDBDropdownItem>
                                </MDBDropdownMenu>

                            </MDBDropdown>
                            <Form>
                                <MDBInput wrapperClass='mb-4' id='form9Example1' label='Напишіть завдання'
                                />
                            </Form>
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

export default RoleTask;