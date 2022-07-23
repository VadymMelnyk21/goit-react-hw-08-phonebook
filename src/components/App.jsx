// import ContactForm from './ContactForm/ContactForm';
// import ContactList from './ContactList/ContactList';
// import Filter from './Filter/Filter';
// import { Container, TitleH, TitleH2 } from './App.styled';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Suspense, useEffect, lazy } from 'react';
import { getCurrentUser } from 'redux/authorization/authorization-requests';

import NotFound from 'pages/NotFound/NotFound';
import Layout from './Layout/Layout';
import PublicRoute from './PublicRoute/PublicRoute';
import RegistrationPage from 'pages/RegistrationPage/RegistrationPage';
import LoginPage from 'pages/LoginPage/LoginPage';
import ContactsPage from 'pages/ContactsPage/ContactsPage';
import PrivateRoute from './PrivateRoute/PrivateRoute';

const HomePage = lazy(() => import('pages/HomePage/HomePage'));

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  return (
    <Suspense fallback={<h2>Завантажуємо...</h2>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />

          <Route
            path="contacts"
            element={
              <PrivateRoute>
                <ContactsPage />
              </PrivateRoute>
            }
          />

          <Route
            path="register"
            element={
              <PublicRoute restricted>
                <RegistrationPage />
              </PublicRoute>
            }
          />

          <Route
            path="login"
            element={
              <PublicRoute restricted>
                <LoginPage />
              </PublicRoute>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Route>
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
