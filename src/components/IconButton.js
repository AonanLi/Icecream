import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { white, grey } from '../styles/colors';

const IconButton = ({ icon, size, onPress, disabled, hide, style }) =>
    !hide && (
        <TouchableOpacity
            onPress={disabled ? () => {} : onPress}
            style={{
                height: size,
                width: size,
                borderRadius: size / 2,
                position: 'absolute',
                ...style,
                ...(disabled ? { backgroundColor: grey } : {})
            }}
            activeOpacity={disabled ? 1 : 0.2}
        >
            <View
                style={{
                    width: size,
                    height: size,
                    position: 'absolute',
                    alignItems: 'center'
                }}
            >
                <Ionicons name={icon} size={size} color={white} />
            </View>
        </TouchableOpacity>
    );

export default IconButton;
