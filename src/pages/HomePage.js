import React from 'react';

import Landing from '../components/Landing';
import DemoContainer from '../components/DemoContainer';
import paper from '../assets/templates/paper.jpeg';

// const DemoTemplate = () => (
//   <div className="col-md-4 p-3">
//     <div className="card box-shadow">
//       <img className="card-img-top" src={paper}/>
//       <div className="card-body">
//         <p className="card-text text-center">Paper Template</p>
//         <div className="d-flex justify-content-between align-items-center">
//           <div className="btn-group">
//             <button type="button" className="btn btn-sm btn-outline-info align-items-center">Use Template</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// )

// const DemoContainer = () => (
//   <div className="py-4 bg-light">
//     <div className="container">
//       <div className="row">
//         <DemoTemplate />
//         <DemoTemplate />
//         <DemoTemplate />
//         <DemoTemplate />
//         <DemoTemplate />
//         <DemoTemplate />
//       </div>
//     </div>
//   </div>
// )



const HomePage = () => (
  <React.Fragment>
    <Landing/>
    <DemoContainer/>
  </React.Fragment>
)

export default HomePage;