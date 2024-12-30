import React, {useContext, useState} from 'react';
import {MDBBtn, MDBListGroup, MDBListGroupItem} from "mdb-react-ui-kit";
import {Badge} from "react-bootstrap";
import {Context} from "../../index";
import {BOOK_ROUTE} from "../../utils/consts";
import {fetchChapterContent} from "../../http/chapterContentAPI";
import {useHistory} from "react-router-dom";
import {fetchChapter} from "../../http/chapterAPI";
import {Scrollbar} from "react-scrollbars-custom";
import {observer} from "mobx-react-lite";
import {deleteCatalog} from "../../http/catalogAPI";
import {deleteTheme, fetchThemes} from "../../http/themesAPI";
import {deletePlan, fetchPlan} from "../../http/planAPI";

const TodayPlan = observer(({setAddPlanVisible}) => {
    const history = useHistory()
    const {book} = useContext(Context)
    const {user} = useContext(Context)
    const [blockVisible,setBlockVisible] = useState(true)
    function deletePlans(id){
        const deleting = async ()=>{
            const response = await deletePlan(id)

            fetchPlan().then(data=>{
                data.sort(function (a,b){
                    if(+a.id > +b.id){
                        return 1
                    }
                    if(+a.id < +b.id){
                        return -1
                    }
                })
                book.setPlan(data)})
        }

        deleting()
    }
    return (
        <Scrollbar style={{ width: '23rem', height: 250 }}>
        <MDBListGroup light numbered style={{ minWidth: '22rem' }}>
            {book.plan.filter(planFilter=>{
                if(planFilter.creatorName === user.currUser.fullName){
                    return planFilter
                }
                else if(planFilter.speciality === user.currUser.speciality){
                    return planFilter
                }
                else if(planFilter.group === user.currUser.group){
                    return planFilter
                }
            }).map(plan=><MDBListGroupItem className='d-flex justify-content-between align-items-start mt-2'
                                           href='#'
                                           tag='button'
                                           action
                                           noBorders
                                           active
                                           aria-current='true'
                                           type='button'
            >
                <div className='ms-2 me-auto'>
                    <div onClick={()=>{
                        book.themes.filter(themesFilter=>{
                            if(+themesFilter.id === +plan.themesId){
                                book.setCurrBook(themesFilter)
                            }
                        })
                        fetchChapter(plan.themesId).then(dataChapter => {
                            dataChapter.sort(function (a,b){
                                if(+a.id > +b.id){
                                    return 1
                                }
                                if(+a.id < +b.id){
                                    return -1
                                }
                            })
                            book.setChapter(dataChapter)
                            console.log(dataChapter)
                            book.chapter.filter(chapterFilter=>{
                                if(+chapterFilter.id === +plan.chapterId){
                                    book.setCurrChapter(chapterFilter)
                                }
                            })

                            console.log(book.currChapter)
                            history.push(BOOK_ROUTE)
                        })
                        fetchChapterContent(plan.chapterId).then(data=>{
                            console.log(data)
                            book.setChapterContent(data)
                        })
                    }
                    } className='fw-bold'>
                        {plan.themesName}</div>{plan.chapterName}
                </div>
                <div className='me-2 d-flex flex-column'>
                    <div className='d-flex'>
                        <Badge className='m-auto'>{plan.creatorName}</Badge>
                        <Badge className='m-auto'>{plan.group}</Badge>
                        <Badge className='m-auto'>{plan.speciality}</Badge>
                    </div>
                </div>
                <div className='d-flex'>
                    <Badge className='m-auto' >{plan.views}</Badge>
                </div>
                {
                    user.currUser.role === 'Teacher' ? <div className='d-flex'>
                        <Badge onClick={()=>{
                            deletePlans(plan.id)
                        }
                        } style={{color:"red"}}>Х</Badge>
                    </div> : <div></div>
                }


            </MDBListGroupItem>)
            }
        </MDBListGroup>
        </Scrollbar>
    );
});

export default TodayPlan;