import React from 'react';
import { StatusBar } from 'react-native';
import 'react-native-gesture-handler';
// import { Router } from 'react-router-dom';
// import { Provider } from 'react-redux';

import './config/ReactotronConfig';

import Routes from './routes';

export default function Main() {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#191920" />
      <Routes />
    </>
  );
}
