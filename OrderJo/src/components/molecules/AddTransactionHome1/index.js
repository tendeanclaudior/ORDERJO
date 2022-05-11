import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {Gap} from '../../atoms';

const AddTransactionHome1 = ({title1, image}) => {
  return (
    <View style={styles.container}>
      <View style={styles.transactionWrapper}>
        <View>
          <Image source={image} />
        </View>
        <Gap width={72} />
        <View style={styles.textWrapper}>
          <Text style={styles.text}>{title1}</Text>
        </View>
      </View>
    </View>
  );
};

export default AddTransactionHome1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
    padding: 20,
    backgroundColor: '#598300',
    borderRadius: 10,
    elevation: 10,
  },
  text: {
    fontSize: 20,
    fontFamily: 'WorkSans-Medium',
    color: 'black',
  },
  transactionWrapper: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  textWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});