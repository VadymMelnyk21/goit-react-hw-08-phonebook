import Loader from 'components/Loader/Loader';
import Menu from 'components/Menu/Menu';
import { Suspense } from 'react';
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
            <Suspense fallback={<Loader />}>
              <Outlet />
            </Suspense>
          </Container>
        </Section>
      </main>
    </>
  );
}
