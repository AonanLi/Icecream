import React from 'react';
import { View, StyleSheet } from 'react-native';

import { pink3 } from '../styles/colors';

const Page = ({ children, style }) => <View style={[styles.container, style]}>{children}</View>;

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: pink3
    }
});

export default Page;
