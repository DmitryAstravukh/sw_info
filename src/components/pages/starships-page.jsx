import React from 'react';
import Row from '../row';

import { Record } from '../item-details/item-details';
import { StarshipsList, StarshipDetails } from './../sw-components';

const StarshipsPage = () => {
  const starshipList = <StarshipsList>{item => `${item.id}. ${item.name}`}</StarshipsList>;
  const starshipDetails = <StarshipDetails>
                              <Record field="model" label="Model"/>
                              <Record field="manufacturer" label="Manufacturer"/>
                              <Record field="costInCredits" label="Cost In Credits"/> 
                              <Record field="length" label="Length"/> 
                              <Record field="crew" label="Crew"/> 
                              <Record field="passengers" label="Passengers"/> 
                              <Record field="cargoCapacity" label="Cargo Capacity"/> 
                            </StarshipDetails>
  return (
    <Row left={starshipList} right={starshipDetails} />
  )
}

export default StarshipsPage;

