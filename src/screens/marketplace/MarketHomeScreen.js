import React from 'react';
import { View, Text, Button, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import colors from '../../styles/Colors';
import transparentHeaderStyle from '../../styles/navigation';
import NavBarButton from '../../components/buttons/NavBarButton';

import listings from '../../data/mocklistings';
import MarketListing from '../../components/MarketListing';

class HomeScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    headerRight: <NavBarButton
      handleButtonPress={() => navigation.navigate('CreateNewListing')}
      location="right"
      color={colors.white} icon={<Icon name="ios-options" color={colors.white} size={30} />}
    />
  });

  renderListings() {
    return listings.map((listing) => (
      <View key={`listing-${listing.id}`} >
        <MarketListing
          key={`listing-item-${listing.id}`}
          listing={listing}
        />
      </View>
    ));
  }

  render() {
    return (
      <View style={styles.wrapper}>
        <ScrollView>
          {this.renderListings()}
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: colors.lightGray,
  }
});
export default HomeScreen;