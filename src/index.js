import React from 'react';
import { Provider } from 'react-redux';

import './config/ReactotronConfig';
import { StatusBar } from 'react-native';
// import store from './store';

import Routes from './routes';
import NavigationService from './services/navigation';

export default function App() {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#191920" />
      <Routes
        ref={navigatorRef => NavigationService.setNavigator(navigatorRef)}
      />
    </>
  );
}
