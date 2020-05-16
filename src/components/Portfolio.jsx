import React, { Component } from 'react';
import CV from '../cv/Joseph_Kim_Software_Dev.pdf';
import styled from 'styled-components';
import { Card, CardDeck } from 'react-bootstrap';
import profilePic from '../images/rightPic2.png';

const NameTitle = styled.h1`
    font-weight: bold;
    
`;

const JobTitle = styled.h4`
    font-weight: 300;
    font-style: italic;
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
    border: 1px solid black;
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
            <div>
                <CardDeck>
  <Card>
    <Card.Body>
      <Card.Title>
          <NameTitle>I'm Joseph Kim</NameTitle>
          <JobTitle>Software Developer</JobTitle>
      </Card.Title>
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

    <Card.Text style={{fontStyle:"italic"}}>
        Customer service is the cornerstone of any business.
    </Card.Text>

    <Card.Text>      
        That being said, I believe that together with my experience in programming and in client management, 
        I am a valuable asset that is equipped with the ability to colloborate efficiently amongst internal and external stakeholders.
    </Card.Text>
    
    <Card.Text style={{fontWeight:'bold'}}>
        If interested, please email me at josephkim570@gmail.com
    </Card.Text>

    <Card.Text>
        <a href={CV} target='_blank' rel="noopener noreferrer"><button>Download CV (ADD ICON HERE)</button></a>
    </Card.Text>

    </Card.Body>
  </Card>
  <Card>
    <Card.Img variant="top" src={profilePic} />

  </Card>
</CardDeck>
                <LandingWrapper>
                <LandingCardBackground>
                <Card style={{ width: '30rem' }}>
                        <Card.Body>
                        <NameTitle>I'm Joseph Kim</NameTitle>
                <JobTitle>Software Developer</JobTitle>
                            <Card.Text>
                            <p>
                                I have always enjoyed the idea of building something from nothing. 
                                With each step, one can see the progress from a mere thought to the deployment stage. 
                                The little pieces that tell a story from the many failures and successes resulting from the countless hours put forth.
                            </p>
                            <p>
                                I take great pride in the work that I am able to achieve and contribute to my team. 
                                I have had great opportunities working with like-minded individuals, 
                                which help to reinforce my teamwork capabilties and desire for constant learning.
                            </p>
                            <p style={{fontStyle: 'italic'}}>
                            Customer service is the cornerstone of any business.
                        </p>
                        <p>
                            That being said, I believe that together with my experience in programming and in client management, 
                            I am a valuable asset that is equipped with the ability to colloborate efficiently amongst internal and external stakeholders.
                        </p>
                        <p>
                            Allow me to showcase a small portion of my experiences and future potential below.
                        </p>
                        <p style={{fontWeight: 'bold'}}>
                            If interested, please email me at josephkim570@gmail.com
                        </p>
                        <p>
                        <a href={CV} target='_blank' rel="noopener noreferrer"><button>Download CV (ADD ICON HERE)</button></a>
                        </p>
                        </Card.Text>
                        </Card.Body>
                        </Card>
                        </LandingCardBackground>
                
             
                <EmptyLandingCardBackground>
                <Card style={{ width: '30rem' }}>
                        <Card.Body>
                            <Card.Title>Title</Card.Title>
                            <Card.Text>
                            <img src={ profilePic }></img>
                        </Card.Text>
                        </Card.Body>
                        </Card>
                 </EmptyLandingCardBackground>
                 
                        </LandingWrapper>
                    
            </div>

        );
    }
}
 
export default Portfolio;