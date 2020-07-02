import React from 'react';
import s from './app.module.css';
import Header from './../header';
import RandomPlanet from './../random-planet';
import ItemList from './../item-list';
import PersonDetails from './../person-details';

export default class App extends React.Component{

  state = {
    selectedPerson: null
  }

  onPersonSelected = (id) => {
    this.setState({
      selectedPerson: id
    })
  }

  render(){
    return(
      <React.Fragment>
        <Header/>
        <div className={s.container}>
          <RandomPlanet />
          <div className="col-4">
            <ItemList onPersonSelected={this.onPersonSelected} />
          </div>
          <div className="col-4">
            <PersonDetails selectedPerson={this.state.selectedPerson}/>
          </div>
        </div>
      </React.Fragment>
    )
  }
}