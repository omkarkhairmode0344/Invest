import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import Info from '../components/Info';

const AccountScreen = ({navigation}) => {
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
      <Text style={styles.maintext}>Profile</Text>
      <View style={styles.imagecontainer}>
        <Image
          source={require('../assests/Userlogo.png')}
          style={styles.imagestyle}></Image>
        <Text style={styles.headertext}>Jonas Macroni</Text>
        <Text style={styles.subheadertext}>Expert</Text>
      </View>
      <Info
        sourceone={require('../assests/contactinfo.png')}
        title="Contact Info"
        sourcetwo={require('../assests/back.png')}></Info>
        <Info
        sourceone={require('../assests/fund.png')}
        title="Source of Funding Info"
        sourcetwo={require('../assests/back.png')}></Info>
        <Info
        sourceone={require('../assests/bankaccount.png')}
        title="Bank Account Info"
        sourcetwo={require('../assests/back.png')}></Info>
        <Info
        sourceone={require('../assests/file.png')}
        title="Document Info"
        sourcetwo={require('../assests/back.png')}></Info>
        <Info
        sourceone={require('../assests/settings.png')}
        title="Settings"
        sourcetwo={require('../assests/back.png')}></Info>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 20,
  },

  backbutton: {
    height: 15,
    width: 9,
    marginBottom: 10,
  },

  maintext: {
    fontWeight: 'bold',
    fontSize: 30,
    color: '#000000',
    marginBottom: 20,
  },

  imagestyle: {
    height: 120,
    width: 120,
    borderRadius: 60,
    marginBottom: 10,
  },

  imagecontainer: {
    alignItems: 'center',
    marginBottom: 20,
  },

  headertext: {
    fontSize: 22,
    color: '#000000',
    fontWeight: '500',
  },

  subheadertext: {
    fontSize: 16,
    color: '#000000',
    fontWeight: '300',
  },
});

export default AccountScreen;
