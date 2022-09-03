import {
  useFetchContactsQuery,
  useDeleteContactMutation,
} from 'redux/contacts';
import { useSelector } from 'react-redux';
import { getFilter } from 'redux/contacts';
import Filter from '../Filter';
import Loader from '../Loader';

import {
  ButtonDelete,
  Ul,
  List,
  Number,
  TitleStyle,
  ValueStyle,
} from './ContactsList.styled';

export const ContactList = () => {
  const { data } = useFetchContactsQuery();
  const { isFetching } = useFetchContactsQuery();

  const [deleteContact] = useDeleteContactMutation();

  const filterValue = useSelector(getFilter);
  let newData = [];

  if (data) {
    newData = data;
  }

  const filteredContacts = newData.filter(i =>
    i.name.toLowerCase().includes(filterValue)
  );

  return (
    <>
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
    </>
  );
};
