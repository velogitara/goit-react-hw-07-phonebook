// import PropTypes from 'prop-types';
import Filter from '../Filter';
import {
  ButtonDelete,
  Ul,
  List,
  Number,
  TitleStyle,
  ValueStyle,
} from './Contacts.styled';
import { useSelector, useDispatch } from 'react-redux';
import { getItems, getFilter, removeContact } from '../../redux/store';

export const Contacts = () => {
  const dispatch = useDispatch();
  const filterValue = useSelector(getFilter);
  const contacts = useSelector(getItems);

  const filteredContacts = contacts.filter(i =>
    i.name.toLowerCase().includes(filterValue)
  );

  return (
    <div>
      <h2>Contacts</h2>
      {contacts.length ? (
        <Filter title={'Find contacts by name'} />
      ) : (
        <div></div>
      )}

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
                  <ValueStyle>{item.number}</ValueStyle>
                </Number>
                <ButtonDelete
                  type="button"
                  onClick={() => {
                    dispatch(removeContact(item.id));
                  }}
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

// Contacts.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     })
//   ),
//   filterValue: PropTypes.string.isRequired,
//   onDelete: PropTypes.func.isRequired,
//   filterHandler: PropTypes.func.isRequired,
// };

// export default Contacts;
