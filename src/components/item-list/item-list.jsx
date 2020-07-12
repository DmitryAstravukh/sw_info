import React from 'react';
import s from './item-list.module.css';
import withData from '../hoc/with-data';
import SwapiService from '../../services/swapi_service';


const ItemList = (props) => {
  
  const {data, onItemSelected, children} = props;
  const items = data.map((item) => {
    const {id} = item;
    const label = children(item);
    return (
      <li className="list-group-item"
          key={id}
          onClick={() => onItemSelected(id)}>
        {label}
      </li>
    )
  })
  return(
    <div className={s.all_person_container}>
      <ul className="item-list list-group w-100 h-100">
        {items}
      </ul>
    </div>
  )    
  
}
const swapi = new SwapiService();

export default withData(ItemList, swapi.getAllPeople);