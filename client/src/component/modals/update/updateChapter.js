import React, {useContext, useState} from 'react';
import {
    MDBBtn,
    MDBInput,
    MDBModal,
    MDBModalBody,
    MDBModalContent,
    MDBModalDialog, MDBModalFooter,
    MDBModalHeader,
    MDBModalTitle
} from "mdb-react-ui-kit";
import {Context} from "../../../index";
import {createChapter, fetchChapter, updateChapter} from "../../../http/chapterAPI";

const UpdateChapter = ({show,onHide}) => {
    const {user} = useContext(Context)
    const {book} = useContext(Context)
    const [chapterData,setChapterData] = useState({name:""})
    function updateChapters() {
        const Chapters = {
            ...chapterData,chapterId:book.currChapter.id

        }
        const sendChapter = async () => {
            const response = await updateChapter(Chapters)
            fetchChapter(book.currBook.id).then(data=> {
                data.sort(function (a,b){
                    if(+a.id > +b.id){
                        return 1
                    }
                    if(+a.id < +b.id){
                        return -1
                    }
                })
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
                            <MDBModalTitle>Редагування розділу</MDBModalTitle>
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
                            <MDBBtn onClick={()=>updateChapters()}>Редагувати</MDBBtn>
                        </MDBModalFooter>
                    </MDBModalContent>
                </MDBModalDialog>
            </MDBModal>
        </>
    );
};

export default UpdateChapter;