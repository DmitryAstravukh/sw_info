import React from 'react';
import Spinner from './../spinner';
import Error from './../error';

const withData = (View, getData) => {
  return class extends React.Component{
      
    state = {
      data: null,
      loading: true,
      error: false
    }

    onError = () => {
      this.setState({
        loading: false,
        error: true
      })
    }

    componentDidMount(){
      getData()
        .then(data => {    
          this.setState({
            loading: false,
            data
          })
        })
        .catch(this.onError)
    }

  
    render(){
      const {data, loading, error} = this.state;
  
      const hasData = !(loading || error);

      const errorMessage = error ? <Error /> : null;
      const spiner = loading ? <Spinner /> : null;
      const content = hasData ? <View {...this.props} data={data}/> : null;
      
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

export default withData;