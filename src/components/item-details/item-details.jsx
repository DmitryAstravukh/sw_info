import React from 'react';
import s from './item-details.module.css';
import SwapiService from '../../services/swapi_service';
import Spinner from '../spinner';
import Error from '../error';

const Record = ({item, field, label}) => {
  return(
    <li className="list-group-item">{label}: {item[field]}</li>
  );
};

export { Record };

export default class ItemDetails extends React.Component{
  
  swapi = new SwapiService();

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

    const {selectedItem, getItemData} = this.props;
    if(!selectedItem){ 
      return;
    }
    
    getItemData(selectedItem)
      .then(item => {
        this.setState({ 
          item,
          loading: false 
        })
      })
  }
  
  render(){

    if(!this.state.item) {
      return (
        <div className="card d-flex">
          <span className={s.not_select_item}>Select person from Person List</span>
        </div>
      )
    }

    const {item, loading, error} = this.state;

    const hasData = !(loading || error);
    const errorMessage = error ? <Error /> : null;
    const spiner = loading ? <Spinner /> : null;
    const content = hasData ? <Card item={item} 
                                    getImgUrl={this.props.getImgUrl}>
                                {this.props.children}
                              </Card> : null;

    return(
      <div className={s.item_details}>
        {errorMessage}
        {spiner}
        {content}
      </div>
    )
  }
}


const Card = ({item, getImgUrl, children}) => {
  const {id, name} = item;

  return(
    <div className="card d-flex w-100">
      <img className={s.card_img}
            src={getImgUrl(id)} 
            alt="img" />
      <div className={s.card_body}>
        <h5 className={s.card_title}>{name}</h5>
      </div>
      <ul className="list-group list-group-flush">
        {React.Children.map(children, child => {
          return React.cloneElement(child, {item});
        })
        }
      </ul>
    </div>
  )
}