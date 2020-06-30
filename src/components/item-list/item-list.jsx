import React from 'react';
import s from './item-list.module.css';
import SwapiService from './../../services/swapi_service';
import Spinner from './../spinner';
import Error from './../error';


export default class ItemList extends React.Component{
  
  swapi = new SwapiService();

  state = {
    peopleList: null,
    loading: true,
    error: false
  }

  onError = () => {
    this.setState({
      loading: false,
      error: true
    })
  }

  componentDidMount(){
    this.swapi.getAllPeople()
      .then(peopleList => {    
        this.setState({
          loading: false,
          peopleList
        })
      })
      .catch(this.onError)
  }

  render(){
    const {peopleList, loading, error} = this.state;
  
    const hasData = !(loading || error);

    const errorMessage = error ? <Error /> : null;
    const spiner = loading ? <Spinner /> : null;
    const content = hasData ? <PeopleList peopleList={peopleList} /> : null;

    return(
      <div className={s.all_person_container}>
        {errorMessage}
        {spiner}
        {content}
      </div>
    )
      
  }
}

const PeopleList = ({peopleList}) => {
  const items = peopleList.map(({id, name}) => {
    return (
      <li className="list-group-item"
          key={id}>
        {name}
      </li>
    )
  })
  return (
    <ul className="item-list list-group w-100 h-100">
      {items}
    </ul>
  )
}