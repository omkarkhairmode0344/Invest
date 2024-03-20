import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

const Info = props => {
  return (
    <View style={styles.container}>
      <Image style={styles.imageone} source={props.sourceone}></Image>
      <Text style={styles.text}>{props.title}</Text>
      <Image style={styles.imagetwo} source={props.sourcetwo}></Image>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f7f7f7',
    flexDirection: 'row',
    paddingHorizontal: 10,
    padding: 10,
    alignItems: 'center',
    marginBottom: 20,
  },

  imageone: {
    height: 25,
    width: 25,
  },

  imagetwo: {
    height: 20,
    width: 20,
  },

  text: {
    flex: 1,
    marginLeft: 20,
    fontSize: 16,
    fontWeight: '500',
    color: '#000000',
  },
});

export default Info;
