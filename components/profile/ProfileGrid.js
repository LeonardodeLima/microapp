import React from 'react';
import {View, Image, Text} from 'react-native';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';

const data = [
  {key: '1'},
  {key: '2'},
  {key: '3'},
  {key: '4'},
  {key: '5'},
  {key: '6'},
  {key: '7'},
  {key: '8'},
  {key: '9'},
  {key: '10'},
];

function Test(props) {
  return (
    <View style={{flex: 1}}>
      <TouchableOpacity
        onPress={() => console.log('Pressed Profile Grid Image')}>
        <Image
          source={{uri: `https://source.unsplash.com/random/200x200?sig=${props.index}`}}
          style={{
            height: 150,
            flex: 1,
            marginEnd: 2,
            marginBottom: 2,
            alignItems: 'center',
          }}
        />
      </TouchableOpacity>
    </View>
  );
}

export default function ProfileGrid() {
  return (
    <FlatList
      data={data}
      style={{marginTop: 2, marginStart: 2}}
      renderItem={({item, index}) => <Test index={index}/>}
      numColumns={3}
      indicatorStyle={'white'}
      showsVerticalScrollIndicator={true}
    />
  );
}
