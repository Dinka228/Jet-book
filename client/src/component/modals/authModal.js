import React, {useContext, useState} from 'react';
import {
    MDBBtn, MDBInput,
    MDBModal,
    MDBModalBody,
    MDBModalContent,
    MDBModalDialog,
    MDBModalFooter,
    MDBModalHeader,
    MDBModalTitle
} from "mdb-react-ui-kit";
import {Context} from "../../index";
import {fetchAllStudents, fetchAllTeachers, login} from "../../http/userAPI";
import {MAIN_ROUTE} from "../../utils/consts";
import {useHistory} from "react-router-dom";

const AuthModal = ({show,onHide}) => {
    const history = useHistory()
    const {book} = useContext(Context)
    const {user} = useContext(Context)
    const [userData,setUserData] = useState({email:"",password:""})
    const signIn = () =>{
        const Users={
            ...userData

        }
        console.log(Users)
        const log = async ()=>{
            const response = await login(Users.email,Users.password)
            user.setCurrUser(response)
            user.setIsAuth(true)
            console.log(user.currUser.role)
            if(user.currUser.role === 'Student'){
                fetchAllTeachers().then(data=>{
                    console.log(data)
                    user.setTeachers(data)
                    console.log(user.teachers)
                })
            }
            else if(user.currUser.role === 'Teacher'){
                fetchAllStudents().then(data=>user.setStudents(data))
            }
            history.push(MAIN_ROUTE)
        }
        log()

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
                            <MDBModalTitle>Вхід</MDBModalTitle>
                        </MDBModalHeader>
                        <MDBModalBody>
                            <MDBInput className='mt-3' label='Введіть пошту' id='form1' type='text'
                                      value = {userData.email}
                                      onChange={(e)=>setUserData({...userData,email:e.target.value})}>

                            </MDBInput>
                            <MDBInput  className='mt-3' label='Введіть пароль' id='form3' type='password'
                                       value = {userData.password}
                                       onChange={(e)=>setUserData({...userData,password:e.target.value})}>

                            </MDBInput>
                        </MDBModalBody>
                        <MDBModalFooter>
                            <MDBBtn onClick={()=>signIn()}>Увійти</MDBBtn>
                        </MDBModalFooter>
                    </MDBModalContent>
                </MDBModalDialog>
            </MDBModal>
        </>
    );
};

export default AuthModal;