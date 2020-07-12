import React from 'react';
// import s from './page.module.css';
import ErrorBoundary from '../error-boundary/error-boundary';

export default class Row extends React.Component{
  
  state = {
    selectedItem: null
  }

  onItemSelected = (id) => {
    this.setState({
      selectedItem: id
    })
  }
  
  // render(){
  //   return(
  //     <div className="row w-100 mb-2 justify-content-center">
  //       <div className="col-5 col-sm-6 col-md-5 col-lg-4">
  //         <ErrorBoundary>
  //           <ItemList onItemSelected={this.onItemSelected} 
  //                     getData={this.props.getData}>
  //             {this.props.renderItems}
  //           </ItemList>
  //         </ErrorBoundary>
  //       </div>
  //       <div className="col-7 col-sm-6 col-md-5 col-lg-4">
  //         <ErrorBoundary>
  //           <ItemDetails selectedItem={this.state.selectedItem}
  //                        getItemData={this.props.getItemData}
  //                        getImgUrl={this.props.getImgUrl}>
  //             {this.props.children}
  //           </ItemDetails>
  //         </ErrorBoundary>
  //       </div>
  //     </div>
  //   )
  // }

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