import React from 'react';
import {View, Text} from 'react-native';

export default function UserBio(props) {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        marginStart: 10,
        marginBottom: 20,
      }}>
      <View style={{marginBottom: 5}}>
        <Text style={{color: '#000', fontWeight: 'bold'}}>John Doe</Text>
      </View>
      <View style={{marginBottom: 5}}>
        <Text style={{color: '#000'}}>{props.content}</Text>
      </View>
    </View>
  );
}
