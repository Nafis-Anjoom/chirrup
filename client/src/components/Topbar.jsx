import React, { Component } from 'react'
import { Form, FormControl, Nav, NavDropdown} from 'react-bootstrap';
import { IconContext} from 'react-icons';
import { GiBirdTwitter } from 'react-icons/gi';
import { FaRegUser, FaFeatherAlt } from 'react-icons/fa';
import { BiHash } from 'react-icons/bi';
import {  AiOutlineNotification } from 'react-icons/ai';
import { FiMessageSquare } from 'react-icons/fi';


import './Topbar.css';
const linksData = [
    {
        title : "tweet",
        path : "#tweet",
        icon : <FaFeatherAlt/>,
        cName : "linkItem"
    },
    {
        title : "explore",
        path : "#explore",
        icon : <BiHash/>,
        cName : "linkItem"
    },
    {
        title : "notifications",
        path : "#notifications",
        icon : <AiOutlineNotification/>,
        cName : "linkItem"
    },
    {
        title : "messages",
        path : "#messages",
        icon : <FiMessageSquare/>,
        cName : "linkItem"
    }
]



export default class Topbar extends Component {
    render() {

        return (
            <>
                <nav className = "navbar">
                    <div className = "navbarItems logoContainer">
                        <GiBirdTwitter size={40} />
                        <span className = "brandName">Chirrup</span>
                    </div>
                    <div className = "navbarItems searchBarContainer">
                        <Form inline className = "searchForm">
                            <FormControl type = "text" placeholder = "search"/>
                        </Form>
                    </div>
                    <div className = "navbarItems navLinksContainer">
                        {linksData.map((item, index) => {
                            return (
                                <IconContext.Provider
                                value = {{color: 'white '}}>
                                    <Nav.Link href = {item.path} className = {item.cName}>
                                        {item.icon}
                                    </Nav.Link>
                                </IconContext.Provider>
                                
                            );
                        })}
                        <NavDropdown title ={<FaRegUser/>}>
                            <NavDropdown.Item>Settings</NavDropdown.Item>
                            <NavDropdown.Item>Sign out</NavDropdown.Item>
                        </NavDropdown>
                    </div>
                </nav>
            </>
        )
    }
}