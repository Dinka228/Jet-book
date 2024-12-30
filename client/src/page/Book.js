import React, {useContext, useEffect} from 'react';
import {
    MDBCol,
    MDBContainer,
    MDBDropdown, MDBDropdownItem, MDBDropdownMenu,
    MDBDropdownToggle,
    MDBListGroup,
    MDBListGroupItem,
    MDBRow
} from "mdb-react-ui-kit";
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import {useHistory} from "react-router-dom";
import {EDITOR_ROUTE} from "../utils/consts";
import {fetchChapterContent} from "../http/chapterContentAPI";

const Book = observer(() => {
    const {book} = useContext(Context)
    const {user} = useContext(Context)
    const {test} = useContext(Context)
    const history = useHistory()
    // console.log(book.chapterContent[0].description)
    useEffect(()=>{
        fetchChapterContent(book.currChapter.id).then(data=>book.setChapterContent(data))
    },[])
    return (
        <MDBContainer className="py-5 h-100">
            <MDBRow className="d-flex ">
                <div style={{fontSize:24,fontStyle:"italic"}} className='d-flex justify-content-center align-items-center'>
                    {
                        +book.chapter[0].id !== +book.currChapter.id ? <div className='me-4' style={{cursor:"pointer"}} onClick={()=>{
                            console.log('Last')
                            book.chapter.filter(filterChapter=>{
                                if(+filterChapter.id + 1 === +book.currChapter.id){
                                    book.setCurrChapter(filterChapter)
                                    fetchChapterContent(book.currChapter.id).then(data=>book.setChapterContent(data))
                                }
                            })
                        }
                        }>
                            {'<<<'}
                        </div> : <div></div>
                    }
                    {`${book.currBook.name}.${book.currChapter.name}`}
                    <MDBDropdown className='mx-2'>
                        <MDBDropdownToggle color='light'>

                        </MDBDropdownToggle>
                        <MDBDropdownMenu>
                            <MDBDropdownItem link onClick={()=>{
                                history.push(EDITOR_ROUTE)
                            }}>
                                Редагувати
                            </MDBDropdownItem>
                        </MDBDropdownMenu>
                    </MDBDropdown>
                    {
                        +book.chapter[+book.chapter.length-1].id !== +book.currChapter.id ?
                        <div className='mx-4' style={{cursor:"pointer"}} onClick={()=>{
                            console.log('Next')
                            book.chapter.filter(filterChapter=>{
                                if(+filterChapter.id - 1 === +book.currChapter.id){
                                    book.setCurrChapter(filterChapter)
                                    fetchChapterContent(book.currChapter.id).then(data=>book.setChapterContent(data))
                                }
                            })
                        }
                        }>
                            {'>>>'}
                        </div> : <div></div>
                    }

                </div>
            </MDBRow>
            <MDBRow>
                {
                    book.chapterContent.map(content=>( <div>
                        <div id='textarea' dangerouslySetInnerHTML={{ __html: content.description}}/>
                    </div>))
                }


            </MDBRow>
            
        </MDBContainer>
    );
});

export default Book;