import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { Route } from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerNavigationOptions,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerContentComponentProps,
  DrawerContentOptions,
} from '@react-navigation/drawer';

import Profile from '../../pages/Profile';
import Chat from '../../pages/Chat';
import TabRoutes from '../mainTabRoutes';
import SearchContainer from '../../components/Search';
import {
  ProfileContainer,
  ProfileImage,
  ProfileInfo,
  ProfileName,
  NavButtonContainer,
  NavButtonText,
} from './styles';

const DrawerNav = createDrawerNavigator();

const drawerNavigationOptions:
  | DrawerNavigationOptions
  | ((props: {
      route: Route<string, object | undefined>;
      navigation: any;
    }) => DrawerNavigationOptions)
  | undefined = ({ route }) => ({
  headerShown: true,
  headerTintColor: '#fff',
  headerTitle: 'GoChat',
  headerStyle: {
    backgroundColor: '#333',
  },
  headerTitleStyle: {
    color: '#fff',
  },
  headerRight: props => {
    if (route.name === 'DrawerMain') return <SearchContainer />;
    return undefined;
  },
});

const drawerStyle: StyleProp<ViewStyle> = {
  backgroundColor: '#333',
};

const handleDrawerContent:
  | ((
      props: DrawerContentComponentProps<DrawerContentOptions>,
    ) => React.ReactNode)
  | undefined = props => {
  const filteredProps = {
    ...props,
    state: {
      ...props.state,
      routeNames: props.state.routeNames.filter(
        routeName => routeName !== 'DrawerMain',
      ),
      routes: props.state.routes.filter(
        route =>
          route.name !== 'DrawerMain' &&
          route.name !== 'Profile' &&
          route.name !== 'Chat',
      ),
    },
  };

  const profileImageUri =
    'https://www.gravatar.com/avatar/4eaa569553f1c026ac32141b4eee73c9?s=32&d=identicon&r=PG';

  const handleProfileClick = () => {
    props.navigation.navigate('Profile');
  };

  return (
    <DrawerContentScrollView {...filteredProps}>
      <ProfileContainer onPress={handleProfileClick}>
        <ProfileImage source={{ uri: profileImageUri }} />
        <ProfileName>Nome do usuario</ProfileName>
        <ProfileInfo>Homem, 20 anos</ProfileInfo>
      </ProfileContainer>
      <ProfileContainer>
        <NavButtonText>Sair </NavButtonText>
      </ProfileContainer>
      <DrawerItemList {...filteredProps} />
    </DrawerContentScrollView>
  );
};

const DrawerRoutes: React.FC = () => {
  return (
    <DrawerNav.Navigator
      screenOptions={drawerNavigationOptions}
      drawerStyle={drawerStyle}
      drawerContent={handleDrawerContent}
    >
      <DrawerNav.Screen name="DrawerMain" component={TabRoutes} />
      <DrawerNav.Screen name="Profile" component={Profile} />
      <DrawerNav.Screen name="Chat" component={Chat} />
    </DrawerNav.Navigator>
  );
};

export default DrawerRoutes;
