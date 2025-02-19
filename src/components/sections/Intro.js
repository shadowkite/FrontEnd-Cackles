import React from 'react';
import styled from 'styled-components';
import Unrevealed from '../Unrevealed';
import Mint from "../Mint";

const Section = styled.section`
    min-height: 100vh;
    width: 100%;
    background-color: ${props => props.theme.body};
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
`;

const Container = styled.div`
    width: 80%;
    margin: 0 auto;
    
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 64em) {
        width: 85%;
    }

    @media (max-width: 48em) {
        flex-direction: column-reverse;
        width: 100%;
        &>*:first-child{
            width: 100%;
            margin-top: 2rem;
        }
    }
`;

const Box = styled.div`
    width: 70%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; 
    float: inline-start;
`;

const TextMid = styled.h2`
    margin-bottom: 10px;
    align-self: flex-start;
    font-size: ${props => props.theme.fontxxxl};
    color: ${props => props.theme.text};

    @media (max-width: 70em) {
        font-size: ${props => props.theme.fontxxl};
    }

    @media (max-width: 48em) {
        align-self: center;
        text-align: center;
    }

    @media (max-width: 40em) {
        width: 90%;
    }
`;

const TextSmall = styled.h2`
    align-self: flex-start;
    font-size: ${props => props.theme.fontxl};

    @media (max-width: 70em) {
        font-size: 1.5em;
    }

    @media (max-width: 48em) {
        align-self: center;
        text-align: center;
    }

    @media (max-width: 40em) {
        width: 90%;
    }
`;

const Intro = () => {
    return (
        <Section id="intro">  
            <Container>
                <Box> <Unrevealed /> </Box>
                <Box>
                    <TextMid>
                        Who are the Cackles?
                    </TextMid>
                    <TextSmall>
                        Cackles are a NFT collection on the SmartBCH blockchain consisting of 8888 Chickens each having it's own unique properties.
                        <br /><br />
                        <p>Minting of Cackles is absolutely free with a fee of 0.001 BCH ($0.2) to prevent Spammers.</p>
                    </TextSmall>
                    <Mint />
                </Box>
            </Container>
        </Section>
    )
}

export default Intro