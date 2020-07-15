import React from 'react';
import Row from '../row';

import { Record } from '../item-details/item-details';
import { PersonsList, PersonDetails } from './../sw-components';

const PeoplePage = () => {
  const personList = <PersonsList>{item => `${item.id}. ${item.name}`}</PersonsList>;
  const personDetails = <PersonDetails>
                        <Record field="gender" label="Gender"/>
                        <Record field="birthYear" label="Birth Year"/>
                        <Record field="eyeColor" label="Eye Color"/>
                      </PersonDetails>;
  return (
    <Row left={personList} right={personDetails} />
  )
}

export default PeoplePage;

