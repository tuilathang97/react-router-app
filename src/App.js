import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { 
  Home, 
  About, 
  Contact,
  ErrorPage
} from './components/page';


function App() {
  return (
    <div className="App">
      <nav>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Users</Link>
            </li>
          </ul>
        </nav>
      <Switch>
        <Route path="/home">
          <Home/>
        </Route>
        <Route path="/about">
          <About/>
        </Route>
        <Route path="/contact">
          <Contact/>
        </Route>
        <Route path="/*">
          <ErrorPage/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
