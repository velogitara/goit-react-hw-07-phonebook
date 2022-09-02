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

// import { useSelector, useDispatch } from 'react-redux';
// import { getFilter } from '../../redux/contacts';

export const Contacts = () => {
  // const dispatch = useDispatch();
  // const filterValue = useSelector(getFilter);
  // const contacts = useSelector(getItems);

  // const filteredContacts = contacts.filter(i =>
  //   i.name.toLowerCase().includes(filterValue)
  // );

  const { data, isFetching } = useFetchContactsQuery();
  const [deleteContact] = useDeleteContactMutation();
  // console.log(data);

  let newData = [];

  if (data) {
    newData = data;
  }

  // const filteredContacts = newData.filter(i =>
  //   i.name.toLowerCase().includes(filterValue)
  // );
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
        {newData.length ? (
          newData.map(item => {
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
          <span>
            No contacts <TitleStyle>yet</TitleStyle>
          </span>
        )}
      </Ul>
    </div>
  );
};

// : (
//           <div>
//             {filterValue ? (
//               <span>
//                 No contacts <TitleStyle>found</TitleStyle>
//               </span>
//             ) : (
//               <span>
//                 No contacts <TitleStyle>yet</TitleStyle>
//               </span>
//             )}
//           </div>
//         )
