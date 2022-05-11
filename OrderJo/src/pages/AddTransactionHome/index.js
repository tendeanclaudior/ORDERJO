import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {AddTransactionHome1, Button, Gap, Header} from '../../components';
import {Logohome, Vector} from '../../assets';
import {Cabai} from '../../assets/image';

const AddTransactionHome = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header title={'Transaction'} />
      <Gap height={25} />
      <View style={styles.container}>
        <AddTransactionHome1 title1={'Rp 150.000'} image={Cabai} />
        <Gap height={320} />
        <View>
          <Text style={styles.text}>Total</Text>
        </View>
        <View style={styles.text2}>
          <Text style={styles.text}>Rp 150.000</Text>
          <Gap height={5} />
          <View style={styles.border} />
        </View>
        <Gap height={22} />
        <Button
          title={'COD'}
          onPress={() => navigation.replace('ScreenThankyou')}
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

export default AddTransactionHome;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#DBE0A0',
    paddingHorizontal: 24,
    paddingVertical: 24,
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
