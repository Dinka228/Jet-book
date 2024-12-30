import React, {useState} from 'react';
import {
    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBCardFooter,
    MDBCol,
    MDBCollapse,
    MDBContainer,
    MDBIcon,
    MDBRow
} from "mdb-react-ui-kit";
import {Scrollbar} from "react-scrollbars-custom";

const Chat = () => {
    const [showShow, setShowShow] = useState(false);

    const toggleShow = () => setShowShow(!showShow);
    return (
        <MDBContainer fluid className="py-5">
            <MDBRow className="d-flex justify-content-center">
                <MDBCol md="8" lg="6" xl="12">
                    <MDBBtn onClick={toggleShow} color="info" size="lg" block>
                        <div className="d-flex justify-content-between align-items-center">
                            <span>Чат</span>
                            <MDBIcon fas icon="chevron-down" />
                        </div>
                    </MDBBtn>
                    <MDBCollapse show={showShow} className="mt-3">
                        <MDBCard id="chat4">
                            <Scrollbar
                                suppressScrollX
                                style={{ position: "relative", height: "400px" }}
                            >
                                <MDBCardBody>
                                    <div className="d-flex flex-row justify-content-start">
                                        <div>
                                            <p
                                                className="small p-2 ms-3 mb-1 rounded-3"
                                                style={{ backgroundColor: "#f5f6f7",fontWeight:700 }}
                                            >
                                                Teacher1
                                            </p>
                                            <p
                                                className="small p-2 ms-3 mb-1 rounded-3"
                                                style={{ backgroundColor: "#f5f6f7" }}
                                            >
                                                Доброго ранку шановні студенти.
                                            </p>
                                            <p
                                                className="small p-2 ms-3 mb-1 rounded-3"
                                                style={{ backgroundColor: "#f5f6f7" }}
                                            >
                                                Сьогодні ми розглядаємо Вступ у дисципліну Основи програмної інженерії.
                                            </p>
                                            <p className="small ms-3 mb-3 rounded-3 text-muted">
                                                08:18
                                            </p>
                                        </div>
                                    </div>

                                    <div className="d-flex flex-row justify-content-end mb-4 pt-1">
                                        <div>
                                            <p
                                                className="small p-2 ms-3 mb-1 rounded-3"
                                                style={{ backgroundColor: "#f5f6f7",fontWeight:700 }}
                                            >
                                                Student2
                                            </p>
                                            <p className="small p-2 me-3 mb-1 text-white rounded-3 bg-info">
                                                Доброго ранку.
                                            </p>
                                            <p className="small p-2 me-3 mb-1 text-white rounded-3 bg-info">
                                                Можете будь-ласка надіслати силку на конференцію?
                                            </p>
                                            <p className="small me-3 mb-3 rounded-3 text-muted d-flex justify-content-end">
                                                08:19
                                            </p>
                                        </div>
                                    </div>

                                    <div className="d-flex flex-row justify-content-start mb-4">
                                        <div>
                                            <p
                                                className="small p-2 ms-3 mb-1 rounded-3"
                                                style={{ backgroundColor: "#f5f6f7",fontWeight:700 }}
                                            >
                                                Teacher1
                                            </p>
                                            <p
                                                className="small p-2 ms-3 mb-1 rounded-3"
                                                style={{ backgroundColor: "#f5f6f7" }}
                                            >
                                               Добре зараз надішлю
                                            </p>
                                            <p className="small ms-3 mb-3 rounded-3 text-muted">
                                                08:20
                                            </p>
                                        </div>
                                    </div>
                                </MDBCardBody>
                            </Scrollbar>
                            <MDBCardFooter className="text-muted d-flex justify-content-start align-items-center p-3">
                                <input
                                    type="text"
                                    className="form-control form-control-lg"
                                    id="exampleFormControlInput3"
                                    placeholder="Написати"
                                />
                                <a className="ms-1 text-muted" href="#!">
                                    <MDBIcon fas icon="paperclip" />
                                </a>
                                <a className="ms-3 text-muted" href="#!">
                                    <MDBIcon fas icon="smile" />
                                </a>
                                <a className="ms-3 link-info" href="#!">
                                    <MDBIcon fas icon="paper-plane" />
                                </a>
                            </MDBCardFooter>
                        </MDBCard>
                    </MDBCollapse>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
};

export default Chat;