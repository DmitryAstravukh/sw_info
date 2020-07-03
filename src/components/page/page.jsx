import React from 'react';
import s from './page.module.css';
import PersonDetails from '../person-details';
import ItemList from '../item-list';
import Error from '../error';

export default class Page extends React.Component{
  
  state = {
    selectedPerson: null,
    hasError: false
  }

  componentDidCatch(){
    this.setState({ hasError: true })
  }

  onPersonSelected = (id) => {
    this.setState({
      selectedPerson: id
    })
  }
  
  render(){

    if(this.state.hasError){
      return <Error />
    }

    return(
      <div className="row w-100 mb-2 justify-content-center">
        <div className="col-5 col-sm-6 col-md-5 col-lg-4">
          <ItemList onPersonSelected={this.onPersonSelected} />
        </div>
        <div className="col-7 col-sm-6 col-md-5 col-lg-4">
          <PersonDetails selectedPerson={this.state.selectedPerson}/>
        </div>
      </div>
    )
  }
}