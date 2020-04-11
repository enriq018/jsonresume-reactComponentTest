import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import TemplatePaper from './templateComponents/paper'

import './App.css';
import axios from 'axios';
import htmlToImage from 'html-to-image';

import paper from './images/templates/paper.jpeg';


import mockData from './mockData.js';
// import mockHtml from './mockHtml.js';
// const themes = ['Elegant', 'Paper', 'Kendall', 'Flat', 'Modern', 'Classy', 'Class', 'Short', 'Kwan', 'OnePage', 'Spartan', 'Stackoverflow']
const themes = ['Paper', 'Paper', 'Paper']

const getRandomArbitrary = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
}


const Nav = () => (
  <div className="collapse bg-dark resume-home-landing-navbar-dropdown" id="navbarHeader">
    <div className="container">
      <div className="row">
        <div className="col-md-7 py-4">
          <h4  className="text-white">About</h4>
          <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
      </div>
    </div>
  </div>
)
const LandingMain = () => (
  <div className="text-center py-5 resume-home-landing-container" >
    <div className="container">
      <div className="row my-5 justify-content-center">
        <div className="col-md-9">
          <h1 className="resume-home-landing-title font-weight-bold">Welcome to our Resume Builder!</h1>
          <p className="lead text-white">You can create a resume using one of our templates.</p>
          <Link to="/form">          
            <a href="#" className="btn btn-primary m-2 shadow">Create Resume</a> 
          </Link>
          <Link to="/templates">          
            <a href="#" className="btn btn-primary m-2 shadow">View Saved Resumes</a>
          </Link>

        </div>
      </div>
    </div>
  </div>
)

const DemoContainer = () => (
  <div className="py-4 bg-light">
    <div className="container">
      <div className="row">
        <DemoTemplate />
        <DemoTemplate />
        <DemoTemplate />
        <DemoTemplate />
        <DemoTemplate />
        <DemoTemplate />
      </div>
    </div>
  </div>
)

const TemplateModalItem = () => (
  <div className="col-md-4 p-3">
    <img className="card-img-top card-hover" src={paper}/>
  </div>     
)

const TemplateModal = () => (
  <div className="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered   mw-100 w-75" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLongTitle">Select A Resume</h5>
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body">
          <div className="row">
            <TemplateModalItem/>
            <TemplateModalItem/>
            <TemplateModalItem/>
            <TemplateModalItem/>
            <TemplateModalItem/>
            <TemplateModalItem/>
          </div>                    
        </div>
      </div>
    </div>
  </div>
)

const TemplateModal2 = () => (
  <div className="modal fade" id="exampleModalCenter2" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered   mw-100 w-75" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLongTitle">Select A Resume2</h5>
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body">  
          <div className="row">
            
          <TemplatePaper/>
          </div>                    
        </div>
      </div>
    </div>
  </div>
)

const FormLeft = () => (
  <div className="col-md-3 col-xs-12 register-left">
    <img className="shadow register-selected-image" src={paper} alt=""/>
    <h4>Selected Template:</h4>
    <h5>TEMPLATE NAME</h5>
    <p>You are minutes away from creating your own resume!</p>
    <input className="shadow" type="submit" name="" value="Change Template"  data-toggle="modal" data-target="#exampleModalCenter"/>
    <Link to="/resume">          
      <input className="shadow" type="submit" name="" value="Create Resume"/>
    </Link>
      <TemplateModal/>
      {/* <TemplateModal2/> */}
  </div>
)

const FormBasic = () => (
  <div className="col-md-6">
    <div className="form-group">
      <h6 className="text-center font-weight-bold">Personal Info</h6>
      <input type="text" className="form-control" placeholder="Name *" value="" />
    </div>
    <div className="form-group">
      <input type="text" className="form-control" placeholder="Email *" value="" />
    </div>
    <div className="form-group">
      <input type="text" className="form-control" placeholder="Phone # *" value="" />
    </div>
    <hr/>
    
  </div>
)

const FormAddress = () => (
  <div className="col-md-6">
    <h6 className="text-center font-weight-bold">Address</h6>
    <div className="form-group">
      <input type="text" className="form-control" placeholder="Address *" value="" />
    </div>
    <div className="form-group">
      <input type="text" className="form-control"  placeholder="City *" value="" />
    </div>
    <div className="form-group">
      <input type="text" className="form-control" placeholder="ZipCode *" value="" />
    </div>
    <div className="form-group">
      <input type="text" className="form-control" placeholder="State *" value="" />
    </div>
    <hr/>
    <h6 className="text-center font-weight-bold">Education</h6>
    <div className="form-group">
      <input type="text" className="form-control" placeholder="Institution *" value="" />
    </div>
    <div className="form-group">
      <input type="text" className="form-control" placeholder="Area *" value="" />
    </div>
    <div className="form-group">
      <input type="text" className="form-control"  placeholder="Study Type (Bachelor) *" value="" />
    </div>
    <div className="form-group">
      <input type="text" className="form-control"  placeholder="Start Date *" value="" />
    </div>
    <div className="form-group">
      <input type="text" className="form-control" placeholder="End Date *" value="" />
    </div>
  </div>
)

const FormFixMeLater = () => (
  <div className="row register-form-work">
    <div className="col-md-12">
      <h6 className="text-center font-weight-bold">Work Experience</h6>
      <p >Job 1</p>
      <div className="form-group">
        <input type="text" className="form-control" placeholder="Company *" value="" />
      </div>
      <div className="form-group">
        <input type="text" className="form-control" placeholder="Position *" value="" />
      </div>
      <div className="form-group">
        <input type="text" className="form-control"  placeholder="Start Date *" value="" />
      </div>
      <div className="form-group">
        <input type="text" className="form-control"  placeholder="End Date *" value="" />
      </div>
      <div className="form-group">
        <input type="text" className="form-control" placeholder="Label *" value="" />
      </div>
      <br/>
      <p >Job 2</p>
      <div className="form-group">
        <input type="text" className="form-control" placeholder="Company *" value="" />
      </div>
      <div className="form-group">
        <input type="text" className="form-control" placeholder="Position *" value="" />
      </div>
      <div className="form-group">
        <input type="text" className="form-control"  placeholder="Start Date *" value="" />
      </div>
      <div className="form-group">
        <input type="text" className="form-control"  placeholder="End Date *" value="" />
      </div>
      <div className="form-group">
        <input type="text" className="form-control" placeholder="Label *" value="" />
      </div>
    </div>
  </div>
    
)

const FormRight = () => (
  <div className="col-md-9 col-xs-12 register-right shadow" id="style-5">
    <div className="tab-content" id="myTabContent">
      <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
        <h5 className="register-heading">USERNAME's Resume Information</h5>
        <div className="row register-form">
          <FormBasic/>
          <FormAddress/>
          <FormFixMeLater/>
        </div>
      </div>
    </div>
  </div>
)

const FormContainer = () => (
  <div className="container register">
    <div className="row">
      <FormLeft/>
      <FormRight/>
    </div>
  </div>
)



const DemoTemplate = () => (
  <div className="col-md-4 p-3">
    <div className="card box-shadow">
      <img className="card-img-top" src={paper}/>
      <div className="card-body">
        <p className="card-text">ClassName Template</p>
        <div className="d-flex justify-content-between align-items-center">
          <div className="btn-group">
            <button type="button" className="btn btn-sm btn-outline-info align-items-center">Use Template</button>
          </div>
        </div>
      </div>
    </div>
  </div>
)

const HomePage = () => (
  <React.Fragment>
  <Nav/>
  <LandingMain />
  <DemoContainer/>

    {/* <TemplatePaper data={mockData}/> */}

  <hr/>
  {/* <FormContainer/> */}
  <hr/>
  <div className="container">
    {/* <div dangerouslySetInnerHTML={{__html: resume}} /> */}
  </div>
</React.Fragment>
)

const Test = () => (
  <div>
    {/* <h1>We can add stuff here</h1> */}
    <TemplatePaper data={mockData}/>
  </div>
)





//////////////////////////////////////////////////////////////////////////////////


// add form link and use that render thing to pass state 
const AppPresentation = ({resume}) => (
  <Router>
      <Route path={"/test"} exact={true} component={Test}/>

    <Route path={"/"} exact={true} component={HomePage}/>
    <Route path={"/templates"} exact={true} component={DemoContainer}/>
    <Route path={"/form"} exact={true} component={FormContainer}/>
    <Route path={"/resume"} exact={true} render={() => (
      // <div dangerouslySetInnerHTML={{__html: resume}} />
      <Test/>
    )}/>


  </Router>      
)

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      body: '',
    }
  }

  componentDidMount() {
    const context = this;
    const theme = themes[getRandomArbitrary(0, themes.length)] 
    console.log(theme)
    axios.post(`https://themes.jsonresume.org/theme/${theme}`, {
      resume: mockData
      })
      .then((response) => {
        console.log(response)
        
        context.setState({body: response.data})
      })
      .catch((error) => {
        console.log(error);
      });
    }

  render() {
    return (
      <AppPresentation resume={this.state.body}/>
    );
  }
}

export default App;
