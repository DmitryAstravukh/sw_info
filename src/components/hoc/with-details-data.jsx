import React from 'react';
import Spinner from '../spinner';
import Error from '../error';


const withDetailsData = (View, getData, getImgUrl) => {
  return class extends React.Component{
    
    state = {
      item: null,
      loading: true,
      error: false
    }
  
    componentDidMount(){
      this.updateItem();
    }
  
    componentDidUpdate(prevProps){
      if(this.props.selectedItem !== prevProps.selectedItem){
        this.updateItem();
      }
    }
  
    onError = () => {
      this.setState({
        loading: false,
        error: true
      })
    }
  
    updateItem = () => {
      this.setState({ 
        loading: true 
      });
  
      const {selectedItem} = this.props;
      if(!selectedItem){ 
        return;
      }
      
      getData(selectedItem)
        .then(item => {
          this.setState({ 
            item,
            loading: false 
          })
        })
    }

    render(){
      if(!this.state.item) {
        const spanStyle = { padding: '15px 10px' };
        return (
          <div className="card d-flex">
            <span style={spanStyle}>Select person from Person List</span>
          </div>
        )
      }
  
      const {item, loading, error} = this.state;
  
      const hasData = !(loading || error);
      const errorMessage = error ? <Error /> : null;
      const spiner = loading ? <Spinner /> : null;
      const content = hasData ? <View item={item} 
                                      getImgUrl={getImgUrl}>
                                  {this.props.children}
                                </View> : null;
  
      return(
        <React.Fragment>
          {errorMessage}
          {spiner}
          {content}
        </React.Fragment>
      )
    } 
  }
}

export default withDetailsData;