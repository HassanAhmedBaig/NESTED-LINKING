import React from 'react'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Signup from '../../Components/Signup';
import Tempelate from '../../Components/Tempelate';



const Routing = () => {
  return (
    <div>
      <Router>
          <Routes>
              <Route path='/' element={<Signup />}></Route>
              <Route path='tempelate/*' element={<Tempelate />}></Route>
          </Routes>
      </Router>
    </div>
  )
}

export default Routing
