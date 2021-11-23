import React, { Component } from 'react';
import { HomeWrapper, BodyText, TextWrapper, Button } from './style';
import Header from '../../common/header/index.js';
import Footer from '../../common/footer/index.js';

class Home extends Component {
    render() {
        return (
            <>
            <Header />
                <HomeWrapper>
                    <TextWrapper>
                        <BodyText>The meal kit everyone</BodyText>
                        <BodyText>relies on</BodyText>
                        <Button>Learn More</Button>
                    </TextWrapper>
                </HomeWrapper>
            <footer>
                <Footer />
            </footer>
            </>
        )
    }
}

export default Home;