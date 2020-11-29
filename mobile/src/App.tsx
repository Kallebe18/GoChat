import React from 'react';
import { StatusBar, SafeAreaView } from 'react-native';

import Routes from './routes';

const App: React.FC = () => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      <SafeAreaView style={{ flex: 1 }}>
        <Routes />
      </SafeAreaView>
    </>
  );
};

export default App;
