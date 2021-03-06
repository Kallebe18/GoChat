import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import DrawerRoutes from './drawerNav/drawerNavRoutes';

import Home from '../pages/Home';

const Stack = createStackNavigator();

const Routes: React.FC = () => (
  <NavigationContainer>
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="MainRoutes" component={DrawerRoutes} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default Routes;
