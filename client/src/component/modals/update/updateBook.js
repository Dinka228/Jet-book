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
import {fetchChapter, updateChapter} from "../../../http/chapterAPI";
import {Context} from "../../../index";
import {fetchThemes, updateThemes} from "../../../http/themesAPI";

const UpdateBook = ({show,onHide}) => {
    const {book} = useContext(Context)
    const [bookData,setBookData] = useState({name:""})
    function updateBooks() {
        const Books = {
            ...bookData,themesId:book.currBook.id

        }
        const sendBook = async () => {
            const response = await updateThemes(Books)
            fetchThemes().then(data=> {
                data.sort(function (a,b){
                    if(+a.id > +b.id){
                        return 1
                    }
                    if(+a.id < +b.id){
                        return -1
                    }
                })
                data.filter(filterData =>{
                    if(+filterData.id === +book.currBook.id){
                        book.setCurrBook(filterData)
                    }
                })
                console.log(data)
                book.setThemes(data)
            })
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
                            <MDBModalTitle>Редагування книги</MDBModalTitle>
                        </MDBModalHeader>
                        <MDBModalBody>
                            <MDBInput className='mt-3' label='Назва книги' id='form1' type='text'
                                      value = {bookData.name}
                                      onChange={(e)=>setBookData({...bookData,name:e.target.value})}>

                            </MDBInput>
                        </MDBModalBody>
                        <MDBModalFooter>
                            <MDBBtn color="secondary" onClick={()=>{
                                onHide()
                            }}>
                                Закрити
                            </MDBBtn>
                            <MDBBtn onClick={()=>updateBooks()}>Редагувати</MDBBtn>
                        </MDBModalFooter>
                    </MDBModalContent>
                </MDBModalDialog>
            </MDBModal>
        </>
    );
};

export default UpdateBook;