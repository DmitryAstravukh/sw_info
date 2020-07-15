//import React from 'react';
import withData from '../hoc/with-data';
import ItemList from './../item-list';
import SwapiService from '../../services/swapi_service';

const swapi = new SwapiService();



const PersonsList = withData(ItemList, swapi.getAllPeople);
const PlanetsList = withData(ItemList, swapi.getAllPlanets);
const StarshipsList = withData(ItemList, swapi.getAllStarships);


export{
  PersonsList,
  PlanetsList,
  StarshipsList
}