import Form from '../../components/Form';
import { Contacts } from '../../components/Contacts';
import styled from 'styled-components';

const Section = styled.div`
  display: inline-flex;
  flex-direction: column;
  border: 1px solid aqua;
  min-width: 400px;
  box-shadow: 33px 14px 33px 10px rgba(14, 178, 230, 0.75);
  margin-left: 40px;
  margin-top: 30px;
  padding: 20px;
`;

export default function ContactsContainer() {
  return (
    <Section>
      <Form />
      <Contacts />
    </Section>
  );
}
