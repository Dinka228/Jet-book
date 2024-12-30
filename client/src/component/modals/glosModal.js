import React, {useContext, useState} from 'react';
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
import {observer} from "mobx-react-lite";
import {Context} from "../../index";
import {createThemes, fetchTeacherThemes} from "../../http/themesAPI";
import {createGlossary, fetchGlossary} from "../../http/glossaryAPI";

const GlosModal = observer(({show,onHide}) => {
    const {user} = useContext(Context)
    const {book} = useContext(Context)
    const [glosData,setGlosData] = useState({title:"",text:""})
    function addGlossary(){
        const Gloss={
            ...glosData,userId:user.currUser.id

        }
        const sendGlossary = async ()=>{
            const response = await createGlossary(Gloss)
            fetchGlossary(user.currUser.id).then(data=>book.setGlossary(data))
            console.log(response)
        }
        sendGlossary()
        onHide()
    }
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
                            <MDBModalTitle>Створення визначення</MDBModalTitle>
                        </MDBModalHeader>
                        <MDBModalBody>
                            <MDBInput className='mt-3' label='Назва визначення' id='form1' type='text'
                                      value = {glosData.title}
                                      onChange={(e)=>setGlosData({...glosData,title:e.target.value})}>

                            </MDBInput>
                            <MDBInput className='mt-3' label='Опис' id='form1' type='text'
                                      value = {glosData.text}
                                      onChange={(e)=>setGlosData({...glosData,text:e.target.value})}>

                            </MDBInput>
                        </MDBModalBody>
                        <MDBModalFooter>
                            <MDBBtn color="secondary" onClick={()=>{
                                onHide()
                            }}>
                                Закрити
                            </MDBBtn>
                            <MDBBtn onClick={()=>addGlossary()}>Додати</MDBBtn>
                        </MDBModalFooter>
                    </MDBModalContent>
                </MDBModalDialog>
            </MDBModal>
        </>
    );
});

export default GlosModal;