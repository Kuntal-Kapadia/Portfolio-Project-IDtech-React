import React, {Component } from 'react';
import { Button, Label,  Col, Row  } from 'reactstrap';
import { Control, Form, Errors} from 'react-redux-form';
// import FacebookLogin from 'react-facebook-login';


const required = val => val && val.length;
const maxLength = len => val => !val || (val.length <= len);
const minLength = len => val => val && (val.length >= len);
const isNumber = val => !isNaN(+val);
const validEmail = val => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);


class Register extends Component{
    constructor(props){
        super(props);
        this.state = {
            Name: '',
            phoneNum: '',
            email: '',
            password:'',
            touched: {
                Name: false,
                phoneNum: false,
                email: false,
                password:false
            }
        };
       
        this.handleSubmit = this.handleSubmit.bind(this);
        }
    
     
        handleSubmit(values) {
            console.log('Current state is: ' + JSON.stringify(values));
            // alert('Current state is: ' + JSON.stringify(values));
            this.props.postRegistration(values.Name,values.phoneNum,values.email,values.password);
            this.props.resetRegistrationForm();
        }
   render(){ 
    // const responseFacebook = (response) => {
    //     console.log(response);
    //   }
    return (
        <React.Fragment>
            <div className="container-fluid">
                <div className="row">
                    <div className = "col-12 m-0 p-0 description text-center">
                        <img className="online-header" src={this.props.registerpage.headerimg} alt="Heading" />
                        <div className="centered">
                            <h1>{this.props.registerpage.headertxth}</h1>
                            <p>{this.props.registerpage.headertxtp}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                <div className="col-lg-10 col-xl-9 mx-auto">
                   
                <div class="card card-signin flex-row my-5">
                    <div class="card-img-left d-none d-md-flex"></div>
                    <div className="card-body">
                    <h5 class="card-title text-center">Register</h5>
                        <Form model="registrationForm" onSubmit={values => this.handleSubmit(values)}>
                            <Row className="form-group">
                                <Label htmlFor="Name"></Label>
                                <Col>
                                <Control.text model=".Name" id="Name" name="Name"
                                        placeholder="Name"
                                        className="form-control"
                                        validators={{
                                            required, 
                                            minLength: minLength(2),
                                            maxLength: maxLength(15)
                                        }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".Name"
                                        show="touched"
                                        component="div"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be at least 2 characters',
                                            maxLength: 'Must be 15 characters or less'
                                        }}
                                    />
                                </Col>
                            </Row>
                            
                            <Row className="form-group">
                                <Label htmlFor="phoneNum"></Label>
                                <Col>
                                    <Control.text model=".phoneNum" id="phoneNum" name="phoneNum"
                                        placeholder="Phone number"
                                        className="form-control"
                                        validators={{
                                            required,
                                            minLength: minLength(10),
                                            maxLength: maxLength(15),
                                            isNumber
                                        }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".phoneNum"
                                        show="touched"
                                        component="div"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be at least 10 numbers',
                                            maxLength: 'Must be 15 numbers or less',
                                            isNumber: 'Must be a number'
                                        }}
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="email"></Label>
                                <Col>
                                    <Control.text model=".email" id="email" name="email"
                                        placeholder="Email"
                                        className="form-control"
                                        validators={{
                                            required,
                                            validEmail
                                        }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".email"
                                        show="touched"
                                        component="div"
                                        messages={{
                                            required: 'Required',
                                            validEmail: 'Invalid email address'
                                        }}
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="password"></Label>
                                <Col>
                                    <Control.text model=".password" id="password" name="password"
                                        placeholder="Password"
                                        className="form-control"
                                        validators={{
                                            required,
                                        }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".password"
                                        show="touched"
                                        component="div"
                                        messages={{
                                            required: 'Required',
                                        }}
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col>
                                    <Button className="formbutton btn-large btn-block" type="submit" color="primary">
                                       Register
                                    </Button>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col>
                                    <Button className= "formbutton btn-large btn-block facebook-btn" type="submit" color="primary">
                                    <i class="fa fa-facebook mr-2"></i>Sign up with Facebook
                                    </Button>
                                </Col>
                            </Row>
                            {/* <Row className="form-group">
                                <Col>
                                    <FacebookLogin
                                        appId="823721018162478"
                                        autoLoad={true}
                                        fields="name,email,picture"
                                        callback={responseFacebook}
                                        cssClass="formbutton btn-large btn-block facebook-btn"
                                        icon="fa-facebook-f mr-2"
                                        textButton="Sign Up with Facebook"
                                    />
                                </Col>
                            </Row> */}
                            <Row className="form-group">
                                <Col>
                                    <Button className= "formbutton btn-large btn-block google-btn" type="submit" color="primary">
                                    <i class="fa fa-google mr-2"></i>Sign up with Google
                                    </Button>
                                </Col>
                            </Row>
                    </Form>    
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </React.Fragment>
    )
  }
}


export default Register;