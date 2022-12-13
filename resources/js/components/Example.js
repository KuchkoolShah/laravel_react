import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Topnavbar from './Topnavbar';
import Home from './pages/Home';
import About from './About';
import ViewStudent from './pages/ViewStudent';
import AddStudent from './pages/AddStudent';
import EditStudent from './pages/EditStudent';
import Edit from './pages/Edit';


function Example() {
    return (
       
        <div className="container">
		
              <Router>
                  <Topnavbar/>
                              <Switch>
                               <Route path='/'  exact component={Home} />
                                <Route path='/abouts'   component={About} />                   
                                <Route path="/students" component={ViewStudent} />
                                <Route path="/edit-student/:id" component={EditStudent} />
                                <Route path="/add-students" component={AddStudent} />
                                
                               
                              </Switch>
                </Router>
    
        
        </div>
        
    );
}

export default Example;

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}


