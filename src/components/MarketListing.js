
import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  View,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  ScrollView,
  Image,
  StyleSheet,
} from 'react-native';
import HeartButton from './buttons/HeartButton';
import Stars from './Stars';
import colors from '../styles/Colors';

export default class MarketListing extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { title, boldTitle } = this.props;
    const titleStyle = boldTitle ? { fontSize: 22, fontWeight: '600' } : { fontSize: 18 };
    const {
      listing
    } = this.props;
    return (
      <TouchableHighlight
        style={styles.card}
        key={`listing-${listing.id}`}
      >
        <View>
          <Text style={[{ color: listing.color }, styles.listingType]}>
            {listing.type}
          </Text>
          {true
            ? (
              <View style={styles.addToFavoriteBtn}>
                <HeartButton
                  color={colors.white}
                  selectedColor={colors.pink}
                // selected={favouriteListings.indexOf(listing.id) > -1}
                // onPress={() => handleAddToFav(listing)}
                />
              </View>
            )
            : null}
          <Image
            style={styles.image}
            resizeMode="contain"
            source={listing.photo}
          />

          <Text
            style={styles.listingTitle}
            numberOfLines={2}
          >
            {listing.title}
          </Text>
          <Text style={styles.listingPrice}>
            $
          {listing.price}
            {' '}
            {listing.priceType}
          </Text>
          {listing.stars > 0
            ? (
              <Stars
                votes={listing.stars}
                size={10}
                color={colors.green02}
              />
            )
            : null}
        </View>
      </TouchableHighlight>
    );
  }
}

MarketListing.propTypes = {
  listing: PropTypes.array.isRequired,
};

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
  },
  titleWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 21,
    paddingRight: 21,
  },
  title: {
    color: colors.gray04,
  },
  seeAllBtn: {
    marginTop: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  seeAllBtnText: {
    color: colors.gray04,
    marginRight: 5,
  },
  scrollView: {
    marginTop: 20,
    marginLeft: 15,
    marginBottom: 40,
  },
  card: {
    marginHorizontal: 6,
    marginVertical:2,
    //width: 157,
    flexDirection: 'column',
    backgroundColor: colors.white,
    //minHeight: 100,
    borderRadius: 1,
    borderStyle: 'solid',
    borderColor: '#ccc',
    borderRadius: 10,
    shadowRadius: 10,
    shadowColor: '#ccc',
    padding: 10,
  },
  image: {
    width: undefined,
    flex: 1,
    height: 100,
    borderRadius: 8,
    marginBottom: 7,
  },
  listingTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.gray04,
    marginTop: 2,
  },
  listingType: {
    fontWeight: '700',
    fontSize: 10,
  },
  addToFavoriteBtn: {
    position: 'absolute',
    right: 12,
    top: 7,
    zIndex: 2,
  },
  listingPrice: {
    color: colors.gray04,
    marginTop: 4,
    marginBottom: 2,
    fontSize: 12,
    fontWeight: '300',
  },
});
