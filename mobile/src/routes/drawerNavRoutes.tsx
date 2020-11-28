import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { Route } from '@react-navigation/native'
import {
  createDrawerNavigator,
  DrawerNavigationOptions,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerContentComponentProps,
  DrawerContentOptions
} from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';

import TabRoutes from './mainTabRoutes';
import { TouchableOpacity } from 'react-native-gesture-handler';

const DrawerNav = createDrawerNavigator();

const drawerNavigationOptions: DrawerNavigationOptions | ((props: {
    route: Route<string, object | undefined>;
    navigation: any;
  }) => DrawerNavigationOptions) | undefined = ({ route }) => ({
  headerShown: true,
  headerTintColor: '#fff',
  headerTitle: 'GoChat',
  headerStyle: {
    backgroundColor: '#333',
  },
  headerTitleStyle: {
    color: '#fff',
  },
  headerRight: (props) => {
    if (route.name === 'DrawerMain') {
      return (
        <TouchableOpacity style={{ marginRight: 20, padding: 5}}>
          <Ionicons name="search" size={25} style={{
            color: '#fff',
          }}/>
        </TouchableOpacity>
      )
    }
    return undefined;
  }
})

const drawerStyle: StyleProp<ViewStyle> = {
  backgroundColor: '#333',
}

const handleDrawerContent: ((props:
  DrawerContentComponentProps<DrawerContentOptions>) => React.ReactNode) | undefined = (props) => {
  const filteredProps = {
    ...props,
    state: {
      ...props.state,
      routeNames: props.state.routeNames.filter(
        // To hide single option
        // (routeName) => routeName !== 'HiddenPage1',
        // To hide multiple options you can add & condition
        (routeName) => {
          routeName !== 'DrawerMain'
        }
      ),
      routes: props.state.routes.filter(
        (route) => {
          route.name !== 'DrawerMain'
        }
      ),
    }
  }
  return (
    <DrawerContentScrollView {...filteredProps}>
      <DrawerItemList {...filteredProps} />
    </DrawerContentScrollView>
  )
}

const DrawerRoutes = () => {
  return (
    <DrawerNav.Navigator
      screenOptions={drawerNavigationOptions}
      drawerStyle={drawerStyle}
      drawerContent={handleDrawerContent}
    >
      <DrawerNav.Screen
        name="DrawerMain"
        component={TabRoutes}
      />
    </DrawerNav.Navigator>
  )
}

export default DrawerRoutes;
