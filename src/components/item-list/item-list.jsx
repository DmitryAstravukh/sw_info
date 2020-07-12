import React from 'react';
import s from './item-list.module.css';


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


export default ItemList;