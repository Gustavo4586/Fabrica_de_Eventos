import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import EVENTOS from '../screens/EVENTOS';

const Tab = createBottomTabNavigator();

const AuthenticatedTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="EVENTOS" component={EVENTOS} />
    </Tab.Navigator>
  );
};

export default AuthenticatedTabs;