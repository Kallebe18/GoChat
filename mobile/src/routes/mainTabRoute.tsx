import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Contacts from '../pages/Contacts';
import Search from '../pages/Search';

const BottomTabNav = createBottomTabNavigator();

const TabRoutes = () => {
  return (
    <BottomTabNav.Navigator screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName = 'list';
        let iconColor = '#fff';
        if (route.name === 'Buscar') iconName = 'search'
        if (!focused) iconColor = '#ccc'
        // You can return any component that you like here!
        return <Ionicons name={iconName} size={30} color={iconColor} />;
      },
      })}
      tabBarOptions={{
        activeTintColor: '#fff',
        inactiveTintColor: '#aaa',
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
