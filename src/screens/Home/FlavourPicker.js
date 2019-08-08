import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import _ from 'lodash';

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

const FlavourPicker = ({ ordered, editOrder }) => {
    const data = flavours.map(f => ({ ...f, amount: _.get(ordered, f.key) }));
    const total = _.sum(_.map(ordered));
    const disabled = total === 3;
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.heading}>Top Flavours</Text>
                <Button label="See more" />
            </View>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={data}
                renderItem={({ item, index }) => {
                    const { key, image, price, amount } = item;
                    return (
                        <View
                            key={index}
                            style={{ ...styles.flavour, marginLeft: index ? 0 : padding }}
                        >
                            <View
                                style={{
                                    ...styles.square,
                                    backgroundColor: colors.background[index % 3]
                                }}
                            >
                                <Image source={image} style={styles.image} />
                                <View style={styles.names}>
                                    <Text style={styles.name}>{key}</Text>
                                </View>
                                <Text style={styles.price}>{`$ ${price.toFixed(2)}`}</Text>
                                <Text style={styles.amount}>{amount}</Text>
                                <TouchableOpacity
                                    onPress={() => {
                                        if (!disabled) {
                                            editOrder(key, true);
                                        }
                                    }}
                                    style={{
                                        ...styles.button,
                                        backgroundColor: colors.price[index % 3]
                                    }}
                                >
                                    <View style={styles.plus}>
                                        <Ionicons name="ios-add" size={iconSize} color={white} />
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    );
                }}
            />
        </View>
    );
};

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
        paddingVertical: 26,
        paddingLeft: 12,
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
