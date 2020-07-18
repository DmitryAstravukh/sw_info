import withDetailsData from '../hoc/with-details-data';
import ItemDetails from './../item-details';
import SwapiService from '../../services/swapi_service';

const swapi = new SwapiService();

const PersonDetails = withDetailsData(ItemDetails, swapi.getPerson, swapi.getPersonImg);
const PlanetDetails = withDetailsData(ItemDetails, swapi.getPlanet, swapi.getPlanetImg);
const StarshipDetails = withDetailsData(ItemDetails, swapi.getStarship, swapi.getStarshipImg);

export{
  PersonDetails,
  PlanetDetails,
  StarshipDetails
}