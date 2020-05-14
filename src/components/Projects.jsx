import React, {Component} from 'react';
import styled from 'styled-components';

const Card = styled.div`
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

const CardWrapper = styled.div`
    border: 1px solid black;
    margin: 0.5rem;
`;

const Project = styled.div`
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
                <Project><h2>Projects</h2></Project>
                <Wrapper>
                    <Card>
                        <h4><a href="#">Project 1</a></h4>
                        <CardWrapper>
                            <h5>Project Description:</h5>
                            <p>placeholder jabber text text text text text</p>
                            <h5>Primary Responsibilities:</h5>
                            <p>placeholder jibber jabbber text more text</p>
                            <h5>Tech Stack:</h5>
                            <p>placeholder jibber jabber woopie text text text asdasdasd</p>
                        </CardWrapper>
                    </Card>
                    <Card>
                        <h4><a href="#">Project 2</a></h4>
                        <CardWrapper>
                            <h5>Project Description:</h5>
                            <p>placeholder jabber text text text text text</p>
                            <h5>Primary Responsibilities:</h5>
                            <p>placeholder jibber jabbber text more text</p>
                            <h5>Tech Stack:</h5>
                            <p>placeholder jibber jabber woopie text text text asdasdasd</p>
                        </CardWrapper>
                    </Card>
                    <Card>
                        <h4><a href="#">Project 3</a></h4>
                        <CardWrapper>
                            <h5>Project Description:</h5>
                            <p>placeholder jabber text text text text text</p>
                            <h5>Primary Responsibilities:</h5>
                            <p>placeholder jibber jabbber text more text</p>
                            <h5>Tech Stack:</h5>
                            <p>placeholder jibber jabber woopie text text text asdasdasd</p>
                        </CardWrapper>
                    </Card>
                    <Card>
                        <h4><a href="#">Project 4</a></h4>
                        <CardWrapper>
                            <h5>Project Description:</h5>
                            <p>placeholder jabber text text text text text</p>
                            <h5>Primary Responsibilities:</h5>
                            <p>placeholder jibber jabbber text more text</p>
                            <h5>Tech Stack:</h5>
                            <p>placeholder jibber jabber woopie text text text asdasdasd</p>
                        </CardWrapper>
                    </Card>
                </Wrapper>
            </div>
        );
    }
}
 
export default Projects;