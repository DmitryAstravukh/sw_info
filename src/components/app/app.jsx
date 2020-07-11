import React from 'react';
import s from './app.module.css';
import Header from './../header';
import RandomPlanet from './../random-planet';
import Row from '../row';
import Error from '../error';
import {Record} from '../item-details/item-details';
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
          
          <Row getData={this.swapi.getAllPeople}
                getItemData={this.swapi.getPerson}
                getImgUrl={this.swapi.getPersonImg}
                renderItems={item => `${item.id}. ${item.name}`}>
            
            <Record field="gender" label="Gender"/>
            <Record field="birthYear" label="Birth Year"/>
            <Record field="eyeColor" label="Eye Color"/> 
          </Row>

          <Row getData={this.swapi.getAllPlanets}
                getItemData={this.swapi.getPlanet}
                getImgUrl={this.swapi.getPlanetImg}
                renderItems={item => `${item.id}. ${item.name}`}>
            
            <Record field="population" label="Population"/>
            <Record field="rotationPeriod" label="Rotation Period"/>
            <Record field="diameter" label="Diameter"/> 
          </Row>

          <Row getData={this.swapi.getAllStarships}
                getItemData={this.swapi.getStarship}
                getImgUrl={this.swapi.getStarshipImg}
                renderItems={item => `${item.id}. ${item.name}`}>
            
            <Record field="model" label="Model"/>
            <Record field="manufacturer" label="Manufacturer"/>
            <Record field="costInCredits" label="Cost In Credits"/> 
            <Record field="length" label="Length"/> 
            <Record field="crew" label="Crew"/> 
            <Record field="passengers" label="Passengers"/> 
            <Record field="cargoCapacity" label="Cargo Capacity"/> 
          </Row>

        </div>
      </React.Fragment>
    )
  }

}