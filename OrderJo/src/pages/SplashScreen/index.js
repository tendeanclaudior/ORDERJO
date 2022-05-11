import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {Logo} from '../../assets';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('SignIn');
    }, 3000);
  }, []);
  return (
    <View style={styles.container}>
      <Logo />
      <Text style={styles.text}>ORDERJO</Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#598300BF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 34,
    fontFamily: 'WorkSans-Bold',
    color: 'black',
  },
});
