import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';

const InputComponent = props => {
  return (
    <View
      style={[props.error ? styles.errortextcontainer : styles.textcontainer]}>
      <TextInput
        placeholder={props.placeholder}
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry={props.secureTextEntry}
        value={props.value}
        onChangeText={props.onChangeText}></TextInput>
    </View>
  );
};

const styles = StyleSheet.create({
  textcontainer: {
    borderWidth: 1,
    borderColor: '#828282',
    height: 50,
    borderRadius: 15,
    paddingLeft: 10,
    marginVertical: 10,
  },

  errortextcontainer: {
    borderWidth: 1,
    borderColor: 'red',
    height: 50,
    borderRadius: 15,
    paddingLeft: 10,
    marginVertical: 10,
  },
});

export default InputComponent;
