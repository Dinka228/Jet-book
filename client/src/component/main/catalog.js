import React, {useContext, useState} from 'react';
import {
    MDBCard,
    MDBCardBody,
    MDBCardText,
    MDBCardTitle,
    MDBDropdown, MDBDropdownToggle,
    MDBListGroup,
    MDBListGroupItem
} from "mdb-react-ui-kit";
import {Context} from "../../index";
import {useHistory} from "react-router-dom";
import {BOOK_ROUTE} from "../../utils/consts";
import {fetchChapterContent} from "../../http/chapterContentAPI";
import {observer} from "mobx-react-lite";
import {fetchChapter} from "../../http/chapterAPI";
import {Scrollbar} from "react-scrollbars-custom";
import {Badge} from "react-bootstrap";
import {deletePlan, fetchPlan} from "../../http/planAPI";
import {deleteCatalog, fetchCatalog} from "../../http/catalogAPI";

const Catalog = observer(() => {
    const history = useHistory()
    const {book} = useContext(Context)
    const {user} = useContext(Context)
    const [blockVisible,setBlockVisible] = useState(true)
    function deleteCatalogs(id){
        const deleting = async ()=>{
            const response = await deleteCatalog(id)

            fetchCatalog(user.currUser.id).then(data=>{
                data.sort(function (a,b){
                    if(+a.id > +b.id){
                        return 1
                    }
                    if(+a.id < +b.id){
                        return -1
                    }
                })
                book.setCatalog(data)})
        }

        deleting()
    }
    return (
        <MDBCard className='mt-4'>
            <MDBCardBody >
                <MDBCardTitle className='d-flex justify-content-center'>Особиста панель <MDBDropdown>
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
                        <Scrollbar style={{ width: '23rem', height: 250 }}>
                            <MDBListGroup light numbered style={{ minWidth: '22rem' }}>
                                {
                                    book.catalog.map(catalog=>

                                        <MDBListGroupItem className='d-flex justify-content-between align-items-start mt-2'
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
                                                        if(+themesFilter.id === +catalog.themesId){
                                                            book.setCurrBook(themesFilter)
                                                        }
                                                    })
                                                    fetchChapter(catalog.themesId).then(dataChapter => {
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
                                                            if(+chapterFilter.id === +catalog.chapterId){
                                                                book.setCurrChapter(chapterFilter)
                                                            }
                                                        })

                                                        console.log(book.currChapter)
                                                        history.push(BOOK_ROUTE)
                                                    })
                                                    fetchChapterContent(catalog.chapterId).then(data=>{
                                                        console.log(data)
                                                        book.setChapterContent(data)
                                                    })
                                                }
                                                } className='fw-bold'>

                                                    {catalog.themesName}</div>{catalog.chapterName}

                                            </div>
                                            <div className='d-flex'>
                                                <Badge onClick={()=>{
                                                    deleteCatalogs(catalog.id)
                                                }
                                                } style={{color:"red"}}>Х</Badge>
                                            </div>
                                        </MDBListGroupItem>

                                    )
                                }
                            </MDBListGroup>
                        </Scrollbar>
                    </MDBCardText> : <div></div>
                }



            </MDBCardBody>
        </MDBCard>
    );
});

export default Catalog;