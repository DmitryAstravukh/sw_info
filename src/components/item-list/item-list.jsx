import React from 'react';
import s from './item-list.module.css';
import SwapiService from './../../services/swapi_service';
import Spinner from './../spinner';
import Error from './../error';


export default class ItemList extends React.Component{
  
  state = {
    itemList: null,
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
    const {getData} = this.props;
    getData()
      .then(itemList => {    
        this.setState({
          loading: false,
          itemList
        })
      })
      .catch(this.onError)
  }

  

  render(){
    
    const {itemList, loading, error} = this.state;
  
    const hasData = !(loading || error);

    const errorMessage = error ? <Error /> : null;
    const spiner = loading ? <Spinner /> : null;
    const content = hasData ? <List itemList={itemList} 
                                    onItemSelected={this.props.onItemSelected}>
                                {this.props.children}
                              </List> : null;

    return(
      <div className={s.all_person_container}>
        {errorMessage}
        {spiner}
        {content}
      </div>
    )
      
  }
}

const List = ({itemList, onItemSelected, children}) => {
  const items = itemList.map((item) => {
    const {id} = item;
    const label = children(item);
    return (
      <li className="list-group-item"
          key={id}
          onClick={() => onItemSelected(id)}>
        {label}
      </li>
    )
  })
  return (
    <ul className="item-list list-group w-100 h-100">
      {items}
    </ul>
  )
}