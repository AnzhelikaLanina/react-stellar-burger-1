import React from "react";
import styles from "./app.module.css";
import {OnlyAuth, OnlyUnAuth} from "../../pages/protected-route";
import { getIngredients } from "../../services/actions/ingredient";
import { getUser } from "../../services/actions/auth";
import { useDispatch } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from "../../pages/home-page/home-page";
import LoginPage from "../../pages/login-page/login-page";
import PasswordForgotPage from "../../pages/password-forgot-page/password-forgot-page";
import PasswordResetPage from "../../pages/password-reset-page/password-reset-page";
import ProfilePage from "../../pages/profile-page/profile-page";
import RegistrationPage from "../../pages/registration-page/registration-page";
import InfoIngredientPage from "../../pages/info-ingredient-page/info-ingredient-page";
import NotFound404 from "../../pages/not-found-page/not-found-page";
import AppHeader from "../app-header/app-header";

const App = () => {
    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(getIngredients());
        dispatch(getUser());
    }, [dispatch]);

  return (
      <>
          <div className={styles.app}>
                  <BrowserRouter>
                      <AppHeader />
                      <main className={styles.main}>
                        <Routes>
                            <Route path="/" element={<HomePage />} />
                            <Route path="/login" element={<OnlyUnAuth component={<LoginPage/>}/>}/>
                            <Route path="/register" element={<OnlyUnAuth component={<RegistrationPage/>}/>}/>
                            <Route path="/forgot-password" element={<OnlyUnAuth component={<PasswordForgotPage/>}/>}/>
                            <Route path="/reset-password" element={<OnlyUnAuth component={<PasswordResetPage/>}/>}/>
                            <Route path="/profile" element={<OnlyAuth component={<ProfilePage/>}/>}/>
                            <Route path="/profile/orders" />
                            <Route path="/ingredients/:id" element={<InfoIngredientPage />} />
                            <Route path="/feed"  />
                            <Route path="*" element={<NotFound404 />} />
                        </Routes>
                      </main>
                  </BrowserRouter>
          </div>
      </>

  );
}

export default App;
