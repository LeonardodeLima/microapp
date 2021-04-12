import React from 'react';
import ProfileHeader from './ProfileHeader';
import { FlatList} from 'react-native-gesture-handler';
import UserBio from './UserBio';
import EditProfileButton from './EditProfileButton';
import ConstantStories from './ConstantStories';
import LineSeperator from './LineSeperator';
import ProfileGrid from './ProfileGrid';
import colors from '../../../res/colors';
import GridIcon from './gridIcon';

const data = [{key: '1'}];

export default function profileScreen() {
  return (
    <FlatList
      style={{flex: 1, backgroundColor: colors.bottomBackGround}}
      data={data}
      renderItem={() => (
        <>
          <ProfileHeader />
          <UserBio />
          <EditProfileButton />
          <ConstantStories />
          <LineSeperator />
          <GridIcon />
          <ProfileGrid />
        </>
      )}
    />
  );
}
