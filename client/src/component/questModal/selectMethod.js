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

const SelectMethod = ({show,onHide}) => {
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
                            <MDBModalTitle>Методологія</MDBModalTitle>
                        </MDBModalHeader>
                        <MDBModalBody>
                            <MDBDropdown className='mt-3'>
                                <MDBDropdownToggle color='link' outline>Оберіть методологію</MDBDropdownToggle>
                                <MDBDropdownMenu>
                                    <MDBDropdownItem link>
                                        Method1
                                    </MDBDropdownItem>
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

export default SelectMethod;