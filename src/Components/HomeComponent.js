import React from 'react';
import { Card, CardImg, CardBody, CardText,CardTitle } from 'reactstrap';
import ControlledCarousel from './ControlledCarouselComponent';

function RenderDirectoryItem({homepagecard}) {
    return (
        <Card>
            <CardImg width="100%" src={homepagecard.image} alt={homepagecard.name} />
            <CardBody>
                <h5><CardTitle>{homepagecard.name}</CardTitle></h5>
                <p><CardText>{homepagecard.description}</CardText></p>
            </CardBody>
        </Card>
    );
}

function Home(props){
   
    const directory = props.homepagecards.map(homepagecard => {
        return (
            <div key={homepagecard.id} className="col-lg-4 mb-4">
                <RenderDirectoryItem homepagecard={homepagecard}  />
            </div>
        );
    });

    return (
        <React.Fragment>
        <div className = "container-fluid">
            <div className="row">
                <div className="col p-0">
                    <ControlledCarousel />
                </div>
            </div>        
        </div>
        <div className="container">
            <div className="row row-content">
                <div className="col-sm-12 text-center">
                    <h2>You get more. A LOT more</h2>
                    <p >iD Tech is the very best experience built around you—your interests, your skill level, your goals for the future. Each program includes an exclusive package designed for your maximum inspiration and long-term success.</p>
                    <h3><strong>Your spring and summer tuition includes:</strong></h3>
                </div>
            </div>
            <div className="row row-content">
                {directory}
            </div>
        </div>
        </React.Fragment>
    );
}

export default Home;