// import PropTypes from 'prop-types';
import { useState } from 'react';
import { ContactForm, Label, ButtonAdd, Input } from './Form.styled';
// import { nanoid } from 'nanoid';
import { useFetchContactsQuery, useAddContactMutation } from 'redux/contacts';

// import { useDispatch, useSelector } from 'react-redux';
// import { getItems, addContact } from '../../redux/contacts';
import Notiflix from 'notiflix';

function Form() {
  //   const dispatch = useDispatch();
  //   const contacts = useSelector(getItems);
  const { data: baseList } = useFetchContactsQuery();
  const [addContact] = useAddContactMutation();

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const reset = () => {
    setName('');
    setPhone('');
  };

  const handleSubmit = e => {
    e.preventDefault();
    // const id = nanoid();
    const objWithId = { phone, name };
    formSubmitHandler(objWithId);
    reset();
  };

  const formSubmitHandler = data => {
    baseList.find(i => i.name.toLowerCase() === data.name.toLowerCase())
      ? Notiflix.Notify.failure('That name already in the list', {
          position: 'center-center',
        })
      : addContact(data);
  };
  const handleInput = e => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'name':
        setName(value);

        break;

      case 'number':
        setPhone(value);

        break;
      default:
        break;
    }
  };

  return (
    <ContactForm autoComplete="off" onSubmit={handleSubmit}>
      <Label>
        <span>Name</span>
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={handleInput}
        />
      </Label>
      <Label>
        <span>Phone</span>
        <Input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={phone}
          onChange={handleInput}
        />
      </Label>
      <ButtonAdd type="submit">Add contact</ButtonAdd>
    </ContactForm>
  );
}

export default Form;
