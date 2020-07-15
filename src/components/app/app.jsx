import React from 'react';
import s from './app.module.css';

import Header from './../header';
import RandomPlanet from './../random-planet';
import Error from '../error';
import SwapiService from '../../services/swapi_service';
import ErrorBoundary from '../error-boundary/error-boundary';


import { PeoplePage, PlanetsPage, StarshipsPage } from './../pages';

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
        <Header/>
        <div className={s.container}>
          <RandomPlanet />

          <PeoplePage />
          <PlanetsPage />
          <StarshipsPage />
          
        </div>
      </ErrorBoundary>
    )
  }

}