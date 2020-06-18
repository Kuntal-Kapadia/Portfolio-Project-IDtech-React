import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import WhyID from './WhyIDComponent';
import Online from './OnlineComponent';
import Learning from './LearningComponent';
import Virtual from './VirtualComponent';
import Courses from './CoursesComponent';
import { fetchHomepagecards, fetchHomepagecarousel, fetchLearningpage, fetchOnlinepage, fetchVirtualpage } from '../redux/ActionCreators';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';


const mapStateToProps = state => {
    return {
        homepagecards: state.homepagecards,
        homepagecarousel : state.homepagecarousel,
        learningpage: state.learningpage,
        onlinepage: state.onlinepage,
        virtualpage: state.virtualpage
    };
};

const mapDispatchToProps = {
    fetchHomepagecards: () => (fetchHomepagecards()),
    fetchHomepagecarousel: ()=> (fetchHomepagecarousel()),
    fetchLearningpage: ()=> (fetchLearningpage()),
    fetchOnlinepage: ()=> (fetchOnlinepage()),
    fetchVirtualpage: ()=> (fetchVirtualpage())
};



class Main extends Component {

    componentDidMount() {
        this.props.fetchHomepagecards();
        this.props.fetchHomepagecarousel();    
        this.props.fetchLearningpage();
        this.props.fetchOnlinepage();   
        this.props.fetchVirtualpage();  
    }


    render() {
        return (
            <div>
                <Header />
                <Switch>
                    <Route exact path='/home' render={() => <Home homepagecards={this.props.homepagecards} homepagecarousel={this.props.homepagecarousel}/>}/> 
                    <Route exact path='/whyID' component={WhyID} />
                    <Route exact path='/online/private' render={() => <Online onlinepage={this.props.onlinepage.onlinepage}/>} />
                    <Route exact path='/online/learning' render={() => <Learning learningpage={this.props.learningpage.learningpage} />} />
                    <Route exact path='/online/virtual' render={() => <Virtual virtualpage={this.props.virtualpage.virtualpage} />} />
                    <Route exact path='/courses' component={Courses} />
                    <Redirect to='/home' />
                </Switch>
                <Footer />
            </div>
        );
    };
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));