import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    ScrollView,
  } from 'react-native';
  import React from 'react';
  import {Gap} from '../../components';
  import {
    Buy,
    ImageProfil,
    Logohome,
    Pic1,
    Pic2,
    Pic3,
    Vector,
  } from '../../assets';
  
  const Home = ({navigation}) => {
    return (
      <View style={styles.page}>
        <View style={styles.profilWrapper}>
          <Text style={styles.text}>ORDERJO</Text>
          <Gap width={170} />
          <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
            <ImageProfil />
          </TouchableOpacity>
        </View>
        <Gap height={39} />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.home}>
            <View>
              <TouchableOpacity
                onPress={() => navigation.navigate('DetailProduk')}>
                <Pic1 />
              </TouchableOpacity>
            </View>
            <Gap height={6} />
            <View style={styles.bv}>
              <View>
                <TouchableOpacity>
                  <Buy />
                </TouchableOpacity>
              </View>
              <Gap width={99.5} />
              <View>
                <TouchableOpacity>
                  <Vector />
                </TouchableOpacity>
              </View>
            </View>
            <Gap height={64} />
            <View>
              <TouchableOpacity>
                <Pic2 />
              </TouchableOpacity>
            </View>
            <Gap height={6} />
            <View style={styles.bv}>
              <View>
                <TouchableOpacity
                  onPress={() => navigation.replace('AddTransactionHome')}>
                  <Buy />
                </TouchableOpacity>
              </View>
              <Gap width={99.5} />
              <View>
                <TouchableOpacity>
                  <Vector />
                </TouchableOpacity>
              </View>
            </View>
            <Gap height={64} />
            <View>
              <TouchableOpacity>
                <Pic3 />
              </TouchableOpacity>
            </View>
            <Gap height={6} />
            <View style={styles.bv}>
              <View>
                <TouchableOpacity>
                  <Buy />
                </TouchableOpacity>
              </View>
              <Gap width={99.5} />
              <View>
                <TouchableOpacity>
                  <Vector />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
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
  
  export default Home;
  
  const styles = StyleSheet.create({
    page: {
      flex: 1,
      backgroundColor: '#FFFFFF',
    },
    profilWrapper: {
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
    home: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    bv: {
      flexDirection: 'row',
      justifyContent: 'space-between',
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
  