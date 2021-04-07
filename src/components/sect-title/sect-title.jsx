import React from 'react'
import './sect-title.css'

function section(props) {
    return (
        <div className="sect">
            <h1 className='sect-title'>{props.title}</h1>
        </div>
    )
}

export default section
