import React from 'react';
import s from './person-details.module.css';
import SwapiService from './../../services/swapi_service';
import Spinner from './../spinner';
import Error from './../error';

export default class PersonDetails extends React.Component{
  
  swapi = new SwapiService();

  state = {
    person: null,
    loading: true,
    error: false
  }

  componentDidMount(){
    this.updatePerson();
  }

  componentDidUpdate(prevProps){
    if(this.props.selectedPerson !== prevProps.selectedPerson){
      this.updatePerson();
    }
  }

  onError = () => {
    this.setState({
      loading: false,
      error: true
    })
  }

  updatePerson = () => {
    const {selectedPerson} = this.props;
    console.log(selectedPerson);
    if(!selectedPerson){ 
      return;
    } 
    this.swapi.getPerson(selectedPerson)
      .then(person => {
        this.setState({
          loading: false, 
          person 
        })
      })
  }
  
  render(){

    if(!this.state.person) {
      return <span>Select person from Person List</span>
    }

    const {person, loading, error} = this.state;

    const hasData = !(loading || error);
    const errorMessage = error ? <Error /> : null;
    const spiner = loading ? <Spinner /> : null;
    const content = hasData ? <Card item={person} /> : null;


    return(
      <React.Fragment>
        {errorMessage}
        {spiner}
        {content}
      </React.Fragment>
    )
  }
}

const Card = ({item}) => {
  const {id, name, gender, birthYear, eyeColor} = item;

  return(
    <div className="card d-flex">
      <img className={s.card_img}
            src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} 
            alt="character" />
      <div className={s.card_body}>
        <h5 className={s.card_title}>{name}</h5>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">gender: {gender}</li>
        <li className="list-group-item">birthYear: {birthYear}</li>
        <li className="list-group-item">eyeColor: {eyeColor}</li>
      </ul>
    </div>
  )
}