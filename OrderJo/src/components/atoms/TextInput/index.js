import {StyleSheet, Text, View, TextInput as TextInputRN} from 'react-native';
import React from 'react';

const TextInput = ({title, placeholder, ...rest}) => {
  return (
    <View>
      <Text style={styles.text}>{title}</Text>
      <TextInputRN style={styles.input} placeholder={placeholder} {...rest} />
    </View>
  );
};

export default TextInput;

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontFamily: 'WorkSans-Medium',
    marginBottom: 14,
    color: '#000000',
  },
  input: {
    borderWidth: 1,
    borderColor: '#020202',
    borderRadius: 8,
    paddingLeft: 10,
    paddingHorizontal: 10,
  },
});