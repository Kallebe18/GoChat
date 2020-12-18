import React from 'react';
import { StatusBar, SafeAreaView } from 'react-native';

import Routes from './routes';
import UserContextProvider from './contexts/UserContext';

const App: React.FC = () => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      <SafeAreaView style={{ flex: 1 }}>
        <UserContextProvider>
          <Routes />
        </UserContextProvider>
      </SafeAreaView>
    </>
  );
};

export default App;
