import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Topnavbar from './Topnavbar';
import Home from './pages/Home';
import About from './About';
function Example() {
    return (
        <div className="container">
		
  <Router>
      <Topnavbar/>
      <Switch>
       <Route path='/'  exact component={Home} />
        <Route path='/abouts'  exact component={About} />
       
      </Switch>
    </Router>
    
        
        </div>
    );
}

export default Example;

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}

<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css"
  integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor"
  crossorigin="anonymous"
/>
