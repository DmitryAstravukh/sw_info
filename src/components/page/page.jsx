import React from 'react';
import s from './page.module.css';
import PersonDetails from '../person-details';
import ItemList from '../item-list';
import ErrorBoundary from '../error-boundary/error-boundary';

export default class Page extends React.Component{
  
  state = {
    selectedItem: null
  }

  onItemSelected = (id) => {
    this.setState({
      selectedItem: id
    })
  }
  
  render(){
    return(
      <div className="row w-100 mb-2 justify-content-center">
        <div className="col-5 col-sm-6 col-md-5 col-lg-4">
          <ErrorBoundary>
            <ItemList onItemSelected={this.onItemSelected} 
                      getData={this.props.getData}>
              {this.props.renderItems}
            </ItemList>
          </ErrorBoundary>
        </div>
        <div className="col-7 col-sm-6 col-md-5 col-lg-4">
          <ErrorBoundary>
            <PersonDetails selectedItem={this.state.selectedItem}/>
          </ErrorBoundary>
        </div>
      </div>
    )
  }
}