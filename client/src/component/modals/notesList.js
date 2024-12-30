import React, {useContext} from 'react';
import {
    MDBBtn,
    MDBModal,
    MDBModalBody,
    MDBModalContent,
    MDBModalDialog,
    MDBModalFooter,
    MDBModalHeader,
    MDBModalTitle
} from "mdb-react-ui-kit";
import client from './client.jpg'
import {Button, Card, Dropdown} from "react-bootstrap";
import {useHistory} from "react-router-dom";
import {observer} from "mobx-react-lite";
import {Context} from "../../index";

const NoteList = observer(({users}) => {
    const {user} = useContext(Context)
    const history = useHistory()
    return (
        <Card style={{width:600,height:150,display:"flex",flexDirection:"row"}} className="mt-4" border={"black"}>
            <div className='m-lg-auto'>
                <img src={client} style={{width:70,height:70}} alt=""/>
            </div>
            <div className="m-lg-auto d-flex flex-column">
                <div>
                    {
                        users.fullName + "(" + users.role + ")"
                    }
                </div>
            </div>
            <div className="d-flex ">
                <div className="m-lg-auto">
                    <MDBBtn style={{width:110}} color={"success"}>Access</MDBBtn>
                </div>
                <div className="m-lg-auto">
                    <MDBBtn style={{width:110}} color={"info"}>Нотатки</MDBBtn>
                </div>
            </div>

            {/*<div className="m-lg-auto" >*/}
            {/*    <MDBBtn style={{width:110}} className='mt-2 m-2' color={"danger"} >Delete</MDBBtn>*/}
            {/*</div>*/}



        </Card>
    );
});

export default NoteList;