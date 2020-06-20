import React from 'react';
import { Button } from 'reactstrap';
import {Link} from 'react-router-dom';
// import { Loading } from './LoadingComponent';

function RenderSidebar(props){
    
    const directory = props.sidebar.coursespagesidebar.map(sidebaritem => {
        return (
            <React.Fragment> 
                    <div className="col-12">
                      <strong>{sidebaritem.type}</strong>
                    </div>
                    <div className="col-12">
                        {sidebaritem.option1}
                    </div>
                    <div className="col-12">
                        {sidebaritem.option2}
                    </div>
                    <div className="col-12">
                        {sidebaritem.option3}
                    </div>
                    <div className="col-12">
                        {sidebaritem.option4}
                    </div>
                    <div className="col-12">
                        {sidebaritem.option5}
                    </div>
            </React.Fragment>
        )
    });

   
    return(
        <div>
            {directory}
        </div>
    )

}

function RenderSearchResults(props){

    const directory = props.searchresults.coursespagesearchresults.map(searchresultitem => {
        return (
            <React.Fragment>
                <div className="row">
                    <div className="col-12 col-md-4">
                        <img src={searchresultitem.image} className="img-fluid" alt="Minecraft"/>
                    </div>
                    <div class="col-12 col-md-7">
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
                    <div className="col-12 col-md-4 sidebar-canvas" id="sidebar">
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
                    <div className="col-12 col-md-8">
                        <div className="row  row-content justify-content-around ">
                            <RenderSearchResults searchresults={props.searchresults} />
                         </div>
                    </div>
                </div>    
             </div>
        </React.Fragment>
        )
}

export default Courses;