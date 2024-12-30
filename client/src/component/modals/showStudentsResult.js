import React, {useContext, useState} from 'react';
import {
    MDBBtn, MDBCol, MDBListGroup, MDBListGroupItem,
    MDBModal,
    MDBModalBody,
    MDBModalContent,
    MDBModalDialog,
    MDBModalFooter,
    MDBModalHeader,
    MDBModalTitle
} from "mdb-react-ui-kit";
import {Context} from "../../index";
import {fetchChapter} from "../../http/chapterAPI";
import {BOOK_ROUTE} from "../../utils/consts";
import {fetchChapterContent} from "../../http/chapterContentAPI";
import {Badge} from "react-bootstrap";
import Form from "react-bootstrap/Form";
import {observer} from "mobx-react-lite";

const ShowStudentsResult = observer(({show,onHide}) => {
    const {book} = useContext(Context)
    const {user} = useContext(Context)
    const {test} = useContext(Context)
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
                            <MDBModalTitle></MDBModalTitle>
                        </MDBModalHeader>
                        <MDBModalBody >
                            <MDBCol md={6} className="d-flex justify-content-center align-items-center">
                                <Form.Control
                                    className='mt-1'
                                    placeholder="Пошук"
                                    onChange={e=>{
                                        setSearchCheck(e.target.value)
                                    }}
                                />
                            </MDBCol>
                            <MDBListGroup>
                            {
                                test.resultStudentsForTeacher.filter(resultFilter=>{
                                    if (searchCheck !== "") {
                                        if (resultFilter.fullName.startsWith(searchCheck)){
                                            return resultFilter
                                        }
                                    }else{
                                        return resultFilter
                                    }
                                }).map(result=><MDBListGroupItem className='d-flex justify-content-between align-items-start mt-4'
                                                                                            href='#'
                                                                                            tag='button'
                                                                                            action
                                                                                            active
                                                                                            aria-current='true'
                                                                                            type='button'

                                >
                                    <div className='ms-2 me-auto'>
                                        <div className='fw-bold'>{result.fullName}</div>
                                    </div>
                                    <div className='me-2 d-flex flex-column'>
                                        <div className='d-flex'>
                                            <Badge className='m-auto'>{result.grade}</Badge>
                                        </div>
                                    </div>


                                </MDBListGroupItem>)
                            }
                            </MDBListGroup>
                        </MDBModalBody>
                        <MDBModalFooter>
                            <MDBBtn color="secondary" onClick={()=>{
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
});

export default ShowStudentsResult;