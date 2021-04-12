import React, {useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Animated,
  TouchableOpacity,
  Dimensions,
  Platform,
  StatusBar,
  ImageBackground,
} from 'react-native';

import {Avatar, Title, Caption} from 'react-native-paper';

import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {markers, mapDarkStyle, mapStandardStyle} from '../model/mapData';


import {useTheme} from '@react-navigation/native';

const {width, height} = Dimensions.get('window');
const CARD_HEIGHT = 220;
const CARD_WIDTH = width * 0.8;
const SPACING_FOR_CARD_INSET = width * 0.1 - 10;
const MIN_HEIGHT = Platform.OS === 'ios' ? 90 : 55;

const ExploreScreen = ({navigation}) => {
  const theme = useTheme();

  const initialMapState = {
    markers,
    categories: [],
    region: {
      latitude: -7.1464992,
      longitude: -34.7997549,
      latitudeDelta: 0.1,
      longitudeDelta: 0.1,
    },
  };

  const [state, setState] = React.useState(initialMapState);

  let mapIndex = 0;
  let mapAnimation = new Animated.Value(0);

  useEffect(() => {
    mapAnimation.addListener(({value}) => {
      let index = Math.floor(value / CARD_WIDTH + 0.3); // 30%
      if (index >= state.markers.length) {
        index = state.markers.length - 1;
      }
      if (index <= 0) {
        index = 0;
      }

      clearTimeout(regionTimeout);

      const regionTimeout = setTimeout(() => {
        if (mapIndex !== index) {
          mapIndex = index;
          const {coordinate} = state.markers[index];
          _map.current.animateToRegion(
            {
              ...coordinate,
              latitudeDelta: state.region.latitudeDelta,
              longitudeDelta: state.region.longitudeDelta,
            },
            350,
          );
        }
      }, 10);
    });
  });

  const interpolations = state.markers.map((marker, index) => {
    const inputRange = [
      (index - 1) * CARD_WIDTH,
      index * CARD_WIDTH,
      (index + 1) * CARD_WIDTH,
    ];

    const scale = mapAnimation.interpolate({
      inputRange,
      outputRange: [1, 1.5, 1],
      extrapolate: 'clamp',
    });

    return {scale};
  });

  const onMarkerPress = mapEventData => {
    const markerID = mapEventData._targetInst.return.key;

    let x = markerID * CARD_WIDTH + markerID * 20;
    if (Platform.OS === 'ios') {
      x = x - SPACING_FOR_CARD_INSET;
    }

    _scrollView.current.scrollTo({x: x, y: 0, animated: true});
  };

  const _map = React.useRef(null);
  const _scrollView = React.useRef(null);

  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" />
      <MapView
        ref={_map}
        initialRegion={state.region}
        style={styles.container}
        provider={PROVIDER_GOOGLE}
        customMapStyle={theme.dark ? mapDarkStyle : mapStandardStyle}>
        {state.markers.map((marker, index) => {
          const scaleStyle = {
            transform: [
              {
                scale: interpolations[index].scale,
              },
            ],
          };
          return (
            <MapView.Marker
              key={index}
              coordinate={marker.coordinate}
              onPress={e => onMarkerPress(e)}>
              <Animated.View style={[styles.markerWrap]}>
                <Animated.Image
                  source={require('../assets/map_marker.png')}
                  style={[styles.marker, scaleStyle]}
                  resizeMode="cover"
                />
              </Animated.View>
            </MapView.Marker>
          );
        })}
      </MapView>
      <View style={styles.photohBox}>
        <TouchableOpacity
          style={styles.categoryBtn}
          onPress={() => console.warn('Go to camera!')}>
          <Ionicons
            name="camera-outline"
            size={32}
            color={theme.dark ? '#fff' : '#000'}
          />
        </TouchableOpacity>
      </View>
      <Animated.ScrollView
        ref={_scrollView}
        horizontal
        pagingEnabled
        scrollEventThrottle={1}
        showsHorizontalScrollIndicator={false}
        snapToInterval={CARD_WIDTH + 20}
        snapToAlignment="center"
        style={styles.scrollView}
        contentInset={{
          top: 0,
          left: SPACING_FOR_CARD_INSET,
          bottom: 0,
          right: SPACING_FOR_CARD_INSET,
        }}
        contentContainerStyle={{
          paddingHorizontal:
            Platform.OS === 'android' ? SPACING_FOR_CARD_INSET : 0,
        }}
        onScroll={Animated.event(
          [
            {
              nativeEvent: {
                contentOffset: {
                  x: mapAnimation,
                },
              },
            },
          ],
          {useNativeDriver: true},
        )}>
        {state.markers.map((marker, index) => (
          <TouchableOpacity
            activeOpacity={1}
            onPress={() => console.warn('Go to detail!')}>
            <View style={styles.card} key={index}>
              <ImageBackground source={marker.image} style={styles.cardImage}>
                <View style={styles.drawerContent}>
                  <View style={styles.userInfoSection}>
                    <View style={{flexDirection: 'row', marginTop: 15}}>
                      <View
                        style={{
                          marginLeft: 15,
                          marginTop: -8,
                          flexDirection: 'column',
                        }}>
                        <Title style={styles.title}>John Doe</Title>
                        <Caption style={styles.caption}>@j_doe</Caption>

                        <Text style={styles.navTitle}>{marker.title}</Text>
                      </View>
                      {console.log(marker)}
                      <Avatar.Image
                        source={{
                          uri: marker.avatar,
                        }}
                        size={40}
                      />
                    </View>
                  </View>
                </View>
              </ImageBackground>
            </View>
          </TouchableOpacity>
        ))}
      </Animated.ScrollView>
    </View>
  );
};

export default ExploreScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchBox: {
    position: 'absolute',
    marginTop: Platform.OS === 'ios' ? 40 : 20,
    flexDirection: 'row',
    backgroundColor: '#fff',
    width: '90%',
    alignSelf: 'center',
    borderRadius: 5,
    padding: 10,
    shadowColor: '#ccc',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 10,
  },
  photohBox: {
    position: 'absolute',
    marginTop: Platform.OS === 'ios' ? 40 : 85,
    flexDirection: 'row',
    alignSelf: 'flex-end',
    paddingRight: 20,
    padding: 10,
  },
  chipsScrollView: {
    position: 'absolute',
    top: Platform.OS === 'ios' ? 90 : 80,
    paddingHorizontal: 10,
  },
  chipsIcon: {
    marginRight: 5,
  },
  chipsItem: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 8,
    paddingHorizontal: 20,
    marginHorizontal: 10,
    height: 35,
    shadowColor: '#ccc',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 10,
  },
  scrollView: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingVertical: 10,
  },
  endPadding: {
    paddingRight: width - CARD_WIDTH,
  },
  card: {
    elevation: 2,
    backgroundColor: '#FFF',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    marginHorizontal: 10,
    shadowColor: '#000',
    shadowRadius: 5,
    shadowOpacity: 0.3,
    shadowOffset: {x: 2, y: -2},
    height: CARD_HEIGHT,
    width: CARD_WIDTH,
    overflow: 'hidden',
  },
  cardImage: {
    flex: 4,
    width: '100%',
    height: '100%',
    alignSelf: 'center',
    zIndex: 1,
  },
  textContent: {
    flex: 2,
    padding: 10,
    zIndex: 2,
  },
  cardtitle: {
    fontSize: 12,
    // marginTop: 5,
    fontWeight: 'bold',
  },
  cardDescription: {
    fontSize: 12,
    color: '#444',
  },
  markerWrap: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 50,
  },
  marker: {
    width: 30,
    height: 30,
  },
  button: {
    alignItems: 'center',
    marginTop: 5,
  },
  signIn: {
    width: '100%',
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 3,
  },
  textSign: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  slide: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 350,
    height: 350,
    marginVertical: 35,
  },
  text: {
    color: 'white',
    textAlign: 'center',
    fontSize: 17,
  },
  title: {
    fontSize: 32,
    color: 'white',
    textAlign: 'center',
  },
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    flexDirection: 'row',
    alignContent: 'flex-start',
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: 'bold',
    color: 'white',
    paddingRight: 4,
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    color: 'white',
    marginTop: -1,
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  navTitleView: {
    height: MIN_HEIGHT,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: Platform.OS === 'ios' ? 40 : 5,
    opacity: 0,
    color: '#fff',
  },
  navTitle: {
    color: 'white',
    fontSize: 12,
    backgroundColor: 'transparent',
  },
});
