import React, { Component } from 'react';
import { GiBirdTwitter } from 'react-icons/gi';
import { FaHome, FaRegUser, FaFeatherAlt } from 'react-icons/fa';
import { BiHash } from 'react-icons/bi';
import {  AiOutlineNotification } from 'react-icons/ai';
import { FiMessageSquare } from 'react-icons/fi';
import { CgMoreO } from 'react-icons/cg';
import { Link } from 'react-router-dom';

import './Sidebar.css';

const sidebarData = [
    {
        title : "home",
        path : "#home",
        icon: <FaHome/>,
        cName: "sidebarItem"
    },
    {
        title : "explore",
        path : "#explore",
        icon: <BiHash/>,
        cName: "sidebarItem"
    },
    {
        title : "notifications",
        path : "#notifications",
        icon: <AiOutlineNotification/>,
        cName: "sidebarItem"
    },
    {
        title : "messages",
        path : "#messages",
        icon: <FiMessageSquare/>,
        cName: "sidebarItem"
    },
    {
        title : "profile",
        path : "#profile",
        icon: <FaRegUser/>,
        cName: "sidebarItem"
    },
    {
        title : "more",
        path : "#more",
        icon: <CgMoreO/>,
        cName: "sidebarItem",
    },
    {
        title : "tweet",
        path : "#tweet",
        icon: <FaFeatherAlt/>,
        cName: "sidebarItem"
    } 
]

export default class sidebar extends Component {
    render() {
        return (    
            <>
                <div className = "Sidebar">
                    <ul className = "items">
                       {sidebarData.map((item, index) => {
                           return (
                               <li key = {index} className = {item.cName}>
                                    {item.icon}
                               </li>
                           );
                       })}
                    </ul>
                </div>
            </>
        )
    }
}