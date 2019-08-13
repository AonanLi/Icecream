import React from 'react';
import { View, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { white, pink2 } from '../styles/colors';
import { defaultPadding, panelBottomPadding } from '../styles/styleguide';

const buttonRadius = 45;
const iconSize = 60;

const Panel = ({ height, icon, onPress, padding = defaultPadding, style, children }) => {
    const panelStyle = {
        width: '100%',
        backgroundColor: white,
        borderTopLeftRadius: 60,
        borderTopRightRadius: 60,
        justifyContent: 'space-between',
        padding,
        height: height + panelBottomPadding,
        position: 'absolute',
        bottom: -panelBottomPadding,
        paddingBottom: padding + panelBottomPadding
    };
    return (
        <ScrollView contentContainerStyle={styles.background}>
            <View style={[panelStyle, style]}>
                {icon && (
                    <TouchableOpacity onPress={onPress} style={styles.circle} activeOpacity={0.8}>
                        <View style={styles.icon}>
                            <Ionicons name={icon} size={iconSize} color={white} />
                        </View>
                    </TouchableOpacity>
                )}
                {children}
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    background: StyleSheet.absoluteFillObject,
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
