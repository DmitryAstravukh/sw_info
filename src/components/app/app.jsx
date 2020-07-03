import React from 'react';
import s from './app.module.css';
import Header from './../header';
import RandomPlanet from './../random-planet';
import Page from '../page';
import Error from '../error';

export default class App extends React.Component{

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
          <Page />
        </div>
      </React.Fragment>
    )
  }

}