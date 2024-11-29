import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from "react-redux";
import { Container } from "@material-ui/core";
import ButterToast, { POS_RIGHT, POS_TOP } from "butter-toast";
import Login from './login/Login.js';
import FormPage from './signup/FormPage.js';
import Home from './Home1/Home.js';
import PostMessages from './components/PostMessages';
import { store } from "./actions/store";
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Container maxWidth="lg">
          <ButterToast position={{ vertical: POS_TOP, horizontal: POS_RIGHT }} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/FormPage" element={<FormPage />} />
            <Route path="/components/PostMessages" element={<PostMessages />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </Container>
      </Router>
    </Provider>
  );
}

export default App;

