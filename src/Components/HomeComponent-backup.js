import React from 'react';
// import { Card, CardImg, CardBody, CardText,CardTitle } from 'reactstrap';
import ControlledCarousel from './ControlledCarouselComponent';

// function RenderDirectoryItem({homepagecard}) {
//     return (
//         <Card>
//             <CardImg width="100%" src={homepagecard.image} alt={homepagecard.name} />
//             <CardBody>
//                 <h5><CardTitle>{homepagecard.name}</CardTitle></h5>
//                 <p><CardText>{homepagecard.description}</CardText></p>
//             </CardBody>
//         </Card>
//     );
// }

function Home(props){
   
    return (

        <div className="container-fluid px-0" >
            <div className = "row">
                <div className= "col m-0 p-0">
                    <ControlledCarousel homecarouselpages={props.homecarouselpages}/>
                </div>
            </div>
        </div>
        
    );
}

export default Home;