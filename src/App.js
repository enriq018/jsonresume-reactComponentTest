import React from 'react';
// import DefaultResume from '@tjscollins/jsonresume-react-components';
import axios from 'axios';
import './App.css';

// console.log(DefaultResume)
import mockData from './mockData.js';
import mockHtml from './mockHtml.js';
const themes = ['Elegant', 'Paper', 'Kendall', 'Flat', 'Modern', 'Classy', 'Class', 'Short', 'Kwan', 'OnePage', 'Spartan', 'Stackoverflow']
function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}


// console.log(DefaultResume({resumeData:mockData}))

// function App() {
//   return (
      // <div className="resume-main-container">
      //   <div className="resume-left-container">
      //     Resume Builder Goes here
      //   </div>
      //   <div className='resume-right-container'>
      //    <DefaultResume resumeData={mockData} />
      //   </div>
      // </div>
//   );
// }
// const html = 

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
    axios.post(`https://themes.jsonresume.org/theme/` + theme, {
      resume: mockData
      })
      .then(function (response) {
        // console.log(response.data)
        context.setState({body: response.data})
      })
      .catch(function (error) {
        console.log(error);
      });
    }

  render() {
    let context = this;
    // console.log(context.state.body)
    return (


     <div className="resume-main-container">
        <div className="resume-left-container">
        </div>
        <div className='resume-right-container'>
          <div dangerouslySetInnerHTML={{__html: context.state.body}} />
        </div>
      </div>
    )
  }
}

export default App;
