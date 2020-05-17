import React, { Component } from 'react';
import CV from '../cv/Joseph_Kim_Software_Dev.pdf';
import styled from 'styled-components';
import { Card, CardDeck, ListGroup } from 'react-bootstrap';
import profilePic from '../images/rightPic2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileDownload } from '@fortawesome/free-solid-svg-icons';

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

class Portfolio extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    render() { 
        return (  
            <div style={{marginTop:'4rem'}}>
                
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
                                    <Card.Text style={{fontWeight: 'bold'}}>
                                        If interested, please email me at josephkim570@gmail.com
                                    </Card.Text>
                                    <Card.Text>
                                        <a href={CV} target='_blank' rel="noopener noreferrer"><button>Download CV <FontAwesomeIcon icon={faFileDownload}/></button></a>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </LandingCardBackground>
                    </LandingWrapper>
                </div>
            </div>
        );
    }
}
export default Portfolio;