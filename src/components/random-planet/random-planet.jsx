import React from 'react';
import s from './random-planet.module.css';

export default class RandomPlanet extends React.Component{
  render(){
    return(
      <div className={s.container}>
        <div className={s.img}>
          <img src="http://cdn9.s.kolorado.ru/products/7/73/739/73992/108_1_8_design.png" alt="img"/>
        </div>
        <div className={s.description}>
          <p className={s.name}>Planet Name</p>
          <ul>
            <li>fffffffff</li>
            <li>ssssssss</li>
            <li>gggggggg</li>
          </ul>
        </div>
      </div>
    )
  }
}