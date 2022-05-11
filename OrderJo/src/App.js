import React from 'react';
// import {SingIn, SplashScreen} from './pages';
import {NavigationContainer} from '@react-navigation/native';
import Routers from './routers';
import FlashMessage from 'react-native-flash-message';

const App = () => {
  return (
    <NavigationContainer>
      {/* <SplashScreen /> */}
      {/* <SingIn /> */}
      <Routers />
      <FlashMessage position="top" />
    </NavigationContainer>
  );
};

export default App;
