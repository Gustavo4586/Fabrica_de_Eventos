import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
import Login from '../screens/Login';
import Cadastro from '../screens/Cadastro';
import AuthTabs from './auth.tabs.routes';
import AuthenticatedTabs from './authenticated.tabs.routes';

const Stack = createStackNavigator();

const StackRoutes = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Stack.Screen name="AuthTabs" component={AuthTabs} options={{ headerShown: false }} />
      <Stack.Screen name="AuthenticatedTabs" component={AuthenticatedTabs} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

export default StackRoutes;