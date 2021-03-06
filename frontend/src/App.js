import React, { Component, Fragment } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter, HashRouter, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Home from './pages/home/index.js';
import Detail from './pages/detail/index.js';
import Login from './pages/login/login.js';
import SignUp from "./pages/signup/Signup.js";
import MealPlan from './pages/mealplan/index.js';
import Recommendations from './pages/recommendations/index.js';
import Cooking from './pages/cooking/index.js';
import Dashboard from './pages/dashboard/index.js';
import GetUserProfile from './pages/getUserProfile/index.js';
import SideBar from "./common/sidebar/index.js"
import GlobalFonts from './fonts/fonts';

class App extends Component {
    render() {
        return (
            <Fragment>
                <GlobalFonts />
                <Provider store = {store}>
                <AuthProvider>
                <HashRouter>
                    <div>
                    <SideBar />
                        <Route path='/' exact component={Home}></Route>
                        <Route path='/login' exact component={Login}></Route>
                        <Route path='/signup' exact component={SignUp}></Route>
                        <Route path='/getUserProfile' exact component={GetUserProfile}></Route>
                        <Route path='/dashboard' exact component={Dashboard}></Route>
                        <Route path='/detail' exact component={Detail}></Route>
                        <Route path='/mealplan' exact component={MealPlan}></Route>
                        <Route path='/recommendations' exact component={Recommendations}></Route>
                        <Route path='/cooking' exact component={Cooking}></Route>
                    </div>
                </HashRouter>
                </AuthProvider>
                </Provider>
            </Fragment>
        )
    }
}

export default App;