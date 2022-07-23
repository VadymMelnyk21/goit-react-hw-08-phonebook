import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import { Container, TitleH, TitleH2 } from './ContactsPage.styled';

export default function ContactsPage() {
  return (
    <Container>
      <TitleH>Книга контактів</TitleH>
      <ContactForm />

      <TitleH2>Контакти</TitleH2>
      <Filter />
      <ContactList />
    </Container>
  );
}
