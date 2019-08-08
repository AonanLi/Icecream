import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

import { pink3 } from '../styles/colors';

const Button = ({ label, onPress }) => (
    <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    button: {
        borderBottomWidth: 1,
        borderColor: pink3,
        height: 20
    },
    text: {
        color: pink3
    }
});

export default Button;
