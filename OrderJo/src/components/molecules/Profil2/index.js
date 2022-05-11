import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Profile2 = ({title1}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title1}</Text>
    </View>
  );
};

export default Profile2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
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
});