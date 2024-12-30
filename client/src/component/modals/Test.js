import React, {useContext, useEffect, useState} from 'react';
import {
    MDBBtn, MDBCardImage,
    MDBDropdown, MDBDropdownItem, MDBDropdownMenu, MDBDropdownToggle,
    MDBInput,
    MDBModal,
    MDBModalBody,
    MDBModalContent,
    MDBModalDialog, MDBModalFooter,
    MDBModalHeader,
    MDBModalTitle
} from "mdb-react-ui-kit";
import {Context} from "../../index";
import {fetchTask} from "../../http/taskAPI";
import {observer} from "mobx-react-lite";
import {fetchAnswer} from "../../http/answerAPI";
import {createTest, fetchTest} from "../../http/testAPI";
import {createResultStudent, fetchResultStudent, fetchResultTeacher} from "../../http/resultStudentAPI";
import bookImage from "../../page/864685.png";
import imageTest from "./imageForTest.png"

const Test = observer(({show,onHide,chapter,showGrade}) => {
    const {user} = useContext(Context)
    const {book} = useContext(Context)
    const {test} = useContext(Context)
    const [chooseInput,setChooseInput] = useState('')
    const [currAnswerId,setCurrAnswerId] = useState('')
    const [countTrueAnswer,setCountTrueAnswer] = useState(0)
    const [testData,setTestData] = useState({})
    function addResultStudent(){
        test.setGrade(countTrueAnswer)
        const newResultStudent={
            ...testData, userId:user.currUser.id,testId:test.test.id,creatorId:test.test.creatorId,grade:countTrueAnswer,fullName:user.currUser.fullName,chapterName:book.currChapter.name
        }
        const testing = async ()=>{
            const response = await createResultStudent(newResultStudent)
            console.log(response)
            fetchResultTeacher(user.currUser.id).then(data=>test.setResultStudentsForTeacher(data))
        }
        testing()
        setTestData({})
        setCountTrueAnswer(0)
        showGrade()
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
                            {/*<MDBModalTitle>{`Тест до розділу ${book.currChapter.name}`}</MDBModalTitle>*/}
                            <MDBModalTitle>{`Заліковий тест`}</MDBModalTitle>
                        </MDBModalHeader>
                        <MDBModalBody>
                            {/*<MDBCardImage src={imageTest} className='bookImageStyle'/>*/}
                            {/*<div>*/}
                            {/*    Яка модель представлена на рисунку?*/}
                            {/*</div>*/}
                            {/*<div>*/}
                            {/*            <div className='d-flex'>*/}
                            {/*                <input type="radio" id={'1'} name={'1'} />*/}
                            {/*                <label className='m-lg-2' style={{fontSize:25}} htmlFor={'1'} > Водоспадна </label>*/}
                            {/*            </div>*/}
                            {/*    <div className='d-flex'>*/}
                            {/*        <input type="radio" id={'1'} name={'1'} />*/}
                            {/*        <label className='m-lg-2' style={{fontSize:25}} htmlFor={'1'} > Спіральна </label>*/}
                            {/*    </div>*/}
                            {/*    <div className='d-flex'>*/}
                            {/*        <input type="radio" id={'1'} name={'1'} />*/}
                            {/*        <label className='m-lg-2' style={{fontSize:25}} htmlFor={'1'} >V-модель </label>*/}
                            {/*    </div>*/}
                            {/*    <div className='d-flex'>*/}
                            {/*        <input type="radio" id={'1'} name={'1'} />*/}
                            {/*        <label className='m-lg-2' style={{fontSize:25}} htmlFor={'1'} > Agile </label>*/}
                            {/*    </div>*/}

                            {/*</div>*/}
                            {
                                test.task.map(task=><div>
                                    {
                                        +test.countAnswer === +task.id ? <div>
                                            <div>
                                                {task.name}
                                            </div>
                                            <div>
                                                {
                                                    test.answer.map(answer=>
                                                        <div className='d-flex'>
                                                            <input type="radio" id={'1'} name={'1'} value={answer.text} onChange={(e)=> {
                                                                setChooseInput(e.target.value)
                                                                setCurrAnswerId(answer.id)
                                                            }
                                                            }/>
                                                            <label className='m-lg-2' style={{fontSize:25}} htmlFor={'1'} > {answer.text} </label>
                                                        </div>
                                                    )
                                                }
                                            </div>
                                        </div>
                                            :<div>
                                            </div>
                                    }

                                </div>)
                            }
                        </MDBModalBody>
                        <MDBModalFooter>
                            <MDBBtn onClick={()=>{
                                console.log(chooseInput)
                                test.answer.filter(answerFilter=>{
                                    if(+answerFilter.id === +currAnswerId){
                                        console.log(answerFilter.correct)
                                        if(answerFilter.correct === 'Yes'){
                                            setCountTrueAnswer(+countTrueAnswer + 1)
                                        }
                                    }
                                })
                                test.setCountAnswer(+test.countAnswer+1)
                                console.log(test.task.length)
                                if(+test.countAnswer > +test.task[test.task.length - 1].id){
                                    console.log(countTrueAnswer)
                                    addResultStudent()
                                    onHide()
                                }

                                fetchAnswer(test.countAnswer).then(data=>test.setAnswer(data))
                            }
                            }
                            >{'Наступне' }</MDBBtn>
                        </MDBModalFooter>
                    </MDBModalContent>
                </MDBModalDialog>
            </MDBModal>
        </>
    );
});

export default Test;