import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ImageProfil} from '../../assets';
import {Button, Gap, Profile2} from '../../components';
import {auth} from '../../config/Firebase';
import {signOut} from 'firebase/auth';
import {showMessage} from 'react-native-flash-message';

const Profile = ({navigation}) => {
  const SingOutUser = () => {
    signOut(auth)
      .then(res => {
        navigation.replace('SignIn');
      })
      .catch(error => {
        showMessage({
          message: error.message,
          type: 'default',
          backgroundColor: '#FF0000',
          color: '#000000',
        });
      });
  };
  return (
    <View style={styles.page}>
      <Gap height={100} />
      <View style={styles.profile}>
        <View style={styles.profile2}>
          <ImageProfil />
        </View>
        <Gap height={12} />
        <View style={styles.position}>
          <Text style={styles.text}>Name</Text>
        </View>
        <Profile2 title1={'Claudio R Tendean'} />
        <View style={styles.position}>
          <Text style={styles.text}>Email</Text>
        </View>
        <Profile2 title1={'diotendean1@gmail.com'} />
        <View style={styles.position}>
          <Text style={styles.text}>Address</Text>
        </View>
        <Profile2 title1={'Kakenturan Barat'} />
        <Gap height={80} />
        <Button title={'Logout'} onPress={SingOutUser} />
        <Gap height={80} />
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#DBE0A0',
  },
  profile: {
    flex: 1,
    paddingHorizontal: 24,
    paddingVertical: 24,
  },
  profile2: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  position: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontFamily: 'WorkSans-Medium',
    color: 'black',
  },
});
