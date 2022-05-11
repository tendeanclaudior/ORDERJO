import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {Logo} from '../../assets';
import {Gap} from '../../components';

const ScreenThankyou = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Home');
    }, 3000);
  }, []);
  return (
    <View style={styles.page}>
      <Logo />
      <Text style={styles.text}>ORDERJO</Text>
      <Gap height={128} />
      <View>
        <Text style={styles.text2}>THANKYOU FOR YOUR BUYING!!!</Text>
      </View>
      <Gap height={20} />
      <View>
        <Text>Untuk pesanan anda akan kami kirim</Text>
        <Text>melalui J&T. Dan untuk No.Resi akan </Text>
        <Text>kami kirim melalui e-mail anda. Once</Text>
        <Text>Again Thankyou and God Bless!!!</Text>
      </View>
    </View>
  );
};

export default ScreenThankyou;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#598300BF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 34,
    fontFamily: 'WorkSans-Bold',
    color: '#000000',
  },
  text2: {
    fontSize: 20,
    fontFamily: 'WorkSans-Bold',
    color: '#000000',
  },
});
