import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CrudScreen from '../screens/CrudScreen';

const Tab = createBottomTabNavigator();

const AuthenticatedTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="CrudScreen" component={CrudScreen} />
    </Tab.Navigator>
  );
};

export default AuthenticatedTabs;