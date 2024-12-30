import React, {useContext} from 'react';
import AuthModal from "../component/modals/authModal";
import {Context} from "../index";
import {MDBContainer} from "mdb-react-ui-kit";

const Auth = () => {
    const {book} = useContext(Context)
    return (
        <MDBContainer>
            <AuthModal show = {book.authVisible} onHide={()=>book.setAuthVisible(false)}></AuthModal>
        </MDBContainer>
    );
};

export default Auth;