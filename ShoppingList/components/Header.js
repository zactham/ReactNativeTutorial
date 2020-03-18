import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

let size = 100;

const Header = ({ title }) => {
    return (
        <View style = {styles.header}>
        <Text style = {styles.text}>{title}</Text>
        </View>
    );
};

//If nothing is passed in
Header.defaultProps = {
    title: "Blank List",
};

//Basically settings for each element on the port
const styles = StyleSheet.create({
    header: {
        height: 60,
        padding: 15,
        backgroundColor: 'red',
    },
    text: {
        color: 'white',
        fontSize: 23,
        textAlign: 'center',
    },
});

export default Header;