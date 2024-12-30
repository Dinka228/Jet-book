import React, {useContext} from 'react';
import {MDBBtn} from "mdb-react-ui-kit";
import {Context} from "../../index";
import {observer} from "mobx-react-lite";

const Glossary = observer(({addGlossary}) => {
    const {book} = useContext(Context)
    const {user} = useContext(Context)
    const {test} = useContext(Context)
    return (
        <div>
            <div style={{fontSize:20,fontStyle:"italic"}} className='d-flex justify-content-center'>
                {
                    user.currUser.role === 'Teacher' ?
                        `Глосарій ${user.currUser.fullName}` : `Глосарій ${book.currBook.creatorName}`
                }
            </div>
            {
                user.currUser.role === 'Teacher' ?  <div className='mt-3'>
                    <MDBBtn onClick={()=>{
                        addGlossary()
                    }}>
                        Додати визначення
                    </MDBBtn>
                </div>: <div></div>
            }
            {/*{*/}
            {/*    user.currUser.role === 'Student' ? <div>*/}
            {/*        <MDBBtn className='mt-3'>*/}
            {/*            Тест на перевірку знань*/}
            {/*        </MDBBtn>*/}
            {/*    </div>:<div>*/}

            {/*    </div>*/}
            {/*}*/}
            {
                book.glossary.map(gloss=><div className='mt-3' style={{fontSize:18,fontStyle:"italic"}}>{`${gloss.title} - ${gloss.text}`}</div>
                )
            }

        </div>
    );
});

export default Glossary;