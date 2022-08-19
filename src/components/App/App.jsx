import Form from '../Form';
import { Contacts } from '../Contacts/';
import { Section } from './App.styled';
import { useState, useEffect } from 'react';
import { Example } from 'components/animation/animation';
import Notiflix from 'notiflix';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../../redux/myValueSlice';

function App() {
  const dispatch = useDispatch();
  const value = useSelector(state => state.myValue);

  const [contacts, setContacts] = useState(
    () => JSON.parse(localStorage.getItem('contacts')) || []
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const formSubmitHandler = data => {
    contacts.find(i => i.name.toLowerCase() === data.name.toLowerCase())
      ? Notiflix.Notify.failure('That name already in the list', {
          position: 'center-center',
        })
      : setContacts([data, ...contacts]);
    // console.log(data);
  };
  const filterHandler = e => {
    // console.log(e.currentTarget.value);
    setFilter(e.currentTarget.value.toLowerCase());
  };

  const onDeleteContactHandler = id => {
    setContacts(contacts.filter(i => i.id !== id));
  };

  return (
    <Section>
      <Form onSubmit={formSubmitHandler} />
      <Contacts
        contacts={contacts}
        filterValue={filter}
        filterHandler={filterHandler}
        onDelete={onDeleteContactHandler}
      />
      <div>
        <button type="button" onClick={() => dispatch(decrement(100))}>
          -
        </button>
        {value}
        <button type="button" onClick={() => dispatch(increment(100))}>
          +
        </button>
      </div>
      <Example />
    </Section>
  );
}

export default App;
