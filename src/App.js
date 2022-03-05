import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './components/home/home';
import Projects from './components/projects/projects';
import Contact from './components/contact/contact';
import About from './components/about/about';
import Resume from './components/resume/resume';
import Nav from './components/nav/nav';
import { Switch } from 'react-router-dom';
import './app.scss';

function App() {
  return (
    <div className="App">
      <Router>
        <Nav></Nav>
        <div className='container'>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/about">
              <About></About>
            </Route>
            <Route exact path="/projects">
              <Projects></Projects>
            </Route>
            <Route exact path="/contact">
              <Contact></Contact>
            </Route>
            <Route exact path="/resume">
              <Resume></Resume>
            </Route>
          </Switch>
          
        </div>
        
      </Router>
    </div>
  );
}

export default App;
