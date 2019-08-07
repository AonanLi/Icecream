import React from 'react';
import { View, StyleSheet } from 'react-native';

import { pink } from '../styles/colors';

const Page = ({ children }) => <View style={styles.container}>{children}</View>;

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: pink
    }
});

export default Page;
