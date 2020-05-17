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
                <ScrollspyNav
                    scrollTargetIds={["section_1", "section_2", "section_3"]}
                    offset={100}
                    activeNavClass="is-active"
                    scrollDuration="1000"
                    headerBackground="true"
                >
                    <Navbar fixed="top" bg="dark" variant="dark">
                        <Navbar.Brand href="#home">(Li img)</Navbar.Brand>
                            <Nav className="mr-auto">
                                <Nav.Link href="#home">Introduction</Nav.Link>
                                <Nav.Link href="#section_1">Skills</Nav.Link>
                                <Nav.Link href="#pricing">Projects</Nav.Link>
                            </Nav>
                    </Navbar>
                </ScrollspyNav>
            </div>
        );
    }
}
 
export default Navigation;