import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Pic1} from '../../assets';
import {Gap, Header} from '../../components';

const DetailProduk = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header title={'Detail Produk'} onBack={() => navigation.goBack()} />
      <Gap height={25} />
      <View style={styles.details}>
        <View style={styles.details2}>
          <Pic1 />
        </View>
        <Text style={styles.text}>Kentang</Text>
        <View style={styles.text2}>
          <Text> Di jual perkarung dengan </Text>
          <Text> kualitas terbaik, hasil dari </Text>
          <Text> perkebunan modoinding. </Text>
        </View>
        <Text style={styles.text3}>Rp. 500.000</Text>
      </View>
    </View>
  );
};

export default DetailProduk;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  details: {
    flex: 1,
    backgroundColor: '#DBE0A0',
  },
  details2: {
    alignItems: 'center',
    paddingTop: 36,
  },
  text: {
    paddingLeft: 120,
    color: 'black',
    top: 34,
    fontFamily: 'WorkSans-Medium',
    fontSize: 20,
  },
  text2: {
    paddingLeft: 125,
    top: 50,
  },
  text3: {
    paddingLeft: 120,
    color: 'black',
    top: 70,
    fontFamily: 'WorkSans-Medium',
    fontSize: 30,
  },
});
