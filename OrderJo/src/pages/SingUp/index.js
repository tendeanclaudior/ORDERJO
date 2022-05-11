import {
    Image,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    ScrollView,
  } from 'react-native';
  import React, {useState} from 'react';
  import {Button, Gap, Header, TextInput} from '../../components';
  import {launchImageLibrary} from 'react-native-image-picker';
  import {showMessage} from 'react-native-flash-message';
  import {auth} from '../../config/Firebase';
  import {createUserWithEmailAndPassword} from 'firebase/auth';
  
  const SignUP = ({navigation}) => {
    const [picture, setPicture] = useState('');
    const [hasPicture, setHasPicture] = useState(false);
  
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [password, setPassword] = useState('');
  
    const getPic = async () => {
      const result = await launchImageLibrary({
        maxHeight: 200,
        maxWidth: 200,
        includeBase64: true,
      });
      if (result.didCancel) {
        setHasPicture(false);
        showMessage({
          message: 'Upload Photo Dibatalkan',
          type: 'default',
          backgroundColor: '#FF0000',
          color: '#000000',
        });
      } else {
        setPicture(result.assets[0].uri);
        setHasPicture(true);
      }
    };
  
    const Register = () => {
      const getData = {
        name: name,
        email: email,
        address: address,
        password: password,
      };
      createUserWithEmailAndPassword(auth, email, password)
        .then(res => {
          console.log('sucess, ', res.user.uid);
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
        <Header title={'Sign Up'} />
        <View style={styles.contentWrapper}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.position}>
              <TouchableOpacity onPress={getPic}>
                {hasPicture && (
                  <Image source={{uri: picture}} style={styles.addphoto2} />
                )}
                {!hasPicture && (
                  <View style={styles.addPhoto}>
                    <Text style={styles.textPhoto}>add Photo</Text>
                  </View>
                )}
              </TouchableOpacity>
            </View>
            <TextInput
              title="Name"
              placeholder={'Type Your Name'}
              value={name}
              onChangeText={text => setName(text)}
            />
            <Gap height={9} />
            <TextInput
              title="Email"
              placeholder={'Type Your Email'}
              value={email}
              onChangeText={text => setEmail(text)}
            />
            <Gap height={9} />
            <TextInput
              title="Address"
              placeholder={'Type Full Your Address'}
              value={address}
              onChangeText={text => setAddress(text)}
            />
            <Gap height={9} />
            <TextInput
              title="Password"
              placeholder={'Type Your Password'}
              value={password}
              onChangeText={text => setPassword(text)}
              secureTextEntry
            />
            <Gap height={22} />
            <View style={styles.button}>
              <Button title={'Continue'} onPress={Register} />
              <Gap height={22} />
              <Button
                title={'Sign In'}
                onPress={() => navigation.navigate('SignIn')}
              />
            </View>
          </ScrollView>
        </View>
      </View>
    );
  };
  
  export default SignUP;
  
  const styles = StyleSheet.create({
    page: {
      flex: 1,
    },
    contentWrapper: {
      flex: 1,
      backgroundColor: '#DBE0A0',
      paddingLeft: 28,
      paddingHorizontal: 35,
      marginTop: 25,
    },
    addPhoto: {
      width: 90,
      height: 90,
      backgroundColor: '#E5E5E5',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 77.5,
      marginTop: 12,
    },
    textPhoto: {
      fontFamily: 'WorkSans-Medium',
      color: '#C0C0C0',
    },
    position: {
      alignItems: 'center',
    },
    addphoto2: {
      height: 90,
      width: 90,
      borderRadius: 77.5,
      marginTop: 12,
    },
    button: {
      marginTop: 25,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
  });
  