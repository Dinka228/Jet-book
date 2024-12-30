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
import {Context} from "../../../index";
import {BOOK_ROUTE} from "../../../utils/consts";
import {useHistory} from "react-router-dom";

const ResultOfTest = ({show,onHide}) => {
    const history= useHistory()
    const {test} = useContext(Context)
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
                            <MDBModalTitle>Ваша оцінка за тест {test.grade}</MDBModalTitle>
                        </MDBModalHeader>
                        <MDBModalBody>
                            {
                                test.grade > 3 ? <div>Тепер можеш приступати до лабораторної роботи по даній темі!</div> : <div>Рекомендую тобі перечитати даний розділ</div>
                            }
                        </MDBModalBody>
                        <MDBModalFooter>
                            <MDBBtn color="secondary" onClick={()=>{
                                history.push(BOOK_ROUTE)
                                onHide()
                            }}>
                                Повернутися до теми
                            </MDBBtn>
                            <MDBBtn color="secondary" onClick={()=>{
                                test.setGrade(0)
                                onHide()
                            }}>
                                Закрити
                            </MDBBtn>
                        </MDBModalFooter>
                    </MDBModalContent>
                </MDBModalDialog>
            </MDBModal>
        </>
    );
};

export default ResultOfTest;