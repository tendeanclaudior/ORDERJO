import {StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import {Button, Gap, Header, TextInput} from '../../components';
import {showMessage} from 'react-native-flash-message';
import {auth} from '../../config/Firebase';
import {signInWithEmailAndPassword} from 'firebase/auth';

const SignIn = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onIn = () => {
    const getData = {
      email: email,
      password: password,
    };
    signInWithEmailAndPassword(auth, email, password)
      .then(res => {
        navigation.navigate('Home', {
          uid: res.user.uid,
        });
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
      <Header title={'Sign In'} />
      <View style={styles.contentWrapper}>
        <TextInput
          title={'Email'}
          placeholder={'Type Your Email'}
          value={email}
          onChangeText={value => setEmail(value)}
        />
        <Gap height={35} />
        <TextInput
          title={'Password'}
          placeholder={'Type Your Password'}
          value={password}
          onChangeText={value => setPassword(value)}
          secureTextEntry
        />
        <Gap height={69} />
        <View style={styles.button}>
          <Button title={'Sing In'} onPress={onIn} />
          <Button
            title={'Create Account'}
            onPress={() => navigation.navigate('SignUp')}
          />
        </View>
      </View>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  contentWrapper: {
    flex: 1,
    backgroundColor: '#DBE0A0',
    paddingHorizontal: 28,
    paddingTop: 27,
    marginTop: 25,
  },
  button: {
    marginTop: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
