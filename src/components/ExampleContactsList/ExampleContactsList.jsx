import { useFetchContactsQuery } from 'redux/contacts';
import { ContactsList } from './ContactsList';

export const ExampleContactsPage = () => {
  const { data, isFetching } = useFetchContactsQuery();
  return <div>{data && <ContactsList data={data} />}</div>;
};
