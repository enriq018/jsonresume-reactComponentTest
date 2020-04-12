import React from 'react';
import TemplatePaper from './templateComponents/paper';

// import mockData from '../mockData'
class ResumeWrapper extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      selectedTemplate: this.props.location.state.name,
      resumeData: this.props.location.state.resumeData
    }
    this.goBack = this.goBack.bind(this);
  }
  goBack(){
    this.props.history.goBack();
  }

  render() {
    const resumeTemplate = <TemplatePaper data={this.state.resumeData}/>;
    return (
      <React.Fragment>
        <button onClick={()=> this.goBack()}> Go Back</button>
        {resumeTemplate}
      </React.Fragment>
    )
  }
}

export default ResumeWrapper;