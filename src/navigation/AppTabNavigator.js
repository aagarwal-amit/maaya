import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

import { createBottomTabNavigator } from 'react-navigation-tabs';

import MarketStackNavigator from './MarketStackNavigator';
import PoolStackNavigator from './PoolStackNavigator';
import PropTypes from 'prop-types';
import Colors from '../styles/Colors';

const CustomTabBarIcon = (name, size) => {
  const icon = ({ tintColor }) => (
    <Icon
      name={name}
      size={size}
      color={tintColor}
    />
  );

  icon.propTypes = {
    tintColor: PropTypes.string.isRequired,
  };

  return icon;
};
const AppTabNavigator = createBottomTabNavigator({
  Market: {
    screen: MarketStackNavigator,
    navigationOptions: {
      tabBarLabel: 'Market',
      tabBarIcon: CustomTabBarIcon('ios-cart', 22),
    },
  },
  Pool: {
    screen: PoolStackNavigator,
    navigationOptions: {
      tabBarLabel: 'Pool',
      tabBarIcon: CustomTabBarIcon('ios-car', 22),
    },
  }
},
{
  tabBarOptions: {
    labelStyle: {
      fontWeight: '600',
      marginBottom: 5,
    },
    activeTintColor: Colors.activeTintColor,
    inactiveTintColor: Colors.inactiveTintColor,
    style: {
      backgroundColor: Colors.appHeaderColor,
      borderTopWidth: 2,
      borderTopColor: Colors.inactiveTintColor
    },
  },
  tabBarPosition: 'bottom',
});

export default AppTabNavigator;