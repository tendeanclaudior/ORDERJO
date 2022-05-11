import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    ScrollView,
  } from 'react-native';
  import React from 'react';
  import {Button, CheckBoxes, Gap} from '../../components';
  import {Logohome, Pic1, Pic2, Pic3, Vector} from '../../assets';
  
  const Cart = ({navigation}) => {
    return (
      <View style={styles.page}>
        <View style={styles.cartWrapper}>
          <Text style={styles.text}>Cart</Text>
        </View>
        <Gap height={25} />
        <ScrollView>
          <View style={styles.boxWrapper}>
            <View style={styles.box1}>
              <View>
                <Gap height={50} />
                <CheckBoxes />
              </View>
              <Pic2 />
              <View>
                <Gap height={50} />
                <Text style={styles.text1}>Cabai</Text>
                <View style={styles.border} />
              </View>
            </View>
            <Gap height={30} />
            <View style={styles.box2}>
              <View>
                <Gap height={50} />
                <CheckBoxes />
              </View>
              <Pic1 />
              <View>
                <Gap height={50} />
                <Text style={styles.text1}>Kentang</Text>
                <View style={styles.border} />
              </View>
            </View>
            <Gap height={30} />
            <View style={styles.box3}>
              <View>
                <Gap height={50} />
                <CheckBoxes />
              </View>
              <Pic3 />
              <View>
                <Gap height={50} />
                <Text style={styles.text1}>Brokoli</Text>
                <View style={styles.border} />
              </View>
            </View>
            <Gap height={30} />
            <Button
              title={'BUY'}
              onPress={() => navigation.replace('TransactionFromCart')}
            />
          </View>
        </ScrollView>
        <Gap height={19} />
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
  
  export default Cart;
  
  const styles = StyleSheet.create({
    page: {
      flex: 1,
    },
    cartWrapper: {
      flexDirection: 'row',
      backgroundColor: '#DBE0A0',
      alignItems: 'center',
      paddingHorizontal: 24,
      paddingVertical: 38,
    },
    text: {
      fontSize: 25,
      fontFamily: 'WorkSans-Medium',
      color: '#000000',
    },
    boxWrapper: {
      flex: 1,
      backgroundColor: '#DBE0A0',
      flexDirection: 'column',
      paddingTop: 47,
    },
    box1: {
      flexDirection: 'row',
    },
    text1: {
      fontSize: 20,
      fontFamily: 'WorkSans-Medium',
      color: 'black',
      paddingLeft: 50,
    },
    box2: {
      flexDirection: 'row',
    },
    box3: {
      flexDirection: 'row',
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
    border: {
      borderBottomWidth: 1,
      width: 110,
      left: 50,
    },
  });
  