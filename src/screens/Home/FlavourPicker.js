import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import Button from '../../components/Button';

import flavours from '../../util/flavours';
import { padding } from '../../styles/styleguide';
import {
    brown1,
    brown2,
    brown3,
    brown4,
    pink1,
    pink4,
    white1,
    white2,
    white
} from '../../styles/colors';

const size = 112;
const offset = size * 0.4;
const height = 116;
const headerHeight = 30;
const margin = 8;
const iconSize = 40;

const colors = {
    background: [pink1, white1, white2],
    price: [pink4, brown2, brown1]
};

const FlavourPicker = () => (
    <View style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.heading}>Top Flavours</Text>
            <Button label="See more" />
        </View>
        <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={flavours}
            renderItem={({ item, index }) => (
                <View key={index} style={{ ...styles.flavour, marginLeft: index ? 0 : padding }}>
                    <View
                        style={{ ...styles.square, backgroundColor: colors.background[index % 3] }}
                    >
                        <Image source={item.image} style={styles.image} />
                        <View style={styles.names}>
                            <Text style={styles.name}>{item.key}</Text>
                        </View>
                        <Text style={styles.price}>{`$ ${item.price.toFixed(2)}`}</Text>
                        <TouchableOpacity
                            style={{ ...styles.button, backgroundColor: colors.price[index % 3] }}
                        >
                            <View style={styles.plus}>
                                <Ionicons name="ios-add" size={iconSize} color={white} />
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            )}
        />
    </View>
);

const styles = StyleSheet.create({
    container: { height: height + offset + headerHeight + margin + 6 },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: padding,
        height: headerHeight,
        marginBottom: margin
    },
    heading: {
        color: brown4,
        fontSize: 26
    },
    flavour: {
        width: 142,
        marginRight: size / 4
    },
    square: {
        width: '100%',
        height,
        borderRadius: 42,
        marginTop: offset,
        padding: 26,
        paddingRight: 0,
        backgroundColor: 'blue'
    },
    image: {
        width: size,
        height: size,
        position: 'absolute',
        top: -size * 0.46,
        right: -size * 0.33
    },
    names: {
        height: 48,
        justifyContent: 'center'
    },
    name: {
        fontSize: 20,
        color: brown4
    },
    price: {
        marginTop: 6,
        fontSize: 18,
        color: brown3
    },
    button: {
        height: 40,
        width: 40,
        borderRadius: 20,
        position: 'absolute',
        right: -5,
        bottom: -5
    },
    plus: {
        width: iconSize,
        height: iconSize,
        position: 'absolute',
        alignItems: 'center'
    }
});

export default FlavourPicker;
