import React, {useContext, useState} from 'react';
import {
    MDBBtn,
    MDBDropdown, MDBDropdownItem,
    MDBDropdownMenu,
    MDBDropdownToggle,
    MDBListGroup,
    MDBListGroupItem
} from "mdb-react-ui-kit";
import {createTest, fetchTest} from "../../http/testAPI";
import {fetchTask} from "../../http/taskAPI";
import {fetchAnswer} from "../../http/answerAPI";
import {Context} from "../../index";
import {createCatalog, fetchCatalog} from "../../http/catalogAPI";
import {observer} from "mobx-react-lite";
import {deleteChapter, fetchChapter} from "../../http/chapterAPI";
import {deleteTheme, fetchThemes} from "../../http/themesAPI";
import {BOOK_ROUTE} from "../../utils/consts";
import {useHistory} from "react-router-dom";

const ChapterList = observer(({setAddChapterVisible,setAddTestVisible,setAddNoteVisible,setCurrNoteVisible,setAddTestModalVisible,setSelectChapterId,setUpdateChapterVisible,setUpdateThemeVisible}) => {
    const history= useHistory()
    const {book} = useContext(Context)
    const {user} = useContext(Context)
    const {test} = useContext(Context)
    const [catalogData,setCatalogData] = useState({})
    const [testData,setTestData] = useState({})
    const [selectChapter,setSelectChapter] = useState({})
    const [selectDropdown,setSelectDropdown] = useState(false)
    const [selectDropdownId,setSelectDropdownId] = useState(0)
    function deleteChapters(chapterId){
        const deleting = async ()=>{
            const response = await deleteChapter(chapterId)

            fetchChapter(book.currBook.id).then(data=>{
                data.sort(function (a,b){
                    if(+a.id > +b.id){
                        return 1
                    }
                    if(+a.id < +b.id){
                        return -1
                    }
                })
                book.setChapter(data)})
        }
        deleting()
    }
    function deleteThemes(){
        const deleting = async ()=>{
            const response = await deleteTheme(book.currBook.id)

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
        }

        deleting()
        book.setSelectBook(false)
    }
    function addItemToCatalog(chapterId,chapterName){
        const Catalog={
            ...catalogData,userId:user.currUser.id,chapterId:chapterId,chapterName:chapterName,themesName:book.currBook.name,themesId:book.currBook.id

        }
        const cat = async ()=>{
            const response = await createCatalog(Catalog)
            fetchCatalog(user.currUser.id).then(data=>book.setCatalog(data))
            console.log(response)
        }
        cat()
    }
    return (
        <div>
            <div className='d-flex justify-content-center align-items-center me-3' style={{fontSize:30,fontStyle:"italic"}}>
                {book.currBook.name}
                <MDBDropdown>
                <MDBDropdownToggle style={{fontSize:14}} color='link'></MDBDropdownToggle>
                <MDBDropdownMenu>
                    <MDBDropdownItem link onClick={()=>{setUpdateThemeVisible()}}>Редагувати</MDBDropdownItem>
                    <MDBDropdownItem link onClick={()=>{
                        deleteThemes()
                    }}>Видалити</MDBDropdownItem>
                </MDBDropdownMenu>
            </MDBDropdown>
            </div>

            <div className='d-flex'>
                {user.currUser.role === 'Teacher'
                    ?
                    <MDBBtn color='success' onClick={()=>setAddChapterVisible()}>
                        Додати розділ
                    </MDBBtn>
                    :
                    <div>
                        <MDBBtn onClick={()=>{
                            book.setSelectGlos(true)
                        }
                        }>Глосарій</MDBBtn>
                        <MDBBtn onClick={()=>{
                            setAddNoteVisible()
                        }
                        }>Нотатки</MDBBtn>
                    </div>
                }

            </div>
            <MDBListGroup style={{ minWidth: '22rem' }} light>
                {
                    book.chapter.filter(chapterFilter=>{
                        if(+chapterFilter.themesId === +book.currBook.id){
                            return chapterFilter
                        }
                    }).map(chapter =>
                        <MDBListGroupItem aria-current='true' className='px-3 mt-2' style={{cursor:"pointer"}}

                        >
                            <div className='d-flex flex-row justify-content-between'>
                                <div className='d-flex'  onClick={()=>{
                                    book.setCurrChapter(chapter)
                                    history.push(BOOK_ROUTE)
                                }}>
                                    {chapter.name}
                                </div>
                                <div className='d-flex'>
                                    {
                                        !selectDropdown || +selectDropdownId === +chapter.id ?

                                                <MDBDropdown>
                                                    <MDBDropdownToggle style={{fontSize:14} } color='link'></MDBDropdownToggle>
                                                    <MDBDropdownMenu>
                                                        <MDBDropdownItem link>Читати</MDBDropdownItem>
                                                        {
                                                            user.currUser.role === 'Teacher' ?
                                                                <div>
                                                                    <MDBDropdownItem link onClick={()=>{
                                                                        book.setCurrChapter(chapter)
                                                                        test.setCurrChapterId(chapter.id)
                                                                        setAddTestVisible()
                                                                    }
                                                                    }>Додати тест</MDBDropdownItem>
                                                                    <MDBDropdownItem link onClick={()=>{
                                                                        book.setCurrChapter(chapter)
                                                                        setUpdateChapterVisible()
                                                                    }}>Редагувати</MDBDropdownItem>
                                                                    <MDBDropdownItem link onClick={()=>{
                                                                        deleteChapters(chapter.id)
                                                                    }}>Видалити</MDBDropdownItem>
                                                                </div>:<div></div>


                                                        }
                                                        <MDBDropdownItem link onClick={()=>{
                                                            book.setCurrChapter(chapter)
                                                            test.setCurrChapterId(chapter.id)
                                                            setSelectChapter(chapter)
                                                            fetchTest(chapter.id).then(dataTest=>{
                                                                console.log(dataTest)
                                                                test.setTest(dataTest)
                                                                fetchTask(dataTest.id).then(dataTask=>{
                                                                        console.log(dataTask)
                                                                        test.setTask(dataTask)
                                                                        test.setCountAnswer(dataTask[0].id)
                                                                        fetchAnswer(dataTask[0].id).then(dataAnswer=>test.setAnswer(dataAnswer))
                                                                    }
                                                                )
                                                            })
                                                            fetchTask(test.test.id).then(data=>test.setTask(data))
                                                            setAddTestModalVisible()
                                                        }
                                                        }>Тест</MDBDropdownItem>
                                                        <MDBDropdownItem link onClick={()=>{

                                                            addItemToCatalog(chapter.id,chapter.name)
                                                        }
                                                        }>Додати до панелі</MDBDropdownItem>
                                                    </MDBDropdownMenu>
                                                </MDBDropdown>
                                             :<div>

                                            </div>
                                    }

                                    {/*<div className='d-flex'>*/}
                                    {/*    <select name="selectChapterFunc" id="selectChapterFunc1">*/}
                                    {/*        <option value="1">1</option>*/}
                                    {/*        <option value="1">2</option>*/}
                                    {/*        <option value="1">3</option>*/}
                                    {/*        <option value="1">4</option>*/}

                                    {/*    </select>*/}
                                    {/*</div>*/}
                                </div>

                            </div>

                        </MDBListGroupItem>
                    )
                }
            </MDBListGroup>
        </div>
    );
});

export default ChapterList;