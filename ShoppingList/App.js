import React, {useState} from 'react';
import {View, Text, Image, StyleSheet, FlatList, Alert} from 'react-native';
import Header from './components/Header';
import 'react-native-get-random-values';
import {uuid} from 'uuidv4';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';


let size = 100;

const App = () => {

  const [items, setItems] = useState([
    {id: uuid(), text: 'Toilet Paper'},
    {id: uuid(), text: 'Cough Drops'},
    {id: uuid(), text: 'Lysol'},
    {id: uuid(), text: 'Hand Sanitizer'},
  ]);

  const deleteItem = (id) => {
    setItems(prevItems => {
      return prevItems.filter(item => item.id != id);
    });
  }

  const addItem = (text) => {
    //Empty string is trying to be added
    if (!text) {
      Alert.alert('Error', 'Please enter an item', {text: 'Ok'});
    }
    else {
      setItems(prevItems => {
        return [{id: uuid(), text}, ...prevItems];
    });
    }
  }

  return (
    <View style = {styles.container}>
      <Header title = 'Corona Virus Survival List'/>
        <Image source = {{uri: 'https://news.psu.edu/sites/default/files/styles/threshold-992/public/CIDD_MOOC_LOGO.jpg?itok=tUhD1kOC'}} 
          style = {styles.img}
        />
    <AddItem addItem = {addItem} />
    <FlatList 
      data = {items} 
      renderItem = {({item}) => 
      (<ListItem item={item} deleteItem = {deleteItem} />
      )}
    />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    paddingTop: 60, 
  },
  // text: { 
  //   color: 'red', 
  //   fontSize: 50 
  // },
  img : {
    width: size,
    height: size,
    borderRadius: size / 2,
    alignSelf: 'center',
  },
});

export default App;