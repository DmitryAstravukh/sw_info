import React from 'react';
import s from './app.module.css';

import Header from './../header';
import RandomPlanet from './../random-planet';
import Error from '../error';
import SwapiService from '../../services/swapi_service';
import ErrorBoundary from '../error-boundary/error-boundary';


import { PeoplePage, PlanetsPage, StarshipsPage } from './../pages';
import { BrowserRouter, Route } from 'react-router-dom';

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

            <Route path="/people/:id?" component={PeoplePage} />
            <Route path="/planets/:id?" component={PlanetsPage} />
            <Route path="/starships/:id?" component={StarshipsPage} />
            
          </div>
        </BrowserRouter>
      </ErrorBoundary>
    )
  }

}