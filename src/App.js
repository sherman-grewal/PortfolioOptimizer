import React, { Component } from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import './App.css';
import Nav from './Components/Nav';
import Home from './Page/Home';
import {Team1} from './Page/Submission';

class App extends Component {
  renderTeam({match}){
    // var arr=[1,2,3,3,4,5,6,7,8,9,10];
    var teamComponentArr = [Team1];
    const Team = teamComponentArr[match.params.id - 1];
    return <div>
        <Team />
      </div>
  }
  render() {
    return (
      <div className="App">
        <HashRouter>
          <div className='container'>
            <Nav />
            <Switch>
              <Route path={`/submission/team/:id`} component={this.renderTeam}/>
              <Route exact path={`/`} component={Home} />


              <Route render={function () {
                return <p>Not Found</p>
              }} />
            </Switch>
          </div>
        </HashRouter>
      </div>
    );
  }
}

export default App;
