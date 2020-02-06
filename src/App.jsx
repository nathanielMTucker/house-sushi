import React from 'react';

// import '../public/main.css';
import Header from './Home/Home';
import Contact from './Contact/Contact';
import Menu from './Menu/Menu';
import {HashRouter as Router, Switch, Route} from 'react-router-dom';

class App extends React.Component {
  render(){
    return (
    <Router>
        <Switch>
          <Route path="/" exact component={Header}/>
          <Route path="/contact" component={Contact}/>
          <Route path="/menu" component={Menu}/>
        </Switch>
    </Router>
    );
  }
}

export default App;
