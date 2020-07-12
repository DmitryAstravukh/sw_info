import React from 'react';
import s from './app.module.css';
import Header from './../header';
import RandomPlanet from './../random-planet';
import Row from '../row';
import Error from '../error';
import {Record} from '../item-details/item-details';
import SwapiService from '../../services/swapi_service';

import {
  PersonsList,
  PlanetsList,
  StarshipsList,

  PersonDetails,
  PlanetDetails,
  StarshipDetails
} from './../sw-components';

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

    const personList = <PersonsList>{item => `${item.id}. ${item.name}`}</PersonsList>;
    const personDetails = <PersonDetails>
                            <Record field="gender" label="Gender"/>
                            <Record field="birthYear" label="Birth Year"/>
                            <Record field="eyeColor" label="Eye Color"/>
                          </PersonDetails>;

    const planetList = <PlanetsList>{item => `${item.id}. ${item.name}`}</PlanetsList>;
    const planetDetails = <PlanetDetails>
                            <Record field="population" label="Population"/>
                            <Record field="rotationPeriod" label="Rotation Period"/>
                            <Record field="diameter" label="Diameter"/>
                          </PlanetDetails>

    const starshipList = <StarshipsList>{item => `${item.id}. ${item.name}`}</StarshipsList>;
    const starshipDetails = <StarshipDetails>
                              <Record field="model" label="Model"/>
                              <Record field="manufacturer" label="Manufacturer"/>
                              <Record field="costInCredits" label="Cost In Credits"/> 
                              <Record field="length" label="Length"/> 
                              <Record field="crew" label="Crew"/> 
                              <Record field="passengers" label="Passengers"/> 
                              <Record field="cargoCapacity" label="Cargo Capacity"/> 
                            </StarshipDetails>

    return(
      <React.Fragment>
        <Header/>
        <div className={s.container}>
          <RandomPlanet />

          <Row left={personList} right={personDetails} />
          <Row left={planetList} right={planetDetails} />
          <Row left={starshipList} right={starshipDetails} />
          
          
          {/* <Row getData={this.swapi.getAllPeople}
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
          </Row> */}

        </div>
      </React.Fragment>
    )
  }

}