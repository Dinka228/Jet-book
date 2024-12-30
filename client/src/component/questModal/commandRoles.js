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

const CommandRoles = ({show,onHide}) => {
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
                            <MDBModalTitle>Оберіть ролі</MDBModalTitle>
                        </MDBModalHeader>
                        <MDBModalBody >
                            <div>
                                <MDBDropdown className='mt-3'>
                                    <MDBDropdownToggle color='link' outline>Роль</MDBDropdownToggle>
                                    <MDBDropdownMenu>
                                        <MDBDropdownItem link>
                                            Тестувальник
                                        </MDBDropdownItem>
                                        <MDBDropdownItem link>
                                            Дизайнер
                                        </MDBDropdownItem>
                                        <MDBDropdownItem link>
                                            Менеджер
                                        </MDBDropdownItem>
                                    </MDBDropdownMenu>

                                </MDBDropdown>
                            </div>
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

export default CommandRoles;