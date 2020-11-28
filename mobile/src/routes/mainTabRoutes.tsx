import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Fi from 'react-native-vector-icons/Feather';

import Contacts from '../pages/Contacts';
import Search from '../pages/Search';

const BottomTabNav = createBottomTabNavigator();

const TabRoutes = () => {
  return (
    <BottomTabNav.Navigator screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName = 'list';
        let iconColor = '#fff';
        if (route.name === 'Buscar') iconName = 'user-plus'
        if (!focused) iconColor = '#999'
        // You can return any component that you like here!
        return <Fi name={iconName} size={25} color={iconColor} />;
      },
      })}
      tabBarOptions={{
        activeTintColor: '#fff',
        inactiveTintColor: '#999',
        style: {
          backgroundColor: '#333',
          borderTopColor: '#444',
          borderTopWidth: 1,
        },
        labelStyle: {
          fontSize: 12,
        }
      }}
    >
      <BottomTabNav.Screen name="Contatos" component={Contacts} />
      <BottomTabNav.Screen name="Buscar" component={Search} />
    </BottomTabNav.Navigator>
  );
};

export default TabRoutes;
