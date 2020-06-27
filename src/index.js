class SwapiService{
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
    return await res.results;
  }

  getPerson = async (id) => {
    return this.getResourse(`people/${id}/`)
  }

  getAllPlanets = async () => {
    const res = await this.getResourse('planets/');
    return await res.results;
  }

  getPlanet = async (id) => {
    return this.getResourse(`planet/${id}/`)
  }

  getAllStarships = async () => {
    const res = await this.getResourse('starships/');
    return await res.results;
  }

  getStarship = async (id) => {
    return this.getResourse(`starships/${id}/`)
  }
}

const swapi = new SwapiService();

swapi.getAllPeople().then(body => {
  console.log(body);
})
