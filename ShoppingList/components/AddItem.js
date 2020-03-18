import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
let size = 100;

const AddItem = ({ addItem }) => {
    const [text, setText] = useState('');

const onChange = (textValue) => setText(textValue);

    return (
        <View>
            <TextInput placeholder = "Add Item..." style =
                {styles.input} onChangeText = {onChange} />
            <TouchableOpacity style = {styles.btn} onPress= {() => 
            addItem(text)}>
                <Text style = {styles.btnText}><Icon name = "plus" size = 
                {20} /> Add Item </Text>
            </TouchableOpacity>
        </View>
    );
};


//Basically settings for each element on the port
const styles = StyleSheet.create({
    input: {
        height: 60,
        padding: 8, 
        margin: 5,
    },
    btn: {
        backgroundColor: 'black',
        padding: 9,
        margin: 5,
    },
    btnText: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center'
    },
    
});

export default AddItem;