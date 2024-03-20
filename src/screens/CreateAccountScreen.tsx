import React, {useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import InputComponent from '../components/InputComponent';
import CraeteAccountButton from '../components/CreateAccountButton';

const CreateAccountScreen = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [passward, setPassward] = useState('');
  const [error, setError] = useState(false);

  const onChangeName = newName => {
    setName(newName);
  };

  const onChangeEmail = newEmail => {
    setEmail(newEmail);
  };

  const onChangePassward = newPassward => {
    setPassward(newPassward);
  };

  const onCreateAccountPressed = () => {
    if (!name) {
      setError(true);
    } else {
      setError(false);
    }

    if (!email) {
      setError(true);
    } else {
      setError(false);
    }

    if (!passward) {
      setError(true);
    } else {
      setError(false);
    }

    if (!name || !email || !passward) {
      return;
    } else {
      console.log('Submitted:', name, email, passward);
      navigation.navigate('Tab');
    }
  };

  const alreadyAccountPressed = () => {
    console.log('Already have an account pressed');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}>
        <Image
          source={require('../assests/backbutton.png')}
          style={styles.backbutton}></Image>
      </TouchableOpacity>
      <Text style={styles.maintext}>Create an account</Text>
      <Text style={styles.subtext}>Invest and double your income now</Text>
      <InputComponent
        placeholder="Full name"
        value={name}
        onChangeText={onChangeName}
        error={error}></InputComponent>
      {error ? (
        <Text style={styles.errortext}>Enter Valid Name</Text>
      ) : null}
      <InputComponent
        placeholder="Email address"
        value={email}
        onChangeText={onChangeEmail}
        error={error}></InputComponent>
      {error ? (
        <Text style={styles.errortext}>Enter Valid Email</Text>
      ) : null}
      <InputComponent
        placeholder="Passward"
        secureTextEntry={true}
        value={passward}
        onChangeText={onChangePassward}
        error={error}></InputComponent>
      {error ? (
        <Text style={styles.errortext}>Enter Valid Passward</Text>
      ) : null}
      <CraeteAccountButton
        title={'Create account'}
        onPress={onCreateAccountPressed}></CraeteAccountButton>
      <TouchableOpacity onPress={alreadyAccountPressed}>
        <Text style={styles.text}>Already have an account?</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 30,
  },

  backbutton: {
    height: 12,
    width: 6,
    marginBottom: 20,
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
    fontSize: 16,
    textAlign: 'center',
    color: '#000000',
    marginBottom: 40,
  },

  text: {
    color: '#31A062',
    fontWeight: 'bold',
    fontSize: 15,
    alignSelf: 'center',
    marginTop: 20,
  },

  errortext: {
    color: 'red',
  },
});

export default CreateAccountScreen;
