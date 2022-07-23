import Menu from 'components/Menu/Menu';
import { Outlet } from 'react-router-dom';
import { Container, Header, Section } from './Layout.styled';

export default function Layout() {
  return (
    <>
      <Header>
        <Container>
          <Menu />
        </Container>
      </Header>
      <main>
        <Section>
          <Container>
            <h1>main</h1>
            <Outlet />
          </Container>
        </Section>
      </main>
    </>
  );
}
