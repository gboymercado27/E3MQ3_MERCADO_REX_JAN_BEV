
import './App.css';
import About from './Components/About';
import Home from './Components/Home';
import Nav from './Components/Nav';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


function App() {
  return (
    <Router>
    <div className="container">
      <Nav user = {'gboymercado27@gmail.com'}/>
      <Switch>
        <Route path = '/home' component={Home}/>
        <Route path = '/about'exact component={About}/>

      </Switch>
    </div>
    </Router>
  );
}

export default App;
