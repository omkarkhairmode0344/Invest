import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignUpScreen from '../screens/SignUpScreen';
import CreateAccountScreen from '../screens/CreateAccountScreen';
import TabNavigation from './TabNavigation';
import DrawerNavigation from './DrawerNavigation';

const Stack = createNativeStackNavigator();

const SplashScreen = ({navigation}) => {
  setTimeout(() => {
    navigation.replace('SignUp');
  }, 2000);

  return (
    <View style={styles.container}>
      <Image source={require('../assests/mainlogo.png')} style={styles.image} />
    </View>
  );
};

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUpScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="CreateAccount"
          component={CreateAccountScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Tab"
          component={TabNavigation}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },

  image: {
    height: 95,
    width: 139,
  },
});

export default Navigation;
