import React from 'react';
// import DefaultResume from '@tjscollins/jsonresume-react-components';
import axios from 'axios';
import './App.css';
import mockData from './mockData.js';
import { Resume } from 'react-vitae-material-theme';
 
const App = () => (
    <Resume resume={mockData} />
);

export default App;