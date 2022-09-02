import { Nav, LinkHref } from './Navigation.styled';

export default function Navigation() {
  return (
    <Nav>
      <LinkHref to={'/'}>Contacts</LinkHref>
      <LinkHref to={'/pokemonApi'}>PokemonApi</LinkHref>
    </Nav>
  );
}
