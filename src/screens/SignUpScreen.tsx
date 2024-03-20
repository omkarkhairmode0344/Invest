import React from 'react';
import {
  Button,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import CraeteAccountButton from '../components/CreateAccountButton';

const SignUpScreen = ({navigation}) => {
  const createAccountPressed = () => {
    navigation.navigate('CreateAccount');
  };
  const loginPressed = () => {
    console.log('Login Pressed');
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../assests/signuplogo.png')}
        style={styles.image}></Image>
      <Text style={styles.maintext}>Stay on top of your finanace with us.</Text>
      <Text style={styles.subtext}>
        We are your new financial Advisors to recommed the best investments for
        you.
      </Text>
      <CraeteAccountButton
        title="Create account"
        onPress={createAccountPressed}></CraeteAccountButton>
      <TouchableOpacity onPress={loginPressed}>
        <Text style={styles.text}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },

  image: {
    height: 275,
    width: 300,
    marginTop: 85,
    marginBottom: 10,
  },

  maintext: {
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center',
    color: '#000000',
    marginBottom: 10,
  },

  subtext: {
    fontWeight: '500',
    fontSize: 18,
    textAlign: 'center',
    color: '#000000',
    paddingHorizontal: 35,
    marginBottom: 40,
  },

  text: {
    color: '#31A062',
    fontWeight: 'bold',
    fontSize: 15,
  },
});

export default SignUpScreen;
