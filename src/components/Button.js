import React from 'react';
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';

import { text } from '../styles/styleguide';
import { pink3 } from '../styles/colors';

const Button = ({ label, onPress }) => (
    <View style={styles.view}>
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.text}>{label}</Text>
        </TouchableOpacity>
    </View>
);

const styles = StyleSheet.create({
    view: {
        flexDirection: 'row'
    },
    button: {
        borderBottomWidth: 1,
        borderColor: pink3,
        height: 26
    },
    text: {
        ...text,
        fontSize: 18.5,
        color: pink3
    }
});

export default Button;
