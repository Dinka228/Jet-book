import React, {useContext, useState} from 'react';
import {useHistory} from "react-router-dom";
import {
    MDBBtn, MDBInput,
    MDBModal,
    MDBModalBody,
    MDBModalContent,
    MDBModalDialog,
    MDBModalFooter,
    MDBModalHeader,
    MDBModalTitle, MDBRow
} from "mdb-react-ui-kit";
import {Context} from "../../../index";

const Random = ({show,onHide}) => {
    const {user} = useContext(Context)
    const {book} = useContext(Context)
    const history = useHistory()
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
                            <MDBModalTitle>Підтримка</MDBModalTitle>
                        </MDBModalHeader>
                        <MDBModalBody>
                            {/*<MDBInput className='mt-1'*/}
                            {/*          placeholder="Опишіть вашу проблему..."*/}
                            {/*          >*/}

                            {/*</MDBInput>*/}
                            {/*    <MDBRow>*/}
                            {/*        <div>*/}
                            {/*            Пошук подібної проблеми та ії вирішення...*/}
                            {/*        </div>*/}
                            {/*    </MDBRow>*/}
                            <MDBRow>
                                <div>
                                    Нажаль система не змогла автоматично знайти вирішення данної
                                </div>
                            </MDBRow>
                        </MDBModalBody>
                        <MDBModalFooter>
                            <MDBBtn color="success">
                                Зв'язок с оператором
                            </MDBBtn>
                            {/*<MDBBtn color="secondary" onClick={()=>{*/}
                            {/*    // user.setSelectUser({})*/}
                            {/*    onHide()*/}
                            {/*    // user.setAdminPanel(true)*/}
                            {/*}}>*/}
                            {/*    Return to Menu*/}
                            {/*</MDBBtn>*/}
                            <MDBBtn color="secondary" onClick={()=>{
                                // user.setSelectUser({})
                                onHide()
                            }}>
                                Закрити
                            </MDBBtn>
                            {/*<MDBBtn onClick={()=>{*/}
                            {/*    onHide()*/}
                            {/*    history.push(REGISTRATION_ROUTE)*/}
                            {/*}*/}
                            {/*}>Create new user</MDBBtn>*/}
                        </MDBModalFooter>
                    </MDBModalContent>
                </MDBModalDialog>
            </MDBModal>
        </>
    );
};

export default Random;