import React from 'react';
import { Link } from "react-router-dom";
import mockdata from '../mockData';

import TemplatePaper from '../components/templateComponents/paper'

import paper from '../assets/templates/paper.jpeg';



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

const FormLeft = ({selectedTemplate, goBack}) => {
  console.log("FORM LEFT", selectedTemplate)
return (  
  <div className="col-md-3 col-xs-12 register-left">
    <TemplateModal/>
    <img className="shadow register-selected-image" src={selectedTemplate.image} alt=""/>
    <h4>Selected Template:</h4>
    <h5>{selectedTemplate.name}</h5>
  <button onClick={()=> goBack()}>Return</button>
    <p>You are minutes away from creating your own resume!</p>
    <input className="shadow" type="submit" name="" value="Change Template"  data-toggle="modal" data-target="#exampleModalCenter"/>
    {/* <Link to="/resume">          
      <input className="shadow" type="submit" name="" value="Create Resume"/>
    </Link> */}


    <Link to={{
          pathname: '/resume',
          state: {
            resumeData:mockdata
          }
        }}>
            <input className="shadow" type="submit" name="" value="Create Resume"/>

    </Link>
  </div>)
}

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

const FormPagePresentation = ({selectedTemplate, goBack}) => {
  console.log("FromPagePREse", selectedTemplate)
  return (
  <div className="container register">
    <div className="row">
      <FormLeft selectedTemplate={selectedTemplate} goBack={goBack}/>
      <FormRight/>
    </div>
  </div>
)}


class FormPage extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      userHasSelectedTemplate: false,
      selectedTemplate: this.props.location.state.selectedTemplate,
    }
    this.goBack = this.goBack.bind(this)
  }
  componentDidMount() {

    console.log('FORM PROPS:',this.state.selectedTemplate)
  }

  goBack(){
    this.props.history.goBack();
}
  render() {
    const context = this;
    console.log("FUCK U VALORANTDROP", context.state.selectedTemplate)
    return (
      <FormPagePresentation selectedTemplate={context.state.selectedTemplate} goBack={this.goBack}/>
    )
  }
}
export default FormPage;