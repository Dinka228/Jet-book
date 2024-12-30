import React, {useContext, useEffect, useState} from 'react';
import {
    MDBContainer,
    MDBBtn,
    MDBDropdown,
    MDBDropdownToggle,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
} from 'mdb-react-ui-kit';
import Form from 'react-bootstrap/Form';
import {Context} from "../index";
import {Badge, Card} from "react-bootstrap";
import './EditorStyle.css'
import bookImage from './864685.png'
import {useHistory} from "react-router-dom";
import {BOOK_ROUTE, MAIN_ROUTE} from "../utils/consts";
import {observer} from "mobx-react-lite";
import {fetchMySubject, fetchSubject} from "../http/subjectAPI";
import {login} from "../http/userAPI";
import {createCatalog, fetchCatalog} from "../http/catalogAPI";
import {fetchOneThemes, fetchTeacherThemes, fetchThemes} from "../http/themesAPI";
import AddBook from "../component/modals/addBook";
import AddChapter from "../component/modals/addChapter";
import {fetchChapter} from "../http/chapterAPI";
import AddPlan from "../component/modals/addPlan";
import {fetchPlan} from "../http/planAPI";
import {createTest, fetchTest} from "../http/testAPI";
import AddTest from "../component/modals/addTest";
import Test from "../component/modals/Test";
import {fetchTask} from "../http/taskAPI";
import {fetchAnswer} from "../http/answerAPI";
import DeadLineModal from "../component/modals/messages/deadLineModal";
import TodayPlan from "../component/main/todayPlan";
import Catalog from "../component/main/catalog";
import ChapterList from "../component/main/chapterList";
import UpdateChapter from "../component/modals/update/updateChapter";
import UpdateBook from "../component/modals/update/updateBook";
import BookList from "../component/main/bookList";
import Glossary from "../component/main/glossary";
import CurrTest from "../component/main/currTest";
import ResultOfTest from "../component/modals/messages/resultOfTest";
import GlosModal from "../component/modals/glosModal";
import ShowStudentsResult from "../component/modals/showStudentsResult";
import ShowPassToCredit from "../component/modals/showPassToCredit";
import ShowPassToExam from "../component/modals/showPassToExam";
import CreateChat from "../component/modals/createChat";
import Start from "../component/questModal/start";
import StarterTest from "../component/questModal/starterTest";
import CreateCommandChat from "../component/questModal/createCommandChat";
import ResultTest from "../component/questModal/resultTest";
import ConfirmTheme from "../component/questModal/confirmTheme";
import SelectMethod from "../component/questModal/selectMethod";
import ConfirmMethod from "../component/questModal/confirmMethod";
import CommandRoles from "../component/questModal/commandRoles";
import ConfirmRole from "../component/questModal/confirmRole";
import SelectDeadLine from "../component/questModal/selectDeadLine";
import RoleTask from "../component/questModal/roleTask";
import FinalQuest from "../component/questModal/finalQuest";
import NoteData from "../component/modals/noteData";
import Notes from "../component/modals/notes";
import Random from "../component/modals/messages/random";

const Main = observer(() => {
    const history = useHistory()
    const {book} = useContext(Context)
    const {test} = useContext(Context)
    const {user} = useContext(Context)
    const [addBookVisible,setAddBookVisible] = useState(false)
    const [addChapterVisible,setAddChapterVisible] = useState(false)
    const [addNoteVisible,setAddNoteVisible] = useState(false)
    const [currNoteVisible,setCurrNoteVisible] = useState(false)
    const [addPlanVisible,setAddPlanVisible] = useState(false)
    const [addTestVisible,setAddTestVisible] = useState(false)
    const [addTestModalVisible,setAddTestModalVisible] = useState(false)
    const [updateChapterVisible,setUpdateChapterVisible] = useState(false)
    const [updateThemeVisible,setUpdateThemeVisible] = useState(false)
    const [glossaryVisible,setGlossaryVisible] = useState(false)
    const [resultStudentVisible,setResultStudentVisible] = useState(false)
    const [gradeVisible,setGradeVisible] = useState(false)
    const [selectChapter,setSelectChapter] = useState({})
    const [blockVisible,setBlockVisible] = useState(true)
    const [showPassToCreditVisible,setShowPassToCreditVisible] = useState(false)
    const [showPassToExamVisible,setShowPassToExamVisible] = useState(false)
    const [showCreateChat,setShowCreateChat] = useState(false)
    const [currTestId,setCurrTestId] = useState(0)
    useEffect(()=>{
        fetchThemes().then(data=>{
            data.sort(function (a,b){
                if(+a.id > +b.id){
                    return 1
                }
                if(+a.id < +b.id){
                    return -1
                }
            })
            book.setThemes(data)})
        console.log(user.currUser.id)
        fetchPlan().then(dataPlan=>{
            book.setPlan(dataPlan)})

        if(user.currUser.role === 'Student'){
            fetchMySubject(user.currUser.speciality).then(data=>{
                // console.log(data)
                book.setSubject(data)})
        }else if(user.currUser.role === 'Teacher'){
            // fetchTeacherThemes(user.currUser.fullName).then(data=>book.setThemes(data))
            fetchSubject().then(data=>{
                book.setSubject(data)})
        }

    },[])
    return (
            <section className="vh-100" style={{ backgroundColor: "#eee" }}>
            <MDBContainer className="py-5 h-100">
                <MDBRow className="d-flex ">
                    <MDBCol md={4} className="d-flex justify-content-center align-items-center">
                        <MDBRow className="d-flex justify-content-center align-items-center">
                            <MDBCol md={12}>
                                <MDBCard>
                                    <MDBCardBody className='d-flex justify-content-center flex-column'>
                                        <MDBCardTitle className='d-flex justify-content-center'>План <MDBDropdown>
                                            <MDBDropdownToggle className='d-flex justify-content-end' style={{fontSize:20}} color='light'
                                                               onClick={()=>{
                                                                   if(blockVisible){
                                                                       setBlockVisible(false)
                                                                   }else{
                                                                       setBlockVisible(true)
                                                                   }

                                                               }}
                                            >

                                            </MDBDropdownToggle>
                                        </MDBDropdown></MDBCardTitle>
                                        {
                                            blockVisible ? <MDBCardText className='d-flex justify-content-center align-items-center flex-column'>
                                                <TodayPlan setAddPlanVisible={()=>setAddPlanVisible(true)}/>
                                                {
                                                    user.currUser.role === 'Teacher' ? <MDBBtn className='d-flex justify-content-center align-items-center mt-3'
                                                                                               onClick={()=>setAddPlanVisible(true)}
                                                    >
                                                        Додати план
                                                    </MDBBtn> : <div></div>
                                                }
                                            </MDBCardText> : <div></div>
                                        }

                                    </MDBCardBody>
                                </MDBCard>
                                <Catalog/>
                                <CurrTest showStudentResult={()=>setResultStudentVisible(true)}/>
                            </MDBCol>
                        </MDBRow>

                    </MDBCol>
                    {
                        !book.selectGlos ? <MDBCol md={8}>
                            {book.selectBook ?
                                <MDBCol md={12}>
                                    <ChapterList setAddChapterVisible={()=>setAddChapterVisible(true)}

                                                 setAddNoteVisible={()=>setAddNoteVisible(true)}
                                                 setAddTestModalVisible={()=>setAddTestModalVisible(true)}
                                                 setAddTestVisible={()=>setAddTestVisible(true)}
                                                 setUpdateChapterVisible={()=>setUpdateChapterVisible(true)}
                                                 setUpdateThemeVisible={()=>setUpdateThemeVisible(true)}

                                    />
                                </MDBCol>
                                :
                                <MDBCol md={12}>
                                    <BookList setAddBookVisible={()=>setAddBookVisible(true)} setShowPassToCredit={()=>setShowPassToExamVisible(true)}
                                              setShowCreateChat = {()=>{setShowCreateChat(true)}}/>

                                </MDBCol>}
                        </MDBCol> : <MDBCol md={8}>
                            <Glossary addGlossary = {()=>setGlossaryVisible(true)}/>
                        </MDBCol>
                        }

                    <MDBCol md={3}></MDBCol>
                </MDBRow>
                <AddBook show={addBookVisible} onHide={()=>{setAddBookVisible(false)}}></AddBook>
                <Notes show={currNoteVisible} onHide={()=>{setCurrNoteVisible(false)}} ></Notes>
                <AddChapter show={addChapterVisible} onHide={()=>{setAddChapterVisible(false)}}></AddChapter>
                <NoteData show={addNoteVisible} onHide={()=>{setAddNoteVisible(false)}} setCurrNoteVisible={()=>setCurrNoteVisible(true)}/>
                {/*<Random show={addNoteVisible} onHide={()=>{setAddNoteVisible(false)}}/>*/}
                <AddPlan show={addPlanVisible} onHide={()=>{setAddPlanVisible(false)}}></AddPlan>
                <AddTest show={addTestVisible} onHide={()=>{setAddTestVisible(false)}} testId={currTestId}></AddTest>
                <Test show={addTestModalVisible} onHide={()=>{setAddTestModalVisible(false)}} chapter={selectChapter} showGrade={()=>setGradeVisible(true)}></Test>
                <UpdateChapter show={updateChapterVisible} onHide={()=>{setUpdateChapterVisible(false)}} chapterId={book.currChapterId}></UpdateChapter>
                <UpdateBook show={updateThemeVisible} onHide={()=>{setUpdateThemeVisible(false)}}></UpdateBook>
                <ResultOfTest show={gradeVisible} onHide={()=>{setGradeVisible(false)}}></ResultOfTest>
                <GlosModal show={glossaryVisible} onHide={()=>{setGlossaryVisible(false)}}></GlosModal>
                <ShowStudentsResult show={resultStudentVisible} onHide={()=>{setResultStudentVisible(false)}}></ShowStudentsResult>
                <ShowPassToCredit show={showPassToCreditVisible} onHide={()=>{setShowPassToCreditVisible(false)}} setTestVisible={()=>{setAddTestModalVisible(true)}}></ShowPassToCredit>
                {/*<ShowPassToExam show={showPassToExamVisible} onHide={()=>{setShowPassToExamVisible(false)}}></ShowPassToExam>*/}
                <CreateChat show={showCreateChat} onHide={()=>{setShowCreateChat(false)}}/>
                {/*<DeadLineModal show={true} onHide={()=>{setAddTestModalVisible(false)}} chapter={selectChapter}></DeadLineModal>*/}

            </MDBContainer>
            </section>
    );
});

export default Main;