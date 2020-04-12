import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import TemplatePaper from './components/templateComponents/paper'

import './App.css';

import HomePage from './pages/HomePage';
import FormPage from './pages/FormPage';
import DemoContainer from './components/DemoContainer';
import ResumeWrapper from './components/ResumeWrapper';

import mockData from './mockData.js';
// import mockHtml from './mockHtml.js';
// const themes = ['Elegant', 'Paper', 'Kendall', 'Flat', 'Modern', 'Classy', 'Class', 'Short', 'Kwan', 'OnePage', 'Spartan', 'Stackoverflow']
const themes = ['Paper', 'Paper', 'Paper']

const getRandomArbitrary = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
}
// make resyme wrapper comppnet !

const Test = () => (
  <div>
    {/* <h1>We can add stuff here</h1> */}
    <TemplatePaper data={mockData}/>
  </div>
)

const AppPresentation = ({data}) => (
  <Router>
    <Route path={"/test"} exact={true} component={Test}/>
    <Route path={"/"} exact={true} component={HomePage}/>
    <Route path={"/templates"} exact={true} component={DemoContainer}/>
    <Route path={"/form"} exact={true} component={FormPage}/>
    {/* <Route path={"/resume"} exact={true} render={() => (
      <Test/>
    )}/> */}
    <Route path={"/resume"} exact={true} component={ResumeWrapper}/>

  </Router>      
)

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      body: 'placeholder',
    }
  }

  componentDidMount() {
    const context = this;

    }

  render() {
    return (
      <AppPresentation data={this.state.body}/>
    );
  }
}

export default App;
