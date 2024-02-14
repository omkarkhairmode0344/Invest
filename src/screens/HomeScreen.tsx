import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';

const plans = [
  {id: '1', image: require('../assests/Gold.png')},
  {id: '2', image: require('../assests/Silver.png')},
  {id: '3', image: require('../assests/Gold.png')},
  {id: '4', image: require('../assests/Silver.png')},
  {id: '5', image: require('../assests/Gold.png')},
  {id: '6', image: require('../assests/Silver.png')},
  {id: '7', image: require('../assests/Gold.png')},
  {id: '8', image: require('../assests/Silver.png')},
  {id: '9', image: require('../assests/Gold.png')},
  {id: '10', image: require('../assests/Silver.png')},
];

const investment = [
  {
    id: '1',
    title: 'Basic type of investments',
    discription:
      'This is how you set your foot for 2020 Stock market recession',
    image: require('../assests/Userlogo.png'),
  },
  {
    id: '2',
    title: 'Basic type of investments',
    discription:
      'This is how you set your foot for 2020 Stock market recession',
    image: require('../assests/Userlogo.png'),
  },
  {
    id: '3',
    title: 'Basic type of investments',
    discription:
      'This is how you set your foot for 2020 Stock market recession',
    image: require('../assests/Userlogo.png'),
  },
  {
    id: '4',
    title: 'Basic type of investments',
    discription:
      'This is how you set your foot for 2020 Stock market recession',
    image: require('../assests/Userlogo.png'),
  },
  {
    id: '5',
    title: 'Basic type of investments',
    discription:
      'This is how you set your foot for 2020 Stock market recession',
    image: require('../assests/Userlogo.png'),
  },
  {
    id: '6',
    title: 'Basic type of investments',
    discription:
      'This is how you set your foot for 2020 Stock market recession',
    image: require('../assests/Userlogo.png'),
  },
  {
    id: '7',
    title: 'Basic type of investments',
    discription:
      'This is how you set your foot for 2020 Stock market recession',
    image: require('../assests/Userlogo.png'),
  },
  {
    id: '8',
    title: 'Basic type of investments',
    discription:
      'This is how you set your foot for 2020 Stock market recession',
    image: require('../assests/Userlogo.png'),
  },
  {
    id: '9',
    title: 'Basic type of investments',
    discription:
      'This is how you set your foot for 2020 Stock market recession',
    image: require('../assests/Userlogo.png'),
  },
  {
    id: '10',
    title: 'Basic type of investments',
    discription:
      'This is how you set your foot for 2020 Stock market recession',
    image: require('../assests/Userlogo.png'),
  },
];

const renderItemPlans = ({item}) => (
  <View>
    <Image style={styles.renderimage} source={item.image}></Image>
  </View>
);

const renderItemInvestment = ({item}) => (
  <View
    style={{
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 3,
    }}>
    <View style={{flex: 1}}>
      <Text style={{fontSize: 16, fontWeight: 'bold'}}>{item.title}</Text>
      <Text style={{}}>{item.discription}</Text>
    </View>
    <Image style={styles.rendertwoimage} source={item.image}></Image>
  </View>
);

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.subcontainer}>
        <TouchableOpacity>
          <Image
            source={require('../assests/menu.png')}
            style={styles.menu}></Image>
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={require('../assests/Notification.png')}
            style={styles.menu}></Image>
        </TouchableOpacity>
      </View>
      <Text style={styles.maintext}>Welcome, Omkar.</Text>
      <View style={styles.headercontainer}>
        <Text style={styles.headeronetext}>Your total asset portfolio</Text>
        <View style={styles.subheadercontainer}>
          <Text style={styles.headertwotext}>N203,935</Text>
          <View style={styles.containerinvestnow}>
            <TouchableOpacity>
              <Text style={styles.investnowtext}>Invest now</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.bestplancontainer}>
        <Text style={styles.bestplantext}>Best Plans</Text>
        <TouchableOpacity>
          <Text style={styles.seealltext}>See All</Text>
        </TouchableOpacity>
      </View>
      <View>
        <FlatList
          data={plans}
          renderItem={renderItemPlans}
          keyExtractor={item => item.id}
          horizontal={true}></FlatList>
      </View>
      <Text style={styles.investmentguidetext}>Investment Guide</Text>
      <View style={{flex: 1}}>
        <FlatList
          data={investment}
          renderItem={renderItemInvestment}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}></FlatList>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 20,
  },

  subcontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },

  menu: {
    height: 24,
    width: 24,
  },

  maintext: {
    fontWeight: 'bold',
    fontSize: 30,
    color: '#000000',
    marginBottom: 20,
  },

  headercontainer: {
    height: 110,
    borderRadius: 20,
    backgroundColor: '#31A062',
    justifyContent: 'center',
    padding: 20,
    marginBottom: 25,
  },

  headeronetext: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 15,
  },

  headertwotext: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 30,
  },

  subheadercontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  containerinvestnow: {
    height: 35,
    width: 100,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    marginTop: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },

  investnowtext: {
    color: '#31A062',
    fontWeight: 'bold',
  },

  bestplantext: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#000000',
  },

  seealltext: {
    fontWeight: '500',
    fontSize: 15,
    color: 'red',
  },

  bestplancontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  renderimage: {
    height: 170,
    width: 130,
    resizeMode: 'contain',
  },

  investmentguidetext: {
    marginTop: 25,
    fontWeight: 'bold',
    fontSize: 20,
    color: '#000000',
  },

  rendertwoimage: {
    height: 50,
    width: 50,
    borderRadius: 25,
  },
});

export default HomeScreen;
