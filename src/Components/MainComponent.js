import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import WhyID from './WhyIDComponent';
import Online from './OnlineComponent';
import Learning from './LearningComponent';
import Virtual from './VirtualComponent';
import Courses from './CoursesComponent';
import { HOMEPAGECARDS } from '../shared/HomePageCards';


import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {
    constructor(props){
        super(props);
        this.state = {
            homepagecards : HOMEPAGECARDS,
       
        };

    }

    render() {
        return (
            <div>
                <Header />
                <Switch>
                    <Route exact path='/home' render={() => <Home homepagecards={this.state.homepagecards} />} /> 
                    <Route exact path='/whyID' component={WhyID} />
                    <Route exact path='/online' component={Online} />
                    <Route exact path='/online/learning' component={Learning} />
                    <Route exact path='/online/virtual' component={Virtual} />
                    <Route exact path='/courses' component={Courses} />
                    <Redirect to='/home' />
                </Switch>
                <Footer />
            </div>
        );
    };
}


export default Main;