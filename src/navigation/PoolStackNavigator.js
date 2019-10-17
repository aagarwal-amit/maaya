import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import PoolHomeScreen from '../screens/pool/PoolHomeScreen';
import Colors from '../styles/Colors';

const PoolStackNavigator = createStackNavigator(
  {
    Pool: {
      screen: PoolHomeScreen,
    }
  },
  {
    initialRouteName: 'Pool',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Colors.appHeaderColor,
      },
      headerTintColor: Colors.appHeaderTintColor,
      headerTitleStyle: {
        //fontWeight: 'bold',
      },
    },
  }
);

export default PoolStackNavigator;