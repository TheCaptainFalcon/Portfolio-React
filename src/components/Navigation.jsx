import React, { Component } from 'react';
import styled from 'styled-components';
import { Nav, Navbar } from 'react-bootstrap';
import ScrollspyNav from 'react-scrollspy-nav';

class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  
            <div>
                {/* <Navbar fixed="top" bg="dark" variant="dark">
                    <Navbar.Brand href="#home">(Li img)</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">Introduction</Nav.Link>
                        <Nav.Link href="#features">Skills</Nav.Link>
                        <Nav.Link href="#pricing">Projects</Nav.Link>
                    </Nav>
                </Navbar> */}
                <ScrollspyNav
                    scrollTargetIds={["section_1", "section_2", "section_3"]}
                    offset={100}
                    activeNavClass="is-active"
                    scrollDuration="1000"
                    headerBackground="true"
                >
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="#section_1">Section 1</a></li>
                        <li><a href="#section_2">Section 2</a></li>
                        <li><a href="#section_3">Section 3</a></li>
                    </ul>
                </ScrollspyNav>
            </div>
        );
    }
}
 
export default Navigation;