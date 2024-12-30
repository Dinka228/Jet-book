import React, {useContext, useState} from 'react';
import {
    MDBBtn, MDBCard, MDBCardImage,
    MDBCol,
    MDBDropdown,
    MDBDropdownItem,
    MDBDropdownMenu,
    MDBDropdownToggle,
    MDBRow
} from "mdb-react-ui-kit";
import {fetchOneThemes, fetchTeacherThemes} from "../../http/themesAPI";
import Form from "react-bootstrap/Form";
import {fetchChapter} from "../../http/chapterAPI";
import bookImage from "../../page/864685.png";
import {Context} from "../../index";
import {observer} from "mobx-react-lite";
import {fetchThemesTest} from "../../http/testAPI";
import {fetchResultStudent} from "../../http/resultStudentAPI";
import Chat from "./chat";
import {BOOK_ROUTE} from "../../utils/consts";
import {useHistory} from "react-router-dom";

const BookList = observer(({setAddBookVisible,setShowPassToCredit,setShowCreateChat}) => {
    const {book} = useContext(Context)
    const {user} = useContext(Context)
    const {test} = useContext(Context)
    const history = useHistory()
    const [selectSubj,setSelectSubj] = useState('')
    const [selectTeacher,setSelectTeacher] = useState('')
    const [searchCheck,setSearchCheck]=useState("")
    const date = new Date()
    const [showShow, setShowShow] = useState(false);

    const toggleShow = () => setShowShow(!showShow);
    return (
        <div>
            {
                user.currUser.role === 'Teacher' ?
                    <div>
                        <MDBRow>
                            <MDBCol md={6} className="d-flex">
                                <MDBBtn color='success' onClick={()=>{setAddBookVisible()}}>
                                    Додати книгу
                                </MDBBtn>
                                {/*<MDBBtn color='success' onClick={()=>{setShowPassToCredit()}}>*/}
                                {/*    Залік*/}
                                {/*</MDBBtn>*/}
                                {/*<MDBBtn color='success' onClick={()=>{setShowCreateChat()}}>*/}
                                {/*    Створити чат*/}
                                {/*</MDBBtn>*/}
                            </MDBCol>
                        </MDBRow>
                        {/*<MDBRow>*/}
                        {/*    <MDBCol md={12} className="d-flex">*/}
                        {/*        <Chat></Chat>*/}
                        {/*    </MDBCol>*/}
                        {/*</MDBRow>*/}
                    </div>

                    :
                    <MDBRow>
                        <MDBCol md={3} className="d-flex">
                            <div>
                                <MDBDropdown>
                                    <MDBDropdownToggle color='light'>{selectSubj === '' ? 'Select subject' : selectSubj}</MDBDropdownToggle>
                                    <MDBDropdownMenu>
                                        {
                                            book.subject.map(subjects=> <MDBDropdownItem link onClick={()=>{
                                                fetchOneThemes(subjects.id).then(data=>book.setThemes(data))
                                                setSelectSubj(subjects.name)
                                            }}>
                                                {subjects.name}
                                            </MDBDropdownItem>)
                                        }
                                    </MDBDropdownMenu>

                                </MDBDropdown>

                            </div>


                        </MDBCol>
                        {/*<MDBCol md={6} className="d-flex">*/}
                        {/*    <Form.Control*/}
                        {/*        className='mt-1'*/}
                        {/*        placeholder="Пошук"*/}
                        {/*        onChange={e=>{*/}
                        {/*            setSearchCheck(e.target.value)*/}
                        {/*        }}*/}
                        {/*    />*/}
                        {/*</MDBCol>*/}
                        <MDBCol md={3} className="d-flex">
                            <div>
                                <MDBDropdown>
                                    <MDBDropdownToggle color='light'>{selectTeacher === '' ? 'Select teacher' : selectTeacher}</MDBDropdownToggle>
                                    <MDBDropdownMenu>
                                        { user.teachers ?
                                            user.teachers.map(teacher=> <MDBDropdownItem link onClick={()=>{
                                                fetchTeacherThemes(teacher.fullName).then(data=>book.setThemes(data))
                                                setSelectTeacher(teacher.fullName)
                                            }}>
                                                {teacher.fullName}
                                            </MDBDropdownItem>) : <div></div>
                                        }
                                    </MDBDropdownMenu>

                                </MDBDropdown>
                            </div>


                        </MDBCol>
                    </MDBRow>
            }

            <MDBRow>
                {book.themes.filter(theme =>{
                    if (searchCheck !== "") {
                        if (theme.name.startsWith(searchCheck) || theme.creatorName.startsWith(searchCheck)) {
                            return theme
                        }
                    }
                    else if(user.currUser.role === 'Teacher'){
                        if(theme.creatorName === user.currUser.fullName){
                            return theme
                        }
                    }else {
                        return theme
                    }
                }).map(books=>
                    <MDBCol md={3} onClick={()=>{
                        //history.push(BOOK_ROUTE)
                        book.setCurrBook(books)
                        console.log(book.currBook)
                        book.setSelectBook(true)
                        console.log(book.selectBook)
                        fetchThemesTest(books.id).then(data=>{
                            console.log(data)
                            test.setTest(data)
                        })
                        fetchResultStudent(user.currUser.id).then(data=>{
                            console.log(data)
                            test.setResultsCurrentStudent(data)
                        })
                        test.test.filter(testFilter=>{
                            test.resultsCurrentStudent.filter(resultFilter=>{
                                if(+testFilter.id !== +resultFilter.testId){
                                    if(+testFilter.date === +date.getDate()){
                                        console.log(resultFilter)
                                        return test.setCurrDeadline(resultFilter)
                                    }
                                }
                            })
                            if(test.currDeadLine){
                                return testFilter
                            }
                        })
                        fetchChapter(book.currBook.id).then(data=>{
                            data.sort(function (a,b){
                                if(+a.id > +b.id){
                                    return 1
                                }
                                if(+a.id < +b.id){
                                    return -1
                                }
                            })
                            console.log(data)
                            book.setChapter(data)})
                    }
                    }>
                        <MDBCard className=" mt-4" style={{border: '1px solid black',cursor:"pointer"}}>
                            <MDBRow className='d-flex flex-column justify-content-center align-items-center'>
                                <MDBCol  className='d-flex justify-content-center align-items-center'>
                                    {books.creatorName}
                                </MDBCol>
                                <MDBCol md={6} className='d-flex justify-content-center align-items-center'>
                                    <MDBCardImage src={bookImage} className='bookImageStyle'/>
                                </MDBCol>
                                <MDBCol  className='d-flex justify-content-center align-items-center'>
                                    {books.name}
                                </MDBCol>
                            </MDBRow>

                        </MDBCard>

                    </MDBCol>
                )}
            </MDBRow>
        </div>
    );
});

export default BookList;