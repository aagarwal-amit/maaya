
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import AppTabNavigator from './AppTabNavigator';
import AuthStackNavigator from './AuthStackNavigator';
import AuthLoadingScreen from '../screens/AuthLoadingScreen'

export default createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoadingScreen,
      App: AppTabNavigator,
      Auth: AuthStackNavigator,
    },
    {
      initialRouteName: 'AuthLoading',
    }
  )
);