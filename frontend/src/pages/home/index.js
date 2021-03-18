import React, { Component } from 'react';
import { HomeWrapper, BodyText, TextWrapper,Button } from './style';
class Home extends Component {
    render() {
        return (
            <HomeWrapper>
                <TextWrapper>
                    <BodyText>The meal kit everyone</BodyText>
                    <BodyText>relies on</BodyText>
                    <Button>Learn More</Button>
                </TextWrapper>
            </HomeWrapper>
        )
    }
}

export default Home;