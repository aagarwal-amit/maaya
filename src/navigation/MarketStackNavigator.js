import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';

import MarketHomeScreen from '../screens/marketplace/MarketHomeScreen';
import CreateNewListing from '../screens/marketplace/CreateNewListing';
import Colors from '../styles/Colors';



const MarketStackNavigator = createStackNavigator(
  {

    Market: {
      screen: MarketHomeScreen,
      // navigationOptions: {
      //   header: null,
      // },
    },
    CreateNewListing: {
      screen: CreateNewListing
    }
  },
  {
    initialRouteName: 'Market',
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
MarketStackNavigator.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  if (navigation.state.index > 0) {
    tabBarVisible = false;
  }

  return {
    tabBarVisible,
  };
};

export default MarketStackNavigator;