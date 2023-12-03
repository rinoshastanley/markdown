import React, { useState, useEffect, useCallback } from 'react'
import MdEditor from 'react-markdown-editor-lite';

import 'react-markdown-editor-lite/lib/index.css';
import { convertMarkdownToHTML } from '../utils/markdownService';

function MarkDownEditor(props) {


    const [markdown, setMarkdown] = useState('');


    const handleEditorChange = async ({ text }) => {
        setMarkdown(text)
    };
    return (
        <div>
            <h2>Markdown Editor</h2>
            <MdEditor
                value={markdown}
                style={{ height: '500px' }}
                renderHTML={(text) => convertMarkdownToHTML(text)}
                onChange={handleEditorChange}
            />
        </div>
    )
}

export default MarkDownEditor