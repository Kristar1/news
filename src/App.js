import React from 'react'
import Navbar from './Components/Navbar'
import News from './Components/News'
import LoadingBar from 'react-top-loading-bar'
import { useState } from 'react'

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

const App =()=> {
  const [progress, setProgress] = useState(0)
  
  
    return (
      <div>
        <Router>
        <Navbar />
      <LoadingBar
      height={4}
        color='#1da3d8'
        progress={progress}/>
       
        <Routes>
          <Route  exact path="/"   element={ <News setProgress={setProgress}  key="general" pageSize={6} country="in" category="general"  heading="Top Headlines" />}>
          </Route>

          <Route  exact path="/business"   element={<News setProgress={setProgress}   key="business" pageSize={6} country="in" category="business" heading="Business Headlines" />}>
          </Route>

          
          <Route  exact path="/entertainment"  element={<News setProgress={setProgress}    key="entertainment" pageSize={6} country="in" category="entertainment" heading=" Entertainment Headlines" />}>
          </Route>
        
          <Route  exact path="/health"  element={<News setProgress={setProgress}     key="health" pageSize={6} country="in" category="health" heading="Health News" />}>

          </Route>
          <Route  exact path="/science"  element={ <News setProgress={setProgress}   key="science" pageSize={6} country="in" category="science" heading="Science News" />}>
          </Route>
          <Route  exact path="/sports"  element={ <News setProgress={setProgress}    key="sports" pageSize={6} country="in" category="sports" heading="Sports Headlines" />}>
       
          </Route>
          <Route  exact path="/technology"   element={   <News setProgress={setProgress}     key="technology" pageSize={6} country="in" category="technology" heading="Tech News" />}>
          </Route>
     

         
        </Routes>
        </Router>
      </div>

    )
    }

export default App