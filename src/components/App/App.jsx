import { Routes, Route } from 'react-router-dom';

import Container from 'components/Container';
import AppBar from 'components/AppBar';
import ContactsContainer from 'Pages/Contacts/Contacts';
import PokemonPage from 'Pages/Pokemon/Pokemon';

function App() {
  return (
    <Container>
      <AppBar />
      <Routes>
        <Route path="/" element={<ContactsContainer />}></Route>
        <Route path="/pokemonApi" element={<PokemonPage />}></Route>
      </Routes>
    </Container>
  );
}

export default App;
