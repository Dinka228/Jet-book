import React from 'react';
import {
    MDBBtn, MDBDropdown, MDBDropdownItem, MDBDropdownMenu, MDBDropdownToggle,
    MDBModal,
    MDBModalBody,
    MDBModalContent,
    MDBModalDialog,
    MDBModalFooter,
    MDBModalHeader,
    MDBModalTitle
} from "mdb-react-ui-kit";

const CreateCommandChat = ({show,onHide}) => {
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
                                <MDBDropdownToggle color='link' outline>Оберіть тему</MDBDropdownToggle>
                                <MDBDropdownMenu>
                                    <MDBDropdownItem link>

                                    </MDBDropdownItem>)
                                </MDBDropdownMenu>

                            </MDBDropdown>
                            <MDBDropdown className='mt-3'>
                                <MDBDropdownToggle color='link' outline>Оберіть Команду</MDBDropdownToggle>
                                <MDBDropdownMenu>
                                    <MDBDropdownItem link>

                                    </MDBDropdownItem>)
                                </MDBDropdownMenu>

                            </MDBDropdown>
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

export default CreateCommandChat;