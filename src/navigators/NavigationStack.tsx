import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {SCREENS} from '../constants/Screens';
import HomeScreen from '../screens/HomeScreen';
import BagIconWithCount from '../components/BagIconWithCount';
import CartScreen from '../screens/CartScreen';
import BackIcon from 'react-native-vector-icons/FontAwesome';
import {useSelector} from 'react-redux';
import {CatalogReducer} from '../constants/Interface';

const Stack = createNativeStackNavigator();

const NavigationStack = () => {
  const {HOME_SCREEN, CART} = SCREENS;
  const {cartList} = useSelector<CatalogReducer, any>(state => state.catalog);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={HOME_SCREEN}>
        <Stack.Screen
          name={HOME_SCREEN}
          component={HomeScreen}
          options={({navigation}) => ({
            title: 'Catalog',
            headerStyle: {
              backgroundColor: '#f8e8d1',
            },
            headerRight: () => (
              <BagIconWithCount
                count={cartList.length}
                onPress={() => {
                  // Handle bag icon press event
                  navigation.navigate(CART);
                }}
              />
            ),
          })}
        />
        <Stack.Screen
          name={CART}
          component={CartScreen}
          options={({navigation}) => ({
            title: 'My Cart',
            headerStyle: {
              backgroundColor: '#f8e8d1',
            },
            headerLeft: () => (
              <BackIcon
                name="chevron-left"
                size={20}
                onPress={() => {
                  navigation.goBack();
                }}
              />
            ),
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default NavigationStack;
