import React, {useState, useEffect} from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
} from 'react-native';
import InputComponent from '../components/InputComponent';

const ProductScreen = () => {
  const [search, setSearch] = useState('');
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const onChangeText = newSearch => {
    setSearch(newSearch);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      const json = await response.json();
      setData(json);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const renderItem = ({item}) => (
    <View style={styles.renderitemcontainer}>
      <View
        style={{
          flexDirection: 'row',
        }}>
        <View style={{padding: 2}}>
          <Image style={styles.imagestyle} source={{uri: item.image}}></Image>
        </View>
        <View style={{flex: 1, padding: 2}}>
          <Text style={styles.titlestyle} numberOfLines={1}>
            {item.title}
          </Text>
          <Text style={styles.descriptionstyle} numberOfLines={2}>
            {item.description}
          </Text>
          <View style={{flexDirection: 'row', marginTop: 10}}>
            <Text style={styles.pricestyle}>Prize: {item.price}</Text>
            <Text style={styles.categorystyle} numberOfLines={1}>
              Category: {item.category}
            </Text>
          </View>
          <View style={{flexDirection: 'row', flex: 1, alignItems: 'flex-end'}}>
            <Text style={styles.ratingstyle}>Rating:</Text>
            <Text style={styles.ratingstyle}>Rate- {[item.rating.rate]}</Text>
            <Text style={styles.ratingstyle}>Count- {[item.rating.count]}</Text>
          </View>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <InputComponent
        placeholder="Search"
        value={search}
        onChangeText={onChangeText}></InputComponent>
      <View style={styles.subcontainer}>
        {loading ? (
          <ActivityIndicator
            style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}
            size="large"
            color="#0000ff"
          />
        ) : (
          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}></FlatList>
        )}
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
    flex: 1,
  },

  imagestyle: {
    height: 100,
    width: 100,
    resizeMode: 'contain',
  },

  renderitemcontainer: {
    backgroundColor: '#f7f7f7',
    borderRadius: 8,
    marginBottom: 10,
    padding: 5,
  },

  titlestyle: {
    fontWeight: '500',
    color: '#000000',
  },

  descriptionstyle: {
    fontSize: 10,
  },

  pricestyle: {
    color: '#31A062',
    fontWeight: '500',
    fontSize: 12,
    flex: 1,
  },

  categorystyle: {
    color: 'red',
    fontWeight: '500',
    fontSize: 11,
    flex: 1,
  },

  ratingstyle: {
    color: '#8a2be2',
    fontWeight: '500',
    fontSize: 12,
    flex: 1,
  },
});

export default ProductScreen;
