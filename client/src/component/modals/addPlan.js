import React, {useContext, useState} from 'react';
import {
    MDBBtn, MDBDropdown, MDBDropdownItem, MDBDropdownMenu, MDBDropdownToggle,
    MDBInput,
    MDBModal,
    MDBModalBody,
    MDBModalContent,
    MDBModalDialog, MDBModalFooter,
    MDBModalHeader,
    MDBModalTitle
} from "mdb-react-ui-kit";
import {createChapter, fetchChapter} from "../../http/chapterAPI";
import {Context} from "../../index";
import {createPlan, fetchPlan} from "../../http/planAPI";
import {observer} from "mobx-react-lite";

const AddPlan = observer(({show,onHide}) => {
    const {user} = useContext(Context)
    const {book} = useContext(Context)
    const [planData,setPlanData] = useState({})
    const [selectThemes,setSelectThemes] = useState('')
    const [selectThemesId,setSelectThemesId] = useState('')
    const [selectChapter,setSelectChapter] = useState('')
    const [selectChapterId,setSelectChapterId] = useState('')
    const [selectSpeciality,setSelectSpeciality] = useState('')
    const [selectGroup,setSelectGroup] = useState('')
    function createPlans() {
        const Plans = {
            ...planData,creatorName:user.currUser.fullName,
            chapterId:selectChapterId,
            chapterName:selectChapter,
            themesId:selectThemesId,
            themesName:selectThemes,
            speciality:selectSpeciality,
            group:selectGroup,
            views:0

        }
        const sendPlans = async () => {
            const response = await createPlan(Plans)
            fetchPlan().then(data=> {
                console.log(data)
                book.setPlan(data)
            })
            console.log(response)
        }
        sendPlans()
        onHide()
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
                            <MDBModalTitle>Створення плану</MDBModalTitle>
                        </MDBModalHeader>
                        <MDBModalBody>
                            <MDBDropdown className='mt-3'>
                                <MDBDropdownToggle color='link' outline>{selectThemes === '' ? 'Оберіть книгу' : selectThemes}</MDBDropdownToggle>
                                <MDBDropdownMenu>
                                    {
                                        book.themes.filter(themesFilter=>{
                                            if(themesFilter.creatorName === user.currUser.fullName){
                                                return themesFilter
                                            }
                                        }).map(theme=> <MDBDropdownItem link onClick={()=>{
                                            setSelectThemes(theme.name)
                                            setSelectThemesId(theme.id)
                                            console.log(theme.id)
                                            fetchChapter(theme.id).then(data=>book.setChapter(data))
                                        }}>
                                            {theme.name}
                                        </MDBDropdownItem>)
                                    }
                                </MDBDropdownMenu>

                            </MDBDropdown>
                            {
                                selectThemes === '' ? <div></div> : <MDBDropdown className='mt-3'>
                                    <MDBDropdownToggle color='link' outline>{selectChapter === '' ? 'Оберіть розділ' : selectChapter}</MDBDropdownToggle>
                                    <MDBDropdownMenu>
                                        {
                                            book.chapter.map(chapter=> <MDBDropdownItem link onClick={()=>{
                                                setSelectChapter(chapter.name)
                                                setSelectChapterId(chapter.id)
                                            }}>
                                                {chapter.name}
                                            </MDBDropdownItem>)
                                        }
                                    </MDBDropdownMenu>

                                </MDBDropdown>
                            }
                            {
                                selectChapter === '' ? <div>

                                </div>
                                    :
                                    <MDBDropdown className='mt-3'>
                                        <MDBDropdownToggle color='link' outline>{selectSpeciality === '' ? 'Оберіть спеціальність' : selectSpeciality}</MDBDropdownToggle>
                                        <MDBDropdownMenu>
                                            <MDBDropdownItem link onClick={()=>{
                                                    setSelectSpeciality('КН')
                                                }}>
                                                    КН
                                                </MDBDropdownItem>
                                            <MDBDropdownItem link onClick={()=>{
                                                setSelectSpeciality('КІ')
                                            }}>
                                                КІ
                                            </MDBDropdownItem>
                                        </MDBDropdownMenu>

                                    </MDBDropdown>
                            }
                            {
                                selectSpeciality === 'КН' ?
                                    <MDBDropdown className='mt-3'>
                                        <MDBDropdownToggle color='link' outline>{selectGroup === '' ? 'Оберіть группу' : selectGroup}</MDBDropdownToggle>
                                        <MDBDropdownMenu>
                                            <MDBDropdownItem link onClick={()=>{
                                                setSelectGroup('1КН-21мс')
                                            }}>
                                                1КН-21мс
                                            </MDBDropdownItem>
                                            <MDBDropdownItem link onClick={()=>{
                                                setSelectGroup('Всім')
                                            }}>
                                                Всім
                                            </MDBDropdownItem>
                                        </MDBDropdownMenu>

                                    </MDBDropdown> : <div></div>
                            }
                            {
                                selectSpeciality === 'КІ' ?
                                    <MDBDropdown className='mt-3'>
                                        <MDBDropdownToggle color='link' outline>{selectGroup === '' ? 'Оберіть группу' : selectGroup}</MDBDropdownToggle>
                                        <MDBDropdownMenu>
                                            <MDBDropdownItem link onClick={()=>{
                                                setSelectGroup('1КІ-21мс')
                                            }}>
                                                1КІ-21мс
                                            </MDBDropdownItem>
                                            <MDBDropdownItem link onClick={()=>{
                                                setSelectGroup('Всім')
                                            }}>
                                                Всім
                                            </MDBDropdownItem>
                                        </MDBDropdownMenu>

                                    </MDBDropdown> : <div></div>
                            }
                        </MDBModalBody>
                        <MDBModalFooter>
                            <MDBBtn color="secondary" onClick={()=>{
                                onHide()
                            }}>
                                Закрити
                            </MDBBtn>
                            <MDBBtn onClick={()=>createPlans()}>Створити</MDBBtn>
                        </MDBModalFooter>
                    </MDBModalContent>
                </MDBModalDialog>
            </MDBModal>
        </>
    );
});

export default AddPlan;