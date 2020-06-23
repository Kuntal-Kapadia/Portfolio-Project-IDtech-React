import React, {Component} from 'react';
import { Button } from 'reactstrap';
import {Link} from 'react-router-dom';
import { Loading } from './LoadingComponent';
import Checkbox from './Checkbox';

class RenderSidebar extends Component{

componentWillMount = () => {
    this.selectedCheckboxes = new Set();
  }

  toggleCheckbox = label => {
    if (this.selectedCheckboxes.has(label)) {
      this.selectedCheckboxes.delete(label);
    } else {
      this.selectedCheckboxes.add(label);
    }
  }

  handleFormSubmit = formSubmitEvent => {
    formSubmitEvent.preventDefault();

    for (const checkbox of this.selectedCheckboxes) {
      console.log(checkbox, 'is selected.');
    }
  }

  createCheckbox = label => (
    <Checkbox
            label={label}
            handleCheckboxChange={this.toggleCheckbox}
            key={label}
        />
    
  )

  createCheckboxes = (items) => (  
        items.map(this.createCheckbox)     
  )
    


  render() {
      const directory=  this.props.sidebar.coursespagesidebar.map(filter=>{
        return (
            <React.Fragment>
            <div className="col"><strong>{filter.name}</strong></div>
                {this.createCheckboxes(filter.checkboxes)}
            </React.Fragment>
        )
        });
    return (
        <div className="col-sm-12">
            <form onSubmit={this.handleFormSubmit}>
              {directory}
            
              <button className="btn btn-default" type="submit">Save</button>
            </form>
        </div>
    );
  }
}


function RenderSearchResults(props){

    const directory = props.searchresults.coursespagesearchresults.map(searchresultitem => {
        return (
            <React.Fragment>
                <div className="row">
                    <div className="col-12 col-md-4">
                        <img src={searchresultitem.image} className="img-fluid" alt="Minecraft"/>
                    </div>
                    <div className="col-12 col-md-7">
                        <span className="course-virtual-badge">{searchresultitem.location}</span>
                        <Link to="/courses" className="course-name">{searchresultitem.title}</Link>
                        <span className="course-details">
                            <div>{searchresultitem.filter}</div>
                            <div>{searchresultitem.ages}</div>
                            <div>{searchresultitem.level}</div>
                            <div>{searchresultitem.gender}</div>                                    
                            <div>{searchresultitem.session}</div>
                            <div>{searchresultitem.duration}</div>
                        </span>
                    </div>
                </div>    
            </React.Fragment>    
        )
        });        
        if (props.searchresults.isLoading) {
            return (
                <div className="container">
                    <div className="row">            
                        <Loading />
                    </div>
                </div>
            );
        }
        if (props.searchresults.errMess) {
            return (
                <div className="container">
                    <div className="row"> 
                        <div className="col">
                            <h4>{props.searchresults.errMess}</h4>
                        </div>
                    </div>
                </div>
            );
        }
    return (

        <div>
            {directory}
        </div>
        )

}


function Courses(props){

    return (
        <React.Fragment>
            <div className="container-fluid">
                <div className="row">
                    <div className = "row m-0 p-0 description text-center">
                        <img className="online-header" src={props.coursespage.headerimg} alt="Heading" />
                        <div className="centered">
                            <h1>{props.coursespage.headertxth}</h1>
                            <p>{props.coursespage.headertxtp}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row row-content">
                    <div className="row">
                        <h3>Fuel your passion with our innovative tech courses</h3>
                        <p>Curious about AI? Dream of launching your own indie game studio? Love Minecraft? Have an eye for design? Whatever your passion,&nbsp;our proprietary curriculum takes you from total beginner to college-bound pro. With our exclusive lineup of courses in&nbsp;
                            <a href="courses.html">Coding</a>,&nbsp;<a href="courses.html">Robotics</a>&nbsp;,<a href="courses.html">Game Dev</a>&nbsp;and <a href="courses.html">Creative Arts,</a>&nbsp;you'll hone an impressive skillset, flex your creativity,&nbsp;and&nbsp;experiment with the newest and best tools from Adobe, Epic Games, Nvidia, LEGO, Roblox, and more.&nbsp; </p>
                    </div>
                </div>
                <div className="row row-content">
                    <div className="row">
                        <h3>Course Lineup</h3>
                    </div>
                </div>    
                <div className="row">
                    <div className="col-4">
                        <h5><strong>The type of experience I want:</strong></h5>
                    </div>
                    <div className="col-7">
                        <Button color="success" className="Button btn btn-lg">Online Experience</Button>
                        <span>                </span>
                        <Button color="success" className="Button btn btn-lg"> On-Campus Experience</Button>
                    </div>
                </div>       
            </div>         
            <div className="container">
                <div className="row row-content">
                    <div className="col-12 col-md-3 sidebar-canvas" id="sidebar">
                        <div className="row">
                            <div className="col-12">
                                <h3>Filter courses</h3>
                                <div className="reset-all" id="reset-all">
                                    <a href="">Reset filter</a>
                                </div>
                            </div>
                        </div>    
                        <div className="row">
                            <RenderSidebar sidebar={props.sidebar}/>
                        </div>
                    </div>
                    <div className="col-12 col-md-9">
                        <div className="row  row-content ">
                            {/* <RenderSearchResults searchresults={props.searchresults} /> */}
                         </div>
                    </div>
                </div>    
             </div>
        </React.Fragment>
        )
}

export default Courses;