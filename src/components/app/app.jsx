import React from 'react';
import s from './app.module.css';
import Header from './../header';
import RandomPlanet from './../random-planet';

export default class App extends React.Component{
  render(){
    return(
      <React.Fragment>
        <Header/>
        <div className="container">
          <RandomPlanet />
        </div>
      </React.Fragment>
    )
  }
}