import React from 'react';
import { View, Text, Button } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import colors from '../../styles/Colors';
import transparentHeaderStyle from '../../styles/navigation';
import NavBarButton from '../../components/buttons/NavBarButton';

class HomeScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    headerRight: <NavBarButton
      handleButtonPress={() => navigation.navigate('Pool')}
      location="right"
      color={colors.white} icon={<Icon name="ios-options" color={colors.white} size={30}/>}
    />
  });
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Pool"
          onPress={() => this.props.navigation.navigate('Pool')}
        />
      </View>
    );
  }
}

export default HomeScreen;