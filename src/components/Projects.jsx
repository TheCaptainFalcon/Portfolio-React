import React, {Component} from 'react';
import styled from 'styled-components';
import bingemasters from '../gifs/bingemasters-gameplay.gif';
import ibudget from '../gifs/iBudget-calc.gif';
import jobfinder from '../gifs/jobfinder-search.gif';
import eventify from  '../gifs/Eventify.gif';
import { Card } from 'react-bootstrap';

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
                                    href="https://github.com/TheCaptainFalcon/bingemasters-demo" 
                                    target='_blank' 
                                    rel="noopener noreferrer"
                                    >Bingemasters 
                                </a>
                            </Card.Title>
                            <Card.Title>Project Description:</Card.Title>
                            <Card.Text>
                                Bingemasters is an actor guessing game, where an image of an actor appears on the screen and players attempt to correctly identify the actor.
                            </Card.Text>
                            <Card.Text>
                                The goal of the game is to obtain the highest streak/score by consecutively answering correctly within the time limit. 
                                In addition, having a high streak allows the user to post to the leaderboard.
                            </Card.Text>
                            <Card.Text>
                                This was a fullstack capstone project, which was built in a 2-week time span.
                            </Card.Text>
                            <Card.Title>Primary Responsibilities:</Card.Title>
                            <Card.Text>
                                    Implemented React Redux and Passport Google oAuth as part of authentication and tracking cookie sessions; 
                                    used in allowing logged in users to view the leaderboard and to post to the leaderboard based on state passed as props. 
                            </Card.Text>
                            <Card.Title>Tech Stack:</Card.Title>
                            <Card.Text>
                                MERN stack (MongoDB, Express, React, Node.js)
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
                                    href="https://github.com/TheCaptainFalcon/DC_Week14" 
                                    target='_blank' 
                                    rel="noopener noreferrer"
                                    >iBudget
                                </a>
                                </Card.Title>
                            <Card.Title>Project Description:</Card.Title>
                            <Card.Text>
                                iBudget is a budget calculator app that uses your monthly income and expenses to determine your daily/weekly/monthly/bi-weekly/annual budgets.
                                This mini solo project was built as a 1-week sprint using the React.js framework.
                            </Card.Text>
                            <Card.Title>Primary Responsibilities:</Card.Title>
                            <Card.Text>
                                Usage of spread operator to track single to multiple states of income/expense input fields. 
                                Implementation of a pie chart for visual UI.
                                React-Router for navbar navigation and tabs in a card setup per data analyis feature.
                            </Card.Text>
                            <Card.Title>Tech Stack:</Card.Title>
                            <Card.Text>
                                HTML, CSS, JS, React
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
                                    href="https://github.com/jamariod/JobFinder" 
                                    target='_blank' 
                                    rel="noopener noreferrer"
                                    >JobFinder
                                </a>
                                </Card.Title>
                            <Card.Title>Project Description:</Card.Title>
                            <Card.Text>
                                Member of a 3-person team building a website that utilizes a database for registration and login authentication and obtains web scraped information from Indeed’s search parameters and results.
                            </Card.Text>
                            <Card.Title>Primary Responsibilities:</Card.Title>
                            <Card.Text>
                                Creating the skeleton code, using Cheerio to web scrape Indeed’s job listings, and interactivity between handlebars, es6-template-engine, and fetch requests using Axios.
                            </Card.Text>
                            <Card.Title>Tech Stack:</Card.Title>
                            <Card.Text>
                                HTML, CSS, JS, Node.js, Express, PostgreSQL
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
                                    href="https://github.com/TheCaptainFalcon/Eventify-Deploy" 
                                    target='_blank' 
                                    rel="noopener noreferrer"
                                    >Eventify
                                </a>
                            </Card.Title>
                            <Card.Title>Project Description:</Card.Title>
                            <Card.Text>
                                Led development efforts in a 3-person team building a website that obtains popular events based in GA and shows their precise locations on a map.
                            </Card.Text>
                            <Card.Title>Primary Responsibilities:</Card.Title>
                            <Card.Text>
                                Researching and creating logic code, as well as data manipulation of Ticketmaster and Google Maps API through documentation and AJAX calls.
                            </Card.Text>
                            <Card.Title>Tech Stack:</Card.Title>
                            <Card.Text>
                                HTML, CSS, JS, jQuery
                            </Card.Text>
                        </Card.Body>
                        </Card>
                    </ProjectCardBackground>
                </Wrapper>
                <Card.Footer className="text-muted" style={{display:'flex', justifyContent:'center', marginTop:'0.5rem'}}>
                    Powered by React, React-Bootstrap, Styled-Components, Giphify, Photoshop ES6 and plenty of coffee
                </Card.Footer>
            </div>
            
        );
    }
}

export default Projects;