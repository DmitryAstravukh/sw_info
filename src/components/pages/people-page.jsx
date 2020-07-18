import React from 'react';
import Row from '../row';

import { Record } from '../item-details/item-details';
import { PersonsList, PersonDetails } from './../sw-components';
import { withRouter } from 'react-router-dom';

const PeoplePage = ({ history, match }) => {
  const personList = <PersonsList onItemSelected={(id) => history.push(id)}>
                        {item => `${item.id}. ${item.name}`}
                      </PersonsList>;
  const personDetails = <PersonDetails selectedItem={match.params.id}>
                          <Record field="gender" label="Gender"/>
                          <Record field="birthYear" label="Birth Year"/>
                          <Record field="eyeColor" label="Eye Color"/>
                        </PersonDetails>;
  return (
    <Row left={personList} right={personDetails} />
  )
}

export default withRouter(PeoplePage);

