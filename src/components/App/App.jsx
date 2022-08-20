import Form from '../Form';
import { Contacts } from '../Contacts/';
import { Section } from './App.styled';
import { Example } from 'components/animation/animation';
import { useSelector, useDispatch } from 'react-redux';

import { increment, decrement, getClicksValue } from '../../redux/myValueSlice';

function App() {
  const dispatch = useDispatch();
  const value = useSelector(getClicksValue);

  return (
    <Section>
      <Form />
      <Contacts />
      <div>
        <button type="button" onClick={() => dispatch(decrement(100))}>
          -
        </button>
        {value}
        <button type="button" onClick={() => dispatch(increment(50))}>
          +
        </button>
      </div>
      <Example />
    </Section>
  );
}

export default App;
