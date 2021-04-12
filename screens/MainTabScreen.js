import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import {useTheme, Avatar} from 'react-native-paper';
import {View} from 'react-native-animatable';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import ExploreScreen from './ExploreScreen';

const ExplorerStack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainTabScreen = ({navigation}) => (
  <Tab.Navigator initialRouteName="Explore" activeColor="#fff">
    <Tab.Screen
      name="Explore"
      component={ExporerStackScreen}
      options={{
        tabBarVisible: false,
        tabBarLabel: 'Explorar',
        tabBarIcon: ({color}) => (
          <Icon name="ios-map" color={color} size={26} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default MainTabScreen;

const ExporerStackScreen = ({navigation}) => {
  const {colors} = useTheme();


  return (
    <ExplorerStack.Navigator
      screenOptions={{
        tabBarVisible: false,
        headerShown: false,
        headerTransparent: true,
        headerStyle: {
          backgroundColor: colors.background,
          shadowColor: colors.background, // iOS
          elevation: 0, // Android
        },
        headerTintColor: colors.text,
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <ExplorerStack.Screen
        name="Explorar"
        component={ExploreScreen}
        options={{
        headerShown: true,
          title: '',
          headerLeft: () => (
            <View style={{marginLeft: 10}}>
              <Icon.Button
                name="ios-menu"
                size={25}
                color={colors.text}
                backgroundColor={'transparent'}
                onPress={() => navigation.openDrawer()}
              />
            </View>
          ),
          headerRight: () => (
            <View style={{flexDirection: 'row', marginRight: 10}}>
              <TouchableOpacity
                style={{paddingHorizontal: 10, marginTop: 5}}
                onPress={() => {
                  console.warn('Go to profile!');
                }}>
                <Avatar.Image
                  source={{
                    uri:'https://source.unsplash.com/random/100x100?sig=3',
                  }}
                  size={30}
                />
              </TouchableOpacity>
            </View>
          ),
        }}
      />
    </ExplorerStack.Navigator>
  );
};
