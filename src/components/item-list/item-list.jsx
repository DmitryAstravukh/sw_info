import React from 'react';
import PropTypes from 'prop-types';
import s from './item-list.module.css';


const ItemList = ({ data, onItemSelected, children }) => {
  
  const items = data.map((item) => {
    const { id } = item;
    const label = children(item);
    return (
      <li className={`list-group-item ${s.interaction}`}
          key={ id }
          onClick={() => { onItemSelected(id) }}>
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

ItemList.defaultProps = {
  onItemSelected: () => {}
}

ItemList.propTypes = {
  onItemSelected: PropTypes.func,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  children: PropTypes.func.isRequired
}

export default ItemList;