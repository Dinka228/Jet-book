import React, {useContext} from 'react';
import {Context} from "../../index";
import {observer} from "mobx-react-lite";
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

const Notes = ({show,onHide}) => {
    const {book} = useContext(Context)
    const {user} = useContext(Context)
    const {test} = useContext(Context)
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
                            <MDBModalTitle>Мої нотатки</MDBModalTitle>
                        </MDBModalHeader>
                        <MDBModalBody>

                            <MDBRow>
                            <MDBInput className='mt-3' label='Текст' id='form1' type='text'
                                //value = {glosData.text}
                                //onChange={(e)=>setGlosData({...glosData,text:e.target.value})}
                            >

                            </MDBInput>
                            </MDBRow>
                            <Scrollbar style={{ height: 250 }} noScrollX={true}>
                                <MDBRow>
                                    {book.notes.map(note=><div className='mt-3' style={{fontSize:18,fontStyle:"italic"}}>{`${note.title} - ${note.text}`}</div>)}
                                </MDBRow>
                            </Scrollbar>
                        </MDBModalBody>
                        <MDBModalFooter>
                            <MDBBtn color="success" onClick={()=>{
                                // user.setSelectUser({})
                                onHide()
                            }}>
                                Додати
                            </MDBBtn>
                            <MDBBtn color="danger" onClick={()=>{
                                // user.setSelectUser({})
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

export default Notes;