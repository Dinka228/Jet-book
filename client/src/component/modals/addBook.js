import React, {useContext, useState} from 'react';
import {observer} from "mobx-react-lite";
import {
    MDBBtn, MDBDropdown, MDBDropdownItem, MDBDropdownMenu, MDBDropdownToggle,
    MDBInput,
    MDBModal,
    MDBModalBody,
    MDBModalContent,
    MDBModalDialog, MDBModalFooter,
    MDBModalHeader,
    MDBModalTitle
} from "mdb-react-ui-kit";
import {createThemes, fetchOneThemes, fetchTeacherThemes} from "../../http/themesAPI";
import {Context} from "../../index";
import {login} from "../../http/userAPI";
import {MAIN_ROUTE} from "../../utils/consts";

const AddBook = observer(({show,onHide}) => {
    const {user} = useContext(Context)
    const {book} = useContext(Context)
    const [selectSubj,setSelectSubj] = useState('')
    const [selectSubjId,setSelectSubjId] = useState('')
    const [bookData,setBookData] = useState({name:""})
    function createBooks(){
        console.log(user.currUser)
        const Books={
            ...bookData,subjId:selectSubjId,creatorName:user.currUser.fullName,creatorId:user.currUser.id

        }
        const sendBook = async ()=>{
            const response = await createThemes(Books)
            fetchTeacherThemes(user.currUser.fullName).then(data=>book.setThemes(data))
            console.log(response)
        }
        sendBook()
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
                            <MDBModalTitle>Створення книги</MDBModalTitle>
                        </MDBModalHeader>
                        <MDBModalBody>
                            <MDBInput className='mt-3' label='Назва книги' id='form1' type='text'
                                      value = {bookData.name}
                                      onChange={(e)=>setBookData({...bookData,name:e.target.value})}>

                            </MDBInput>
                            <MDBDropdown className='mt-3'>
                                <MDBDropdownToggle color='link' outline>{selectSubj === '' ? 'Оберіть дисципліну' : selectSubj}</MDBDropdownToggle>
                                <MDBDropdownMenu>
                                    {
                                        book.subject.map(subjects=> <MDBDropdownItem link onClick={()=>{
                                            setSelectSubj(subjects.name)
                                            setSelectSubjId(subjects.id)
                                        }}>
                                            {subjects.name}
                                        </MDBDropdownItem>)
                                    }
                                </MDBDropdownMenu>

                            </MDBDropdown>
                        </MDBModalBody>
                        <MDBModalFooter>
                            <MDBBtn color="secondary" onClick={()=>{
                                onHide()
                            }}>
                                Закрити
                            </MDBBtn>
                            <MDBBtn onClick={()=>createBooks()}>Додати</MDBBtn>
                        </MDBModalFooter>
                    </MDBModalContent>
                </MDBModalDialog>
            </MDBModal>
        </>
    );
});

export default AddBook;