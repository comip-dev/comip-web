import React, { useEffect, useState } from 'react';
import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import { convertToHTML } from 'draft-convert';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import './TextEditor.css'

const TextEditor = ({setBody}) => {
    const [editorState, setEditorState] = useState(
        () => EditorState.createEmpty(),
      );
      useEffect(() => {
        let html = convertToHTML(editorState.getCurrentContent());
        setBody(html);
      }, [editorState]);
    return (
    <>
        <Editor
            editorState={editorState}
            onEditorStateChange={setEditorState}
            editorClassName="editor-class"
        />
    </>
  )
}

export default TextEditor