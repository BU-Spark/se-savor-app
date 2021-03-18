import React, { Component, Fragment } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/home/index.js';
import Detail from './pages/detail/index.js';
import Header from './common/header/index.js';
import Login from './pages/login/index.js';
import Footer from './common/footer/index.js';

class App extends Component {
    render() {
        return (
            <Fragment>
                <Provider store = {store}>
                
                <BrowserRouter>
                    <div>
                    <Header />
                        <Route path='/' exact component={Home}></Route>
                        <Route path='/login' exact component={Login}></Route>
                        <Route path='/detail' exact component={Detail}></Route>
                    </div>
                </BrowserRouter>
                <Footer />
                </Provider>
            </Fragment>
        )
    }
}

export default App;