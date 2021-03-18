import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/home/index.js';
import Detail from './pages/detail/index.js';
import Header from './common/header/index.js';
import Footer from './common/footer/index.js';

class App extends Component {
    render() {
        return (
            <Fragment>
                <Header />
                <BrowserRouter>
                    <div>
                        <Route path='/' exact component={Home}></Route>
                        <Route path='/detail' exact component={Detail}></Route>
                    </div>
                </BrowserRouter>
                <Footer />
            </Fragment>
        )
    }
}

export default App;