import React, {useContext, useState} from 'react';
import {
    MDBBreadcrumb, MDBBreadcrumbItem,
    MDBBtn, MDBCheckbox, MDBCol, MDBInput,
    MDBModal, MDBModalBody,
    MDBModalContent,
    MDBModalDialog, MDBModalFooter,
    MDBModalHeader,
    MDBModalTitle,
    MDBRow
} from "mdb-react-ui-kit";
import {observer} from "mobx-react-lite";
import {createTask, fetchTask} from "../../http/taskAPI";
import {Context} from "../../index";
import {createAnswer, fetchAnswer} from "../../http/answerAPI";
import {createTest, fetchTest} from "../../http/testAPI";
import DatePicker from "react-datepicker";
import Form from "react-bootstrap/Form";
import {CalendarContainer} from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import 'react-datepicker/dist/react-datepicker-cssmodules.css';

const AddTest = ({show,onHide,testId,chapterId}) => {
    const {test} = useContext(Context)
    const {book} = useContext(Context)
    const {user} = useContext(Context)

    const [info,setInfo]=useState([])
    const [testName,setTestName] = useState({name:""})
    const [taskName,setTaskName] = useState({name:""})
    const [createTests,setCreateTests] = useState(false)
    const [createTasks,setCreateTasks] = useState(false)
    const [currTaskId,setCurrTaskId] = useState(0)
    const [currCreatedTask,setCurrCreatedTask] = useState(0)
    const [startDate, setStartDate] = useState(new Date());
    const [day, setDay] = useState(0);
    const [testData,setTestData] = useState({})
    const MyContainer = ({ className, children }) => {
        return (
            <div style={{ padding: "16px", background: "#216ba5", color: "#fff" }}>
                <CalendarContainer className={className}>
                    <div style={{ background: "#f0f0f0" }}>
                       Виберіть крайній день сдачі
                    </div>
                    <div style={{ position: "relative" }}>{children}</div>
                </CalendarContainer>
            </div>
        );
    };
    const addInfo=()=>{
        setInfo([...info,{text:"",correct:'No',number:Date.now()}])
    }
    const removeInfo=(number)=>{
        setInfo(info.filter(i=>i.number !== number))
    }
    const changeInfo=(key,value,number)=>{
        setInfo(info.map(i=>i.number === number ? {...i,[key]:value}:i))
    }
    function addTest(){
        console.log(startDate.getDate())
        const newTest={
            ...testData, chapterId:test.currChapterId,creatorId:user.currUser.id,themesId:book.currBook.id,date:startDate.getDate(),chapterName:book.currChapter.name,themesName:book.currBook.name
        }
        const testing = async ()=>{
            const response = await createTest(newTest)
            console.log(response)
            fetchTest(test.currChapterId).then(data=>{
                console.log(data)
                test.setCurrTest(data)})
            console.log(test.test)
        }
        testing()
        setTestData({})
        setCreateTests(true)
    }
    const addTask=()=>{
        const newTask={
            ...taskName,testId:test.currTest.id
        }
        const tasking = async ()=>{
            const response = await createTask(newTask)
            setCurrCreatedTask(+currCreatedTask+1)
            console.log(response)
            test.setCurrTaskId(response.id)
            console.log(test.currTaskId)
        }
        tasking().then(()=>{
            console.log(currCreatedTask)
            if(+currCreatedTask===4){
                setInfo([])
                setCreateTests(false)
                setCurrCreatedTask(0)
                onHide()
            }
            info.map(i=>{
                const newAnswer={
                    ...i,taskId:test.currTaskId
                }
                const answering = async ()=>{
                    const response = await createAnswer(newAnswer)
                    console.log(response)
                }
                answering()
            })
            fetchAnswer(test.currTaskId).then(data=>{
                console.log(data)
                test.setAnswer(data)
            })
        })
        setTaskName({name:''})
    }

    return (
        <>
            <MDBModal
                staticBackdrop
                tabIndex="-1"
                show={show}
            >
                <MDBModalDialog>
                    <MDBModalContent>
                        <MDBModalHeader>
                            <MDBModalTitle>{!createTests ? `Створення тесту` : `Створення запитань`}</MDBModalTitle>
                        </MDBModalHeader>
                        <MDBModalBody>
                            <Form>
                                {
                                    !createTests ? <div className='d-flex mt-4 flex-column'>
                                        <div className='d-flex '>
                                            Оберіть дату дедлайну
                                        </div>
                                        <DatePicker
                                            selected={startDate}
                                            onChange={(date) => {

                                                setStartDate(date)
                                                console.log(startDate.getDate())
                                            }}
                                            calendarContainer={MyContainer}
                                        />
                                    </div> : <div>
                                        <div>
                                            {`${currCreatedTask}/5`}
                                        </div>
                                        <MDBInput wrapperClass='mb-4' id='form9Example1' label='Питання'
                                                  value={taskName.name}
                                                  onChange={e=>{
                                                      setTaskName({...taskName,name:e.target.value})
                                                  }
                                                  }
                                        />
                                        <MDBBtn onClick={()=>addInfo()}
                                        >
                                            Додати варіант відповіді
                                        </MDBBtn>
                                    </div>
                                }
                            </Form>
                            {
                                info.map(i=>
                                    <MDBRow className='mt-4' key={i.number}>
                                        <MDBCol md={4}>
                                            <MDBInput
                                                label='Введіть варіант відповіді'
                                                value={i.text}
                                                name={'input'}
                                                onChange={(e)=>{
                                                    changeInfo('text',e.target.value,i.number)
                                                }
                                                }
                                            />
                                        </MDBCol>
                                        <MDBCol md={4}>
                                            <MDBCheckbox label='Правильна відповідь'
                                                         onChange={()=>{
                                                             if(i.correct === 'No'){
                                                                 changeInfo('correct','Yes',i.number)
                                                             }else if(i.correct === 'Yes'){
                                                                 changeInfo('correct','No',i.number)
                                                             }

                                                             console.log(i)
                                                         }
                                                         }
                                            />
                                        </MDBCol>
                                        <MDBCol md={4}>
                                            <MDBBtn
                                                color={"danger"}
                                                onClick={()=>{
                                                    removeInfo(i.number)
                                                }
                                                }
                                            >Видалити</MDBBtn>
                                        </MDBCol>
                                    </MDBRow>
                                )
                            }
                        </MDBModalBody>
                        <MDBModalFooter>
                            <MDBBtn onClick={()=>{
                                setInfo([])
                                setCreateTests(false)
                                setCurrCreatedTask(0)
                                onHide()
                            }
                            }>
                                Закрити
                            </MDBBtn>
                            {
                                !createTests ?<MDBBtn onClick={()=>{
                                    addTest()
                                }
                                }>
                                    Створити
                                </MDBBtn> : <MDBBtn onClick={()=>{
                                    if(+currCreatedTask === 5){
                                        setCurrCreatedTask(0)
                                        setInfo([])
                                        setCreateTests(false)
                                        onHide()
                                    }else{
                                        addTask()
                                    }

                                }
                                }>
                                    Створити
                                </MDBBtn>
                            }

                        </MDBModalFooter>
                    </MDBModalContent>
                </MDBModalDialog>
            </MDBModal>
        </>
    );
};

export default AddTest;