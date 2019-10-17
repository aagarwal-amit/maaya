import React, { Component } from 'react'
import { View, Text, Button } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import colors from '../../styles/Colors';
import transparentHeaderStyle from '../../styles/navigation';
import NavBarButton from '../../components/buttons/NavBarButton';

class PoolHomeScreen extends Component {
  static navigationOptions = {
    title: "Pool",
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }}>
        <Text>Profile Screen</Text>
      </View>
    );
  }
}

export default PoolHomeScreen;