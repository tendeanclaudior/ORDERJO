import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  AddTransactionHome,
  Cart,
  DetailProduk,
  Home,
  Profile,
  ScreenThankyou,
  SignIn,
  SignUp,
  SplashScreen,
  TransactionFromCart,
} from '../pages';

const Stack = createNativeStackNavigator();

const Routers = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="DetailProduk"
        component={DetailProduk}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Cart"
        component={Cart}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AddTransactionHome"
        component={AddTransactionHome}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="TransactionFromCart"
        component={TransactionFromCart}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ScreenThankyou"
        component={ScreenThankyou}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Routers;