import React from 'react';
import Row from '../row';

import { Record } from '../item-details/item-details';
import { PlanetsList, PlanetDetails } from './../sw-components';

const PlanetsPage = () => {
  const planetList = <PlanetsList>{item => `${item.id}. ${item.name}`}</PlanetsList>;
  const planetDetails = <PlanetDetails>
                            <Record field="population" label="Population"/>
                            <Record field="rotationPeriod" label="Rotation Period"/>
                            <Record field="diameter" label="Diameter"/>
                          </PlanetDetails>
  return (
    <Row left={planetList} right={planetDetails} />
  )
}

export default PlanetsPage;

