/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image, View} from 'react-native';
import images from '../res/images';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default function GridIcon() {
  return (
    <View
      style={{
        justifyContent: 'center',
        alignSelf: 'center',
        marginVertical: 10,
        flexDirection: 'row',
        flex: 1
      }}>
      <TouchableOpacity>
        <Image
          source={images.grid}
          style={{width: 35, height: 35, marginRight: 10}}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image
          source={images.grid}
          style={{width: 35, height: 35, marginRight: 10}}
        />
      </TouchableOpacity>
    </View>
  );
}
