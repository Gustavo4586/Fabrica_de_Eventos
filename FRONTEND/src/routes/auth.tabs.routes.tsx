import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Login from '../screens/Login';
import Cadastro from '../screens/Cadastro';
import Home from '../screens/Home';

const Tab = createBottomTabNavigator();

const AuthTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Login" component={Login} />
      <Tab.Screen name="Cadastro" component={Cadastro} />
      <Tab.Screen name="Home" component={Home} />
    </Tab.Navigator>
  );
};

export default AuthTabs;