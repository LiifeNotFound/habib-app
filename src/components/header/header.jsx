import React from 'react';
import './header.css';
import { RiLoginCircleFill } from 'react-icons/ri'

function header() {
	return (
        <nav>
            <span>HABIB</span>
            <ul>
                <li><a href="#">Registo</a></li>
                <li><a href="#">Login <RiLoginCircleFill /> </a></li>
            </ul>
        </nav>
    )
}

export default header;
