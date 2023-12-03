import React from 'react'

function TextPreview(props) {
    return (
        <div>
            <h2>Live Preview</h2>
            <div dangerouslySetInnerHTML={{ __html: props.markdown }} />
        </div>
    )
}

export default TextPreview