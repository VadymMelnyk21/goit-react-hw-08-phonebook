import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { Container, TitleH, TitleH2 } from './App.styled';

export default function App() {
  return (
    <Container>
      <TitleH>Телефонна книга</TitleH>
      <ContactForm />

      <TitleH2>Контакти</TitleH2>
      <Filter />
      <ContactList />
    </Container>
  );
}
