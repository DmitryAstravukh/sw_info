import React from 'react';
import s from './app.module.css';
import Header from './../header';
import RandomPlanet from './../random-planet';
import ItemList from './../item-list';

export default class App extends React.Component{
  render(){
    return(
      <React.Fragment>
        <Header/>
        <div className="container">
          <RandomPlanet />
          <div className="col-6">
            <ItemList />
          </div>
          <div className="col-6">

          </div>
        </div>
      </React.Fragment>
    )
  }
}