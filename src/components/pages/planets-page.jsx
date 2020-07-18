import React from 'react';
import Row from '../row';

import { Record } from '../item-details/item-details';
import { PlanetsList, PlanetDetails } from './../sw-components';
import { withRouter } from 'react-router-dom';

const PlanetsPage = ({ history, match }) => {
  const planetList = <PlanetsList onItemSelected={(id) => history.push(id)}>
                       {item => `${item.id}. ${item.name}`}
                     </PlanetsList>;
  const planetDetails = <PlanetDetails selectedItem={match.params.id}>
                            <Record field="population" label="Population"/>
                            <Record field="rotationPeriod" label="Rotation Period"/>
                            <Record field="diameter" label="Diameter"/>
                          </PlanetDetails>
  return (
    <Row left={planetList} right={planetDetails} />
  )
}

export default withRouter(PlanetsPage);

