import React, {useContext, useEffect, useState} from 'react';
import {
    MDBCard,
    MDBCardBody,
    MDBCardText,
    MDBCardTitle, MDBDropdown,
    MDBDropdownToggle,
    MDBListGroup,
    MDBListGroupItem
} from "mdb-react-ui-kit";
import {observer} from "mobx-react-lite";
import {Context} from "../../index";
import {fetchResultStudent, fetchResultTeacher, fetchTestResult} from "../../http/resultStudentAPI";
import {fetchChapter} from "../../http/chapterAPI";
import {BOOK_ROUTE} from "../../utils/consts";
import {fetchChapterContent} from "../../http/chapterContentAPI";
import {fetchTeachersTest} from "../../http/testAPI";
import { Scrollbar } from 'react-scrollbars-custom';

const CurrTest = observer(({showStudentResult}) => {
    const {test} = useContext(Context)
    const {book} = useContext(Context)
    const {user} = useContext(Context)
    const [blockVisible,setBlockVisible] = useState(true)
    useEffect(()=>{
        if(user.currUser.role === 'Teacher'){
            console.log('HI')
            fetchTeachersTest(user.currUser.id).then(data=> {
                    console.log(data)
                    test.setTest(data)
                }
            )
        }
        else if(user.currUser.role === 'Student'){
            fetchResultStudent(user.currUser.id).then(data=>{test.setResultsCurrentStudent(data)})
        }

    },[])
    return (
        <MDBCard className='mt-4'>
            <MDBCardBody >
                <MDBCardTitle className='d-flex justify-content-center'>Результати тестів <MDBDropdown>
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
                    blockVisible ? <MDBCardText>
                        {
                            user.currUser.role === 'Teacher' ?  <Scrollbar style={{ width: '23rem', height: 250 }}>
                                <MDBListGroup light numbered style={{ minWidth: '22rem' }}>
                                    {
                                        test.test.map(testData=>

                                            <MDBListGroupItem className='d-flex justify-content-between align-items-start mt-2'
                                                              href='#'
                                                              tag='button'
                                                              action
                                                              noBorders
                                                              active
                                                              aria-current='true'
                                                              type='button'
                                                              onClick={()=>{
                                                                  fetchTestResult(testData.id).then(data=>{
                                                                      console.log(testData.id)
                                                                      console.log(data)
                                                                      test.setResultStudentsForTeacher(data)
                                                                      console.log(test.resultStudentsForTeacher)
                                                                  })
                                                                  showStudentResult()
                                                              }}
                                            >
                                                <div className='ms-2 me-auto'>
                                                    <div className='fw-bold'>{`Тест с розділу ${testData.chapterName}`}</div>
                                                </div>

                                            </MDBListGroupItem>

                                        )
                                        // test.resultStudentsForTeacher.map(resultStudentsForTeacher=>
                                        //
                                        //     <MDBListGroupItem className='d-flex justify-content-between align-items-start mt-2'
                                        //                       href='#'
                                        //                       tag='button'
                                        //                       action
                                        //                       noBorders
                                        //                       active
                                        //                       aria-current='true'
                                        //                       type='button'
                                        //     >
                                        //         <div className='ms-2 me-auto'>
                                        //             <div className='fw-bold'>{resultStudentsForTeacher.chapterName}</div>
                                        //         </div>
                                        //
                                        //     </MDBListGroupItem>
                                        //
                                        // )
                                    }
                                </MDBListGroup></Scrollbar> :<Scrollbar style={{ width: '23rem', height: 250 }}>
                                <MDBListGroup light style={{ minWidth: '22rem' }}>
                                    {
                                        test.resultsCurrentStudent.map(resultsCurrentStudent=>

                                            <MDBListGroupItem className='d-flex justify-content-between align-items-start mt-2'
                                                              href='#'
                                                              tag='button'
                                                              action
                                                              noBorders
                                                              active
                                                              aria-current='true'
                                                              type='button'
                                            >
                                                <div className='fw-bold d-flex mx-3'>{resultsCurrentStudent.chapterName}</div>
                                                <div className='fw-bold d-flex me-3'>Оцінка:{resultsCurrentStudent.grade}</div>
                                            </MDBListGroupItem>

                                        )
                                    }
                                </MDBListGroup>
                            </Scrollbar>

                        }
                    </MDBCardText> : <div></div>
                }



            </MDBCardBody>
        </MDBCard>
    );
});

export default CurrTest;