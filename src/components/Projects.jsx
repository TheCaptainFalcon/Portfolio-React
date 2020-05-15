import React, {Component} from 'react';
import styled from 'styled-components';
import bingemasters from '../gifs/bingemasters-gameplay.gif';
import ibudget from '../gifs/iBudget-calc.gif';
import jobfinder from '../gifs/jobfinder-search.gif';
import eventify from  '../gifs/Eventify.gif';
import { Card, Button } from 'react-bootstrap';

const ProjectCardBackground = styled.div`
    padding: 1rem;
    margin: 1rem;
    background: papayawhip;
    border: 1px solid black;
`;

const Wrapper = styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

const ProjectName = styled.div`
    display: flex;
    justify-content: center;
    padding: auto 0.5rem;
    border: 1px solid black;
    border-radius: 5px;
    margin: 1rem;
`;

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  
            <div>
                <ProjectName><h2>Projects</h2></ProjectName>
                <Wrapper>
                    <ProjectCardBackground>
                        <Card style={{ width: '30rem' }}>
                        <Card.Img variant="top" src={bingemasters}/>
                        <Card.Body>
                            <Card.Title>
                                <a 
                                    href="#" 
                                    target='_blank' 
                                    rel="noopener noreferrer"
                                    >Bingemasters
                                </a>
                                </Card.Title>
                            <Card.Title>Project Description:</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                            <Card.Title>Primary Responsibilities:</Card.Title>
                            <Card.Text>
                                placeholder Responsibilities text
                            </Card.Text>
                            <Card.Title>Tech Stack</Card.Title>
                            <Card.Text>
                                placeholder tech stack info
                            </Card.Text>
                        </Card.Body>
                        </Card>
                    </ProjectCardBackground>
                    <ProjectCardBackground>
                        <Card style={{ width: '30rem' }}>
                        <Card.Img variant="top" src={ibudget} style={{marginBottom:'2rem'}}/>
                        <Card.Body>
                            <Card.Title>
                                <a 
                                    href="#" 
                                    target='_blank' 
                                    rel="noopener noreferrer"
                                    >iBudget
                                </a>
                                </Card.Title>
                            <Card.Title>Project Description:</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                            <Card.Title>Primary Responsibilities:</Card.Title>
                            <Card.Text>
                                placeholder Responsibilities text
                            </Card.Text>
                            <Card.Title>Tech Stack</Card.Title>
                            <Card.Text>
                                placeholder tech stack info
                            </Card.Text>
                        </Card.Body>
                        </Card>
                    </ProjectCardBackground>
                    <ProjectCardBackground>
                        <Card style={{ width: '30rem' }}>
                        <Card.Img variant="top" src={jobfinder} style={{marginBottom:'1rem'}}/>
                        <Card.Body>
                            <Card.Title>
                                <a 
                                    href="#" 
                                    target='_blank' 
                                    rel="noopener noreferrer"
                                    >JobFinder
                                </a>
                                </Card.Title>
                            <Card.Title>Project Description:</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                            <Card.Title>Primary Responsibilities:</Card.Title>
                            <Card.Text>
                                placeholder Responsibilities text
                            </Card.Text>
                            <Card.Title>Tech Stack</Card.Title>
                            <Card.Text>
                                placeholder tech stack info
                            </Card.Text>
                        </Card.Body>
                        </Card>
                    </ProjectCardBackground>
                    <ProjectCardBackground>
                        <Card style={{ width: '30rem' }}>
                        <Card.Img variant="top" src={eventify} style={{marginBottom:'1rem'}}/>
                        <Card.Body>
                            <Card.Title>
                                <a 
                                    href="#" 
                                    target='_blank' 
                                    rel="noopener noreferrer"
                                    >Eventify
                                </a>
                            </Card.Title>
                            <Card.Title>Project Description:</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                            </Card.Text>
                            <Card.Title>Primary Responsibilities:</Card.Title>
                            <Card.Text>
                                placeholder Responsibilities text
                            </Card.Text>
                            <Card.Title>Tech Stack</Card.Title>
                            <Card.Text>
                                placeholder tech stack info
                            </Card.Text>
                        </Card.Body>
                        </Card>
                    </ProjectCardBackground>
                </Wrapper>
            </div>
        );
    }
}

export default Projects;