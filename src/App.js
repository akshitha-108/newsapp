//this is app.js
//this is to test twice 
//once again to test the pull without stash

//this is to check stash bu changing locally 
//to change the app.js and get using stash 

import './App.css';

import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import{
  BrowserRouter as Router,

  Route,

  Routes
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
const App =()=> {
  const [progress, setProgress] = useState(0)

  
  


    return (
      <div>
        <Router>
        <Navbar/>
        <LoadingBar
        color='#f11946'
        height={3}
        progress={progress}
         
      />
        <Routes>
        {/* <Route exact path="/general" element={<News setProgress={this.setProgress} key="about" pageSize={5} country="in" category="general" />} /> */}
            <Route exact path="/sports" element={<News setProgress={setProgress} key="sports" pageSize={5} country="in" category="sports" />} />
            <Route exact path="/business" element={<News setProgress={setProgress} key="business" pageSize={5} country="in" category="business" />} />
            <Route exact path="/entertainment" element={<News setProgress={setProgress} key="entertainment" pageSize={5} country="in" category="entertainment" />} />
            <Route exact path="/general" element={<News setProgress={setProgress} key="general" pageSize={5} country="in" category="general" />} />
            <Route exact path="/health" element={<News setProgress={setProgress} key="health" pageSize={5} country="in" category="health" />} />
            <Route exact path="/science" element={<News setProgress={setProgress} key="science" pageSize={5} country="in" category="science" />} />
            <Route exact path="/technology" element={<News setProgress={setProgress} key="technology" pageSize={5} country="in" category="technology" />} />
          </Routes>
        </Router>
      </div>
    )
  }
  export default App;
