export const ContactsList = ({ data }) => {
  return (
    <ul>
      {data.map(i => (
        <li key={i.id}>{i.name}</li>
      ))}
    </ul>
  );
};
