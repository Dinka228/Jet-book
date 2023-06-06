import React, {useState,Component} from 'react';
import { EditorState } from 'draft-js'
import { ContentState, convertToRaw } from 'draft-js'
import {Editor} from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import './EditorStyle.css'


const EditorPage = () => {
    const _contentState = ContentState.createFromText('Sample content state')
    const raw = convertToRaw(_contentState) // RawDraftContentState JSON
    const [contentState, setContentState] = useState(raw) // ContentState JSON

    return (
        <div className="App">
            <Editor
                defaultContentState={contentState}
                onContentStateChange={setContentState}
                wrapperClassName="wrapper-class"
                editorClassName="editor-class"
                toolbarClassName="toolbar-class"
            />
        </div>
    )
};

export default EditorPage;