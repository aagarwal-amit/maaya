import { createStackNavigator } from 'react-navigation-stack';

import LogInScreen from '../screens/LogInScreen';
import LoggedOut from '../screens/LoggedOut';
import ForgotPassword from '../screens/ForgotPassword';
import Colors from '../styles/Colors';


const AuthStackNavigator = createStackNavigator(
  {
    LoggedOut: { screen: LoggedOut },
    LogIn: { screen: LogInScreen },
    ForgotPassword: { screen: ForgotPassword },
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Colors.appHeaderColor,
      },
      headerTintColor: Colors.appHeaderTintColor,
      headerTitleStyle: {
        //fontWeight: 'bold',
      },
    },
  });

export default AuthStackNavigator;