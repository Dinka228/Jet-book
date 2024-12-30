import React from 'react';
import {
    MDBBtn,
    MDBDropdown, MDBDropdownItem, MDBDropdownMenu, MDBDropdownToggle,
    MDBInput,
    MDBModal,
    MDBModalBody,
    MDBModalContent,
    MDBModalDialog, MDBModalFooter,
    MDBModalHeader,
    MDBModalTitle
} from "mdb-react-ui-kit";

const CreateChat = ({show,onHide}) => {
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
                            <MDBModalTitle>Створення чату</MDBModalTitle>
                        </MDBModalHeader>
                        <MDBModalBody>
                            <MDBDropdown className='mt-3'>
                                <MDBDropdownToggle color='link' outline>Оберіть дисципліну</MDBDropdownToggle>
                                <MDBDropdownMenu>
                                    <MDBDropdownItem link>

                                    </MDBDropdownItem>)
                                </MDBDropdownMenu>

                            </MDBDropdown>
                            <MDBDropdown className='mt-3'>
                                <MDBDropdownToggle color='link' outline>Оберіть тему</MDBDropdownToggle>
                                <MDBDropdownMenu>
                                    <MDBDropdownItem link>

                                    </MDBDropdownItem>)
                                </MDBDropdownMenu>

                            </MDBDropdown>
                            <MDBDropdown className='mt-3'>
                                <MDBDropdownToggle color='link' outline>Оберіть групу</MDBDropdownToggle>
                                <MDBDropdownMenu>
                                    <MDBDropdownItem link>

                                    </MDBDropdownItem>)
                                </MDBDropdownMenu>

                            </MDBDropdown>
                        </MDBModalBody>
                        <MDBModalFooter>
                            <MDBBtn color="secondary" onClick={()=>{
                                onHide()
                            }}>
                                Закрити
                            </MDBBtn>
                            <MDBBtn>Створити</MDBBtn>
                        </MDBModalFooter>
                    </MDBModalContent>
                </MDBModalDialog>
            </MDBModal>
        </>
    );
};

export default CreateChat;