import React from 'react';
import s from './item-details.module.css';

const Record = ({item, field, label}) => {
  return(
    <li className="list-group-item">{label}: {item[field]}</li>
  );
};

export { Record };

const ItemDetails = ( props ) => {

  const { item: { id, name },
          item, 
          getImgUrl, 
          children} = props;

  return(
    <div className={s.item_details}>
      <div className="card d-flex w-100">
        <img className={s.card_img}
              src={ getImgUrl(id) } 
              alt="img" />
        <div className={s.card_body}>
          <h5 className={s.card_title}>{ name }</h5>
        </div>
        <ul className="list-group list-group-flush">
          {React.Children.map(children, child => {
            return React.cloneElement(child, { item });
          })
          }
        </ul>
      </div>
    </div>
  )
  
}


export default ItemDetails;