// import PropTypes from 'prop-types';

import Filter from '../Filter';
import Loader from '../Loader';

import {
  useFetchContactsQuery,
  useDeleteContactMutation,
} from 'redux/contacts';

import {
  ButtonDelete,
  Ul,
  List,
  Number,
  TitleStyle,
  ValueStyle,
} from './Contacts.styled';

import { useSelector } from 'react-redux';
import { getFilter } from '../../redux/contacts';

export const Contacts = () => {
  const { data, isFetching } = useFetchContactsQuery();
  const [deleteContact] = useDeleteContactMutation();
  let newData = [];

  if (data) {
    newData = data;
  }

  const filterValue = useSelector(getFilter);

  const filteredContacts = newData.filter(i =>
    i.name.toLowerCase().includes(filterValue)
  );

  return (
    <div>
      <h2>Contacts</h2>
      {newData.length ? (
        <Filter title={'Find contacts by name'} />
      ) : (
        <div></div>
      )}
      {isFetching && <Loader />}

      <Ul>
        {filteredContacts.length ? (
          filteredContacts.map(item => {
            return (
              <List key={item.id}>
                <span>
                  <TitleStyle>Name:</TitleStyle>
                  <ValueStyle> {item.name}</ValueStyle>
                </span>
                <Number>
                  <TitleStyle>Number:</TitleStyle>
                  <ValueStyle>{item.phone}</ValueStyle>
                </Number>
                <ButtonDelete
                  type="button"
                  onClick={() => deleteContact(item.id)}
                >
                  delete
                </ButtonDelete>
              </List>
            );
          })
        ) : (
          <div>
            {filterValue ? (
              <span>
                No contacts <TitleStyle>found</TitleStyle>
              </span>
            ) : (
              <span>
                No contacts <TitleStyle>yet</TitleStyle>
              </span>
            )}
          </div>
        )}
      </Ul>
    </div>
  );
};
