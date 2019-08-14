import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

import tags from '../util/tags';
import { text } from '../styles/styleguide';
import { brown3 } from '../styles/colors';

const Tag = ({ tag }) => (
    <TouchableOpacity style={{ ...styles.tag, backgroundColor: tags[tag] }}>
        <Text style={styles.text}>{tag}</Text>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    tag: {
        marginRight: 8,
        borderRadius: 14,
        paddingVertical: 10,
        paddingHorizontal: 18,
        marginTop: 4,
        marginBottom: 4
    },
    text: {
        ...text,
        fontSize: 15.5,
        color: brown3
    }
});

export default Tag;
