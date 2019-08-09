import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { white, pink2 } from '../styles/colors';
import { padding } from '../styles/styleguide';

const buttonRadius = 45;
const iconSize = 60;

const Panel = ({ children, style, icon, onPress }) => (
    <View style={[styles.panel, style]}>
        <TouchableOpacity onPress={onPress} style={styles.circle} activeOpacity={0.8}>
            <View style={styles.icon}>
                <Ionicons name={icon} size={iconSize} color={white} />
            </View>
        </TouchableOpacity>
        {children}
    </View>
);

const styles = StyleSheet.create({
    panel: {
        height: '50%',
        width: '100%',
        backgroundColor: white,
        borderTopLeftRadius: 60,
        borderTopRightRadius: 60,
        justifyContent: 'space-between',
        padding
    },
    circle: {
        height: buttonRadius * 2,
        width: buttonRadius * 2,
        borderRadius: buttonRadius,
        backgroundColor: pink2,
        position: 'absolute',
        top: -buttonRadius,
        right: buttonRadius
    },
    icon: {
        width: iconSize,
        height: iconSize,
        position: 'absolute',
        alignItems: 'center',
        left: buttonRadius - iconSize / 2,
        top: buttonRadius - iconSize / 2
    }
});

export default Panel;
