import React, {useContext, useState} from 'react';
import {Context} from "../../index";
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
import Scrollbar from "react-scrollbars-custom";
import NoteList from "./notesList";

const NoteData = ({show,onHide,setCurrNoteVisible}) => {
    const {user} = useContext(Context)
    const {book} = useContext(Context)
    const history = useHistory()
    const [searchCheck,setSearchCheck]=useState("")
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
                            <MDBModalTitle>Нотатки</MDBModalTitle>
                        </MDBModalHeader>
                        <MDBModalBody>
                            <MDBInput className='mt-1'
                                      placeholder="Пошук"
                                      onChange={e=>{
                                          setSearchCheck(e.target.value)
                                      }}>

                            </MDBInput>
                            <Scrollbar style={{ height: 250 }} noScrollX={true}>
                                <MDBRow>
                                    {
                                        user.users.filter(users=>{
                                            if(searchCheck === ""){
                                                return users
                                            }
                                            else{
                                                if(users.fullName.startsWith(searchCheck) || users.role.startsWith(searchCheck)){
                                                    return users
                                                }
                                            }
                                        }).map(users=>
                                            <NoteList className="mb-lg-2" key={users.id} users={users}/>
                                        )

                                    }
                                </MDBRow>
                            </Scrollbar>
                        </MDBModalBody>
                        <MDBModalFooter>
                            <MDBBtn color="secondary" onClick={()=>{
                                // user.setSelectUser({})
                                setCurrNoteVisible()
                                onHide()
                            }}>
                                Мої нотатки
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

export default NoteData;