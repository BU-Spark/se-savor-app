import React, { Component, Fragment } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Home from './pages/home/index.js';
import Detail from './pages/detail/index.js';
import Header from './common/header/index.js';
import Login from './pages/login/login.js';
import SignUp from "./pages/signup/Signup.js";
import Footer from './common/footer/index.js';

class App extends Component {
    render() {
        return (
            <Fragment>
                <Provider store = {store}>
                <AuthProvider>
                <BrowserRouter>
                    <div>
                    <Header />
                        <Route path='/' exact component={Home}></Route>
                        <Route path='/login' exact component={Login}></Route>
                        <Route path='/signup' exact component={SignUp}></Route>
                        <Route path='/detail' exact component={Detail}></Route>
                    </div>
                </BrowserRouter>
                </AuthProvider>
                <footer>
                   <Footer />
                </footer>
                </Provider>
            </Fragment>
        )
    }
}

export default App;