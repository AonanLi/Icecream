import React from 'react';
import { View, StyleSheet } from 'react-native';

const Page = ({ children, style }) => <View style={[styles.container, style]}>{children}</View>;

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject
    }
});

export default Page;
