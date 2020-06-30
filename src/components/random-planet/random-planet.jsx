import React from 'react';
import s from './random-planet.module.css';
import SwapiService from '../../services/swapi_service';
import Spinner from './../spinner';
import Error from './../error';


export default class RandomPlanet extends React.Component{

  state = {
    planet: {},
    loading: true, // visible spinner
    error: false
  }

  constructor(){
    super();
    this.updatePlanet();
  }

  swapi = new SwapiService();

  onPlanetLoaded = (planet) => {
    this.setState({
      planet,
      loading: false,
      error: false
    });
  }

  onError = (error) => {
    this.setState({
      loading: false,
      error: true
    })
  }

  updatePlanet = () => {
    const id = Math.floor(Math.random() * 25) + 2;
    this.swapi.getPlanet(id)
      .then(this.onPlanetLoaded)
      .catch(this.onError);
  }

  render(){
    const {planet, loading, error} = this.state;

    const hasData = !(loading || error);

    const errorMessage = error ? <Error /> : null;
    const spiner = loading ? <Spinner /> : null;
    const content = hasData ? <PlanetView planet={planet} /> : null;
    return(
      <div className={s.container}>
        {errorMessage}
        {spiner}
        {content}
      </div>
    )
  }
}

const PlanetView = ({planet}) => {
  const {id, 
        name, 
        population, 
        rotationPeriod, 
        diameter
  } = planet;

  return(
    <div className={s.data}>

      <div className={s.img}>
        <img src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt="img"/>
      </div>

      <div className={s.description}>
        <h4 className={s.name}>{name}</h4>
        <ul>
          <li>
            population: {population}
          </li>
          <li>
            rotation period: {rotationPeriod}
          </li>
          <li>
            diameter: {diameter}
          </li>
        </ul>
      </div>

    </div> 
  )
}