import React from 'react';
import s from './app.module.css';

import Header from './../header';
import RandomPlanet from './../random-planet';
import Error from '../error';
import SwapiService from '../../services/swapi_service';
import ErrorBoundary from '../error-boundary/error-boundary';


import { PeoplePage, PlanetsPage, StarshipsPage } from './../pages';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

export default class App extends React.Component{

  swapi = new SwapiService();

  state = {
    hasError: false
  }

  componentDidCatch(){
    this.setState({ hasError: true })
  }

  render(){
    if(this.state.hasError){
      return <Error />
    }
   

    return(
      <ErrorBoundary>
        <BrowserRouter>
          <Header/>
          <div className={s.container}>
            <RandomPlanet updateInterval={15000}/>

            <Switch>
              <Route path="/"exact render={() => <h2 style={{color: "#ffe300"}}>Welcome</h2>} />
              <Route path="/people/:id?" component={PeoplePage} />
              <Route path="/planets/:id?" component={PlanetsPage} />
              <Route path="/starships/:id?" component={StarshipsPage} />

              <Route render={() => <h2 style={{color: "red"}}>Page not found</h2>} />
            </Switch>    
            
          </div>
        </BrowserRouter>
      </ErrorBoundary>
    )
  }

}