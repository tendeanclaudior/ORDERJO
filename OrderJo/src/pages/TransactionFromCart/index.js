import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {AddTransactionHome1, Button, Gap, Header} from '../../components';
import {Logohome, Vector} from '../../assets';
import {Cabai, Kentang, Brokoli} from '../../assets/image';

const TransactionFromCart = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header title={'Transaction'} />
      <Gap height={25} />
      <View style={styles.transactionWrapper}>
        <AddTransactionHome1 title1={'RP 150.000'} image={Cabai} />
        <Gap height={30} />
        <AddTransactionHome1 title1={'Rp 500.000'} image={Kentang} />
        <Gap height={30} />
        <AddTransactionHome1 title1={'Rp 200.000'} image={Brokoli} />
        <Gap height={80} />
        <View>
          <Text style={styles.text}>Total</Text>
        </View>
        <View style={styles.text2}>
          <Text style={styles.text}>Rp 850.000</Text>
          <Gap height={5} />
          <View style={styles.border} />
        </View>
        <Gap height={22} />
        <Button
          title={'COD'}
          onPress={() => navigation.navigate('ScreenThankyou')}
        />
      </View>
      <Gap height={25} />
      <View style={styles.buttom}>
        <Gap height={7.5} />
        <View style={styles.buttom2}>
          <View>
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
              <Logohome />
            </TouchableOpacity>
          </View>
          <Gap width={125} />
          <View>
            <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
              <Vector />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default TransactionFromCart;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  transactionWrapper: {
    flex: 1,
    backgroundColor: '#DBE0A0',
    paddingHorizontal: 30,
    paddingVertical: 30,
  },
  text: {
    fontSize: 25,
    fontFamily: 'WorkSans-Medium',
    color: 'black',
  },
  text2: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  border: {
    borderBottomWidth: 1,
    width: 200,
  },
  buttom: {
    backgroundColor: '#DBE0A0',
    height: 50,
  },
  buttom2: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
