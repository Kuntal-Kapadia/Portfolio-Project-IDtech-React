import React from 'react';
import { Card, CardImg, CardBody, CardText,CardTitle } from 'reactstrap';


function RenderCarouselItem({homecarouselpage}) {
    return (
        <Card>
            <CardImg width="100%" src={homecarouselpage.image} alt={homecarouselpage.name} />
            <CardBody>
                <h5><CardTitle>{homecarouselpage.name}</CardTitle></h5>
                <p><CardText>{homecarouselpage.description}</CardText></p>
            </CardBody>
        </Card>
    );
}

function ControlledCarousel(props){
    
    const Carouseldirectory = props.homecarouselpages.map(homecarouselpage => {
        return (
            <div key={homecarouselpage.id} className="col-lg-4 mb-4">
                <RenderCarouselItem homecarouselpage={homecarouselpage}  />
            </div>
        );
    });
    return(    
        <div className="container">
            <div className="row row-content">                    
                {Carouseldirectory}
            </div>
        </div>

        )
}
export default ControlledCarousel;