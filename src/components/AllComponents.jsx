import React, { Component } from 'react';
import CV from '../cv/Joseph_Kim_Software_Dev.pdf';
import { Nav, Navbar, Card, CardDeck } from 'react-bootstrap';
import styled from 'styled-components';
import ScrollspyNav from 'react-scrollspy-nav';
import profilePic from '../images/rightPic2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileDownload } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import html from '../images/html5.2.png';
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
import bingemasters from '../gifs/bingemasters-gameplay.gif';
import ibudget from '../gifs/iBudget-calc.gif';
import jobfinder from '../gifs/jobfinder-search.gif';
import eventify from  '../gifs/Eventify.gif';
import mongodb from '../images/mongodb.png';

const SocialButton = styled.button`
    color: black;
    :hover {color: #007bff};
    transition: color .1s;
    border-radius: 15px;
    box-shadow: 1px 1px 1px gray;
`;

const SkillsName = styled.h2`
    display: flex;
    justify-content: center;
    padding: auto 0.5rem;
    border: 1px solid black;
    border-radius: 5px;
    margin: 1rem;
    background-color: white;
`;

const NameTitle = styled.h1`
    font-weight: bold;
    display: flex;
    justify-content: center;
`;

const JobTitle = styled.h4`
    font-weight: 300;
    font-style: italic;
    margin-bottom: 2rem;
    display: flex;
    justify-content: center;
`;

const LandingCardBackground = styled.div`
    padding: 1rem;
    margin: 1rem;
    background: papayawhip;
    border: 1px solid black;
`;

const EmptyLandingCardBackground = styled.div`
    padding: 1rem;
    margin: 1rem;
    display: flex;
    justify-content: center;
`;

const LandingWrapper = styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

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
    background-color: white;
`;

class AllComponents extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div style={{backgroundColor: '#d5e5ff'}}> 
            <div>
                <ScrollspyNav
                    scrollTargetIds={["skills", "projects"]}
                    offset={100}
                    activeNavClass="is-active"
                    scrollDuration="1000"
                    headerBackground="true"
                >
                    <Navbar style={{display:'flex', justifyContent:'center'}}fixed="top" bg="dark" variant="dark">
                       
                            <Nav className="mr-auto">
                                <Nav.Link href="#">Introduction</Nav.Link>
                                <Nav.Link href="#skills">Skills</Nav.Link>
                                <Nav.Link href="#projects">Projects</Nav.Link>
                            </Nav>
                    </Navbar>
                </ScrollspyNav>
            </div>
            <div style={{marginTop:'3rem'}}>
                
            <div style={{backgroundColor: ''}}>
                <LandingWrapper> 
                    <LandingCardBackground>
                        <Card style={{ maxWidth: '50rem' }}>
                            <Card.Body>
                                <EmptyLandingCardBackground>
                                    <img src={ profilePic } alt='profile'style={{boxShadow: '3px 3px 3px 4px gray'}}></img>
                                </EmptyLandingCardBackground>
                                <NameTitle>I'm Joseph Kim</NameTitle>
                                <JobTitle>Software Developer</JobTitle>
                                <Card.Text>
                                    I have always enjoyed the idea of building something from nothing. 
                                    With each step, one can see the progress from a mere thought to the deployment stage. 
                                    The little pieces that tell a story from the many failures and successes resulting from the countless hours put forth.
                                </Card.Text>
                                <Card.Text>
                                    I take great pride in the work that I am able to achieve and contribute to my team. 
                                    I have had great opportunities working with like-minded individuals, 
                                    which help to reinforce my teamwork capabilties and desire for constant learning.
                                </Card.Text>
                                <Card.Text
                                    style={{fontStyle: 'italic'}}>
                                    Customer service is the cornerstone of any business.
                                </Card.Text>
                                <Card.Text>
                                    That being said, I believe that together with my experience in programming and in client management, 
                                    I am a valuable asset that is equipped with the ability to colloborate efficiently amongst internal and external stakeholders.
                                </Card.Text>
                                <Card.Text>
                                    Allow me to showcase a small portion of my experiences and future potential below.
                                </Card.Text>
                                <Card.Text style={{fontWeight: 'bold', display:'flex', justifyContent:'center'}}>
                                    If interested, please email me at josephkim570@gmail.com
                                </Card.Text>
                                <Card.Text id="skills" style={{display:'flex', flexWrap:'wrap', justifyContent:'space-around'}}>
                                    <a href={CV} target='_blank' rel="noopener noreferrer"><SocialButton>Download CV <FontAwesomeIcon icon={faFileDownload}/></SocialButton></a>
                                    <a href="https://www.github.com/TheCaptainFalcon" 
                                        target='_blank' 
                                        rel="noopener noreferrer">
                                            <SocialButton>Github <FontAwesomeIcon icon={faGithub}/></SocialButton></a>
                                    <a href="https://www.linkedin.com/in/josephkim570" 
                                        target='_blank' 
                                        rel="noopener noreferrer">
                                            <SocialButton>LinkedIn <FontAwesomeIcon icon={faLinkedin}/></SocialButton></a>
                                </Card.Text>
                                <Card.Text>
                                    
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </LandingCardBackground>
                </LandingWrapper>
            </div>
        </div>
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
        <CardDeck id="projects" style={{margin: 'auto 0.5rem', display: 'flex', flexWrap: 'wrap', justifyContent:'center'}}>
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
                <Card.Img variant="top" src={mongodb} />
            </Card>
        </CardDeck>
    </div>
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
                </Card.Text>
                <Card.Text>    
                    This mini solo project was built as a 1-week sprint using the React.js framework.
                </Card.Text>
                <Card.Title>Primary Responsibilities:</Card.Title>
                <Card.Text>
                    Usage of spread operator to track single to multiple states of income/expense input fields. 
                </Card.Text>
                <Card.Text>
                    Implementation of a pie chart for visual UI.
                </Card.Text>
                <Card.Text>
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
    <Card.Footer style={{display:'flex', justifyContent:'center', marginTop:'0.5rem'}}>
        Powered by React, React-Bootstrap, Styled-Components, Font-Awesome, Giphify, Photoshop CS6 and plenty of coffee
    </Card.Footer>
</div>
</div>
        );
    }
}
 
export default AllComponents;