import React from 'react';
import { StatusBar, SafeAreaView } from 'react-native';

import Routes from './routes';

const safeAreaViewStyle = { flex: 1 };

const App: React.FC = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={safeAreaViewStyle}>
        <Routes />
      </SafeAreaView>
    </>
  );
};

export default App;
