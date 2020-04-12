import React from 'react'
import { Link } from "react-router-dom";

import paperImage from '../assets/templates/paper.jpeg';
import classyImage from '../assets/templates/classy.jpeg';

const paper = {
  name: 'Paper',
  image: paperImage
}

const classy = {
  name: 'Classy',
  image: classyImage
}
const themes = [paper, classy, paper, classy, paper, classy]


const DemoTemplate = ({themeObject}) => (
  <div className="col-md-4 p-3" id="resume-templates">
    <div className="card box-shadow">
      <img className="card-img-top" src={themeObject.image}/>
      <div className="card-body">
        <p className="card-text">{themeObject.name} Template</p>
        <div className="d-flex justify-content-between align-items-center">
          <div className="btn-group">
          <Link to={{
          pathname: '/form',
          state: {
            selectedTemplate: themeObject
          }
        }}>
            <button type="button" className="btn btn-sm btn-outline-info align-items-center">Use Template</button>

        </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
)

const DemoContainer = () => (
  <div className="py-4 bg-light">
    <div className="container">
      <div className="row">
        {themes.map((el, i) => <DemoTemplate themeObject={el}/>)}
      </div>
    </div>
  </div>
)

export default DemoContainer