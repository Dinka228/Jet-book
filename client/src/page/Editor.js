
import React, {useState, Component, useContext} from 'react';
import { EditorState, convertToRaw } from 'draft-js'
import {Editor} from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import './EditorStyle.css'
import {observer} from "mobx-react-lite";
import {stateToHTML} from "draft-js-export-html";
import {Context} from "../index";
import draftToHtml from 'draftjs-to-html'
import {MDBBtn} from "mdb-react-ui-kit";
import {createAnswer} from "../http/answerAPI";
import {createChapterContent, fetchChapterContent} from "../http/chapterContentAPI";
import {BOOK_ROUTE} from "../utils/consts";
import {useHistory} from "react-router-dom";
import {stateFromHTML} from 'draft-js-import-html';
import {convertToHTML} from "draft-convert";


const EditorPage = observer(() => {
    const history = useHistory()
    const {book} = useContext(Context)
    const [userInfo, setuserInfo] = useState({
        title: '',
    });
    const [content, setContent] = useState({});
    let editorState = EditorState.createEmpty();
    const [description, setDescription] = useState(editorState);
    const [text, setText] = useState();

    const onEditorStateChange = (editorState) => {
        setDescription(editorState);
    }
    const addChapterContent = () =>{
        console.log(book.currChapter.id)
        const newChapterContent={
            ...content,description:userInfo.description.value,chapterId:book.currChapter.id
        }
        const chapterContenting = async ()=>{
            const response = await createChapterContent(newChapterContent)
            fetchChapterContent(book.currChapter.id).then(data=>{
                console.log(data)
                book.setChapterContent(data)})
            console.log(response)
        }
        chapterContenting()
        history.push(BOOK_ROUTE)
    }
    // console.log(html)
    return (
        <div className="App">
            {<div className='d-flex justify-content-center align-items-center' style={{ fontSize:20 }}>{book.currChapter.name}</div>}
            <Editor
                editorState={description}
                toolbarClassName="toolbarClassName"
                wrapperClassName="wrapperClassName"
                editorClassName="editorClassName"
                onEditorStateChange={onEditorStateChange}
                mention={{
                    separator: " ",
                    trigger: "@",
                }}
            />
            <textarea style={{display:'none'}}
                      disabled ref={(val) => userInfo.description = val}
                      value={draftToHtml(convertToRaw(description.getCurrentContent()))}

            />
            <MDBBtn color='success' onClick={()=>{
                addChapterContent()
            }
            }>
                Зберегти
            </MDBBtn>
        </div>
    )
});

export default EditorPage;

