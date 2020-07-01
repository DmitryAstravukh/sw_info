import React from 'react';
import s from './person-details.module.css';
import SwapiService from './../../services/swapi_service';
import Spinner from './../spinner';
import Error from './../error';

export default class PersonDetails extends React.Component{
  
  state = {
    loading: true,
    error: false
  }
  
  render(){
    return(
      <div className="card">
        <img className="card-img-top" src="https://www.warungbelajar.com/wp-content/uploads/2018/03/cara-membuat-carousel-dengan-bootstrap.png" alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Cras justo odio</li>
          <li className="list-group-item">Dapibus ac facilisis in</li>
          <li className="list-group-item">Vestibulum at eros</li>
        </ul>
      </div>
    )
  }
}