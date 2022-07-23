// import ContactForm from './ContactForm/ContactForm';
// import ContactList from './ContactList/ContactList';
// import Filter from './Filter/Filter';
// import { Container, TitleH, TitleH2 } from './App.styled';
import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getIsFetchingCurrentUser } from 'redux/authorization/authorization-selectors';
import { Suspense, useEffect, lazy } from 'react';
import { getCurrentUser } from 'redux/authorization/authorization-requests';

import NotFound from 'pages/NotFound/NotFound';
import Layout from './Layout/Layout';

const HomePage = lazy(() => import('pages/HomePage/HomePage'));

export default function App() {
  const dispatch = useDispatch();
  const isGetIsFetchingCurrentUser = useSelector(getIsFetchingCurrentUser);

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  return isGetIsFetchingCurrentUser ? (
    <h2>Завантажуємо...</h2>
  ) : (
    <Suspense>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />}></Route>
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>

    // <Container>
    //   <TitleH>Телефонна книга</TitleH>
    //   <ContactForm />

    //   <TitleH2>Контакти</TitleH2>
    //   <Filter />
    //   <ContactList />
    // </Container>
  );
}
