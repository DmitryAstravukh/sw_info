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
    if(this.props.selectedItem !== prevProps.selectedItem){
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
    this.setState({ //some bullshit
      loading: true 
    });

    const {selectedItem} = this.props;
    if(!selectedItem){ 
      return;
    }
    
    this.swapi.getPerson(selectedItem)
      .then(person => {
        this.setState({ 
          person,
          loading: false 
        })
      })
  }
  
  render(){

    if(!this.state.person) {
      return (
        <div className="card d-flex">
          <span className={s.not_select_person}>Select person from Person List</span>
        </div>
      )
    }

    const {person, loading, error} = this.state;

    const hasData = !(loading || error);
    const errorMessage = error ? <Error /> : null;
    const spiner = loading ? <Spinner /> : null;
    const content = hasData ? <Card item={person} /> : null;


    return(
      <div className={s.person_details}>
        {errorMessage}
        {spiner}
        {content}
      </div>
    )
  }
}

const Card = ({item}) => {
  const {id, name, gender, birthYear, eyeColor} = item;

  return(
    <div className="card d-flex w-100">
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