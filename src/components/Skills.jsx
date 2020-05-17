import React, { Component } from 'react';
import styled from 'styled-components';
import { Card, CardDeck } from 'react-bootstrap';
import html from '../images/html5.2.png'
import css from '../images/css3.2.png';
import js from '../images/js.1.1.png';
import bootstrap from '../images/bootstrap4.2.png';
import jquery from '../images/jquery1.1.png';
import python from '../images/python1.1.png';
import react from '../images/react1.1.png';
import git from '../images/git1.2.png';
import node from '../images/nodejs1.png';
import express from '../images/express2.png';
import psql from '../images/postgresql1.1.png';


const SkillsName = styled.h2`
    display: flex;
    justify-content: center;
    padding: auto 0.5rem;
    border: 1px solid black;
    border-radius: 5px;
    margin: 1rem;
`;

class Skills extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  
            <div>
                <SkillsName>Software Developer Skills</SkillsName>
                <CardDeck style={{margin: 'auto 0.5rem', display: 'flex', flexWrap: 'wrap', justifyContent:'center'}}>
                    <Card style={{margin:'1rem 0.5rem', minWidth: '9rem', maxWidth: '12rem', boxShadow:'2px 2px 2px 2px gray'}}>
                        <Card.Img variant="top" src={html} />
                    </Card>
                    <Card style={{margin:'1rem 0.5rem', minWidth: '9rem', maxWidth: '12rem', boxShadow:'2px 2px 2px 2px gray'}}>
                        <Card.Img variant="top" src={css} />   
                    </Card>
                    <Card style={{margin:'1rem 0.5rem', minWidth: '9rem', maxWidth: '12rem', boxShadow:'2px 2px 2px 2px gray'}}>
                        <Card.Img variant="top" src={js} />
                    </Card>
                    <Card style={{margin:'1rem 0.5rem', minWidth: '9rem', maxWidth: '12rem', boxShadow:'2px 2px 2px 2px gray'}}>
                        <Card.Img variant="top" src={bootstrap} />
                    </Card>
                    <Card style={{margin:'1rem 0.5rem', minWidth: '9rem', maxWidth: '12rem', boxShadow:'2px 2px 2px 2px gray'}}>
                        <Card.Img variant="top" src={jquery} />
                    </Card>
                    <Card style={{margin:'1rem 0.5rem', minWidth: '9rem', maxWidth: '12rem', boxShadow:'2px 2px 2px 2px gray'}}>
                        <Card.Img variant="top" src={python} />
                    </Card>
                
                </CardDeck>
                <CardDeck style={{margin: 'auto 0.5rem', display: 'flex', flexWrap: 'wrap', justifyContent:'center'}}>
                    <Card style={{margin:'1rem 0.5rem', minWidth: '9rem', maxWidth: '12rem', boxShadow:'2px 2px 2px 2px gray'}}>
                        <Card.Img variant="top" src={react} />
                    </Card>
                    <Card style={{margin:'1rem 0.5rem', minWidth: '9rem', maxWidth: '12rem', boxShadow:'2px 2px 2px 2px gray'}}>
                        <Card.Img variant="top" src={git} />
                    </Card>
                    <Card style={{margin:'1rem 0.5rem', minWidth: '9rem', maxWidth: '12rem', boxShadow:'2px 2px 2px 2px gray'}}>
                        <Card.Img variant="top" src={node} />
                    </Card>
                    <Card style={{margin:'1rem 0.5rem', minWidth: '9rem', maxWidth: '12rem', boxShadow:'2px 2px 2px 2px gray'}}>
                        <Card.Img variant="top" src={express} />
                    </Card>
                    <Card style={{margin:'1rem 0.5rem', minWidth: '9rem', maxWidth: '12rem', boxShadow:'2px 2px 2px 2px gray'}}>
                        <Card.Img variant="top" src={psql} />
                    </Card>
                    <Card style={{margin:'1rem 0.5rem', minWidth: '9rem', maxWidth: '12rem', boxShadow:'2px 2px 2px 2px gray'}}>
                        <Card.Img variant="top" src={html} />
                    </Card>
                </CardDeck>
            </div>
        );
    }
}
 
export default Skills;