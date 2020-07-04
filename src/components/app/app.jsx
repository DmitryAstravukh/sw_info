import React from 'react';
import s from './app.module.css';
import Header from './../header';
import RandomPlanet from './../random-planet';
import Page from '../page';
import Error from '../error';
import SwapiService from '../../services/swapi_service';

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
      <React.Fragment>
        <Header/>
        <div className={s.container}>
          <RandomPlanet />
          <Page getData={this.swapi.getAllPeople}
                renderItems={item => item.name}/>
          <Page getData={this.swapi.getAllPlanets}
                renderItems={item => `${item.name} - 1`}/>
          <Page getData={this.swapi.getAllStarships}
                renderItems={item => `${item.name} - 2`}/>
        </div>
      </React.Fragment>
    )
  }

}