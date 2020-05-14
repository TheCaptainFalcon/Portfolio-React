import React, { Component } from 'react';
import CV from '../cv/Joseph_Kim_Software_Dev.pdf';

class Portfolio extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    render() { 
        return (  
            <div>
                <h1>I'm Joseph Kim</h1>
                <h4>Software Developer</h4>
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
                    If interested, please refer to my Contact section.
                </p>
                
                <a href={CV} target='_blank' rel="noopener noreferrer"><button>Download CV (ADD ICON HERE)</button></a>
            </div>
            
        );
    }
}
 
export default Portfolio;