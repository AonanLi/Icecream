import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

import tags from '../util/tags';
import { brown3 } from '../styles/colors';

const Tag = ({ id }) => {
    const { label, color } = tags[id];
    return (
        <TouchableOpacity style={{ ...styles.tag, backgroundColor: color }}>
            <Text style={styles.text}>{label}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    tag: {
        marginRight: 8,
        borderRadius: 14,
        paddingVertical: 10,
        paddingHorizontal: 18,
        marginBottom: 8
    },
    text: {
        fontSize: 16,
        color: brown3
    }
});

export default Tag;
