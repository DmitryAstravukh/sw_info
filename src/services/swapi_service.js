export default class SwapiService{
  #BASE_URL = 'https://swapi.dev/api/';

  getResourse = async (url) => {
    const res = await fetch(`${this.#BASE_URL}${url}`);
    if(!res.ok){
      throw new Error(`Could not fetch ${url}, received ${res.status}`);
    }
    return await res.json();
  }

  getAllPeople = async () => {
    const res = await this.getResourse('people/');
    return await res.results.map(this._transformPerson);
  }

  getPerson = async (id) => {
    const person = await this.getResourse(`people/${id}/`);
    return this._transformPerson(person);
  }

  getAllPlanets = async () => {
    const res = await this.getResourse('planets/');
    return await res.results.map(this._transformPlanet);
  }

  getPlanet = async (id) => {
    const planet = await this.getResourse(`planets/${id}/`);
    return this._transformPlanet(planet);
  }

  getAllStarships = async () => {
    const res = await this.getResourse('starships/');
    return await res.results.map(this._transformStarship);
  }

  getStarship = async (id) => {
    const starship = await this.getResourse(`starships/${id}/`);
    return this._transformStarship(starship);
  }

  _getIdFromUrl = (url) => {
    const idRegexp = /\/([0-9]*)\/$/;
    return url.match(idRegexp)[1];
  }

  _transformPlanet = (planet) =>{  
    return {
      id: this._getIdFromUrl(planet.url),
      name: planet.name,
      population: planet.population,
      rotationPeriod: planet.rotation_period,
      diameter: planet.diameter
    }
  }

  _transformStarship = (starship) =>{  
    return {
      id: this._getIdFromUrl(starship.url),
      name: starship.name,
      model: starship.model,
      manufacturer: starship.manufacturer,
      costInCredits: starship.costInCredits,
      length: starship.length,
      crew: starship.crew,
      passengers: starship.passengers,
      cargoCapacity: starship.cargoCapacity
    }
  }

  _transformPerson = (person) =>{  
    return {
      id: this._getIdFromUrl(person.url),
      name: person.name,
      gender: person.gender,
      birthYear: person.birth_year,
      eyeColor: person.eye_color
    }
  }
}