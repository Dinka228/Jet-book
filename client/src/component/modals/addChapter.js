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
import {createThemes} from "../../http/themesAPI";
import {createChapter, fetchChapter} from "../../http/chapterAPI";

const AddChapter = observer(({show,onHide}) => {
    const {user} = useContext(Context)
    const {book} = useContext(Context)
    const [chapterData,setChapterData] = useState({name:""})
    function createChapters() {
        const Chapters = {
            ...chapterData,themesId:book.currBook.id

        }
        const sendChapter = async () => {
            const response = await createChapter(Chapters)
            fetchChapter(book.currBook.id).then(data=> {
                console.log(data)
                book.setChapter(data)
            })
            console.log(response)
        }
        sendChapter()
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
                            <MDBModalTitle>Створення розділу</MDBModalTitle>
                        </MDBModalHeader>
                        <MDBModalBody>
                            <MDBInput className='mt-3' label='Назва розділу' id='form1' type='text'
                                      value = {chapterData.name}
                                      onChange={(e)=>setChapterData({...chapterData,name:e.target.value})}>

                            </MDBInput>
                        </MDBModalBody>
                        <MDBModalFooter>
                            <MDBBtn color="secondary" onClick={()=>{
                                onHide()
                            }}>
                                Закрити
                            </MDBBtn>
                            <MDBBtn onClick={()=>createChapters()}>Створити</MDBBtn>
                        </MDBModalFooter>
                    </MDBModalContent>
                </MDBModalDialog>
            </MDBModal>
        </>
    );
});

export default AddChapter;