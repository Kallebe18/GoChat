import React from 'react';
import {
  StyleProp,
  ViewStyle,
  TouchableOpacity,
  Image,
  Text
} from 'react-native';
import { Route } from '@react-navigation/native'
import {
  createDrawerNavigator,
  DrawerNavigationOptions,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerContentComponentProps,
  DrawerContentOptions,
} from '@react-navigation/drawer';

import TabRoutes from '../mainTabRoutes';
import styles from './styles';

import Profile from '../../pages/Profile';
import SearchContainer from '../../components/Search';
import Chat from '../../pages/Chat';

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
    if (route.name === 'DrawerMain')
      return <SearchContainer/>
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
        (routeName) => routeName !== 'DrawerMain'
      ),
      routes: props.state.routes.filter(
        (route) => route.name !== 'DrawerMain' && route.name !== 'Profile'
      ),
    }
  }

  const profileImageUri = "https://www.gravatar.com/avatar/4eaa569553f1c026ac32141b4eee73c9?s=32&d=identicon&r=PG";

  const handleProfileClick = () => {
    props.navigation.navigate('Profile');
  }

  return (
    <DrawerContentScrollView {...filteredProps}>
      <TouchableOpacity
        style={styles.profileContainer}
        onPress={handleProfileClick}>
        <Image
          style={styles.profileImage}
          source={{uri: profileImageUri}}/>
        <Text style={styles.profileName}>Nome do usuario</Text>
        <Text style={styles.profileInfo}>Homem, 20 anos</Text>
      </TouchableOpacity>
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
      <DrawerNav.Screen
        name="Profile"
        component={Profile}
      />
      <DrawerNav.Screen
        name="Chat"
        component={Chat}
      />
    </DrawerNav.Navigator>
  )
}

export default DrawerRoutes;
