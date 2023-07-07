import React from 'react';
import {SafeAreaView} from 'react-native';
import {Provider} from 'react-redux';
import NavigationStack from './src/navigators/NavigationStack';
import store from './src/redux/store/configureStore';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Provider store={store}>
        <NavigationStack />
      </Provider>
    </SafeAreaView>
  );
};

export default App;
