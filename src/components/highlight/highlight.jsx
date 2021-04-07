import React from 'react'
import './highlight.css'
import {AiOutlineArrowDown} from 'react-icons/ai'

function highlight() {
    return (
        <div className='highlight'>
            <span>WELCOME TO </span>
            <span>HABIB</span>
            <button className='animate__animated animate__heartBeat animate__slow'><AiOutlineArrowDown className='arrow'/></button>
        </div>
    )
}

export default highlight
