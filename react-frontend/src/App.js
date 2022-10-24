import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import HomeComponent from './components/HomeComponent';
import updateComponent from './components/updateComponent';

function App() {
  return (
    <div className="App">
      <Router>
          <div className='container-fluid p-0 m-0'>
              <Switch>
                <Route path = "/" exact component={HomeComponent}></Route>
                <Route path = "/home" exact component={HomeComponent}></Route>
                <Route path = "/update/:id" exact component={updateComponent}></Route>
              </Switch>
          </div>
      </Router>
    </div>
  );
}

export default App;
