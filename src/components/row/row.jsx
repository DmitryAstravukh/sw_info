import React from 'react';
import PropTypes from 'prop-types';
// import s from './page.module.css';
import ErrorBoundary from '../error-boundary/error-boundary';

export default class Row extends React.Component{
  
  static propTypes = {
    left: PropTypes.node.isRequired,
    right: PropTypes.node.isRequired,
  }

  state = {
    selectedItem: null
  }

  onItemSelected = (id) => {
    this.setState({
      selectedItem: id
    })
  }
 
  render(){
    const {left, right} = this.props;

    return(
      <div className="row w-100 mb-2 justify-content-center">
        <div className="col-5 col-sm-6 col-md-5 col-lg-4">
          <ErrorBoundary>
            { 
              React.cloneElement(left, { onItemSelected: this.onItemSelected }) 
            }
          </ErrorBoundary>
        </div>
        <div className="col-7 col-sm-6 col-md-5 col-lg-4">
          <ErrorBoundary>
            {
              React.cloneElement(right, { selectedItem: this.state.selectedItem }) 
            }
          </ErrorBoundary>
        </div>
      </div>
    )
  }

}