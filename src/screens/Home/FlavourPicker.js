import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';
import _ from 'lodash';

import Button from '../../components/Button';
import IconButton from '../../components/IconButton';

import priceamount from '../../helpers/priceamount';

import flavours from '../../util/flavours';
import { padding } from '../../styles/styleguide';
import { brown1, brown2, brown3, brown4, pink1, pink4, white1, white2 } from '../../styles/colors';

const size = 112;
const offset = size * 0.4;
const height = 108;
const headerHeight = 30;
const margin = 8;
const iconSize = 40;

const colors = {
    background: [pink1, white1, white2],
    price: [pink4, brown2, brown1]
};

const FlavourPicker = ({ ordered, editOrder, navigation }) => {
    const data = flavours.map(f => ({ ...f, amount: _.get(ordered, f.key) }));
    const total = _.sum(_.map(ordered));
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
                    const { key, image, amount } = item;
                    const viewColor = colors.background[index % 3];
                    const buttonColor = colors.price[index % 3];
                    return (
                        <TouchableOpacity
                            key={index}
                            onPress={() => navigation.navigate('Flavour', { item })}
                            style={{ ...styles.flavour, marginLeft: index ? 0 : padding }}
                        >
                            <View
                                style={{
                                    ...styles.square,
                                    backgroundColor: viewColor
                                }}
                            >
                                <Image source={image} style={styles.image} />
                                <View style={styles.names}>
                                    <Text style={styles.name}>{key}</Text>
                                </View>
                                <Text style={styles.price}>{priceamount(item)}</Text>
                                <IconButton
                                    icon="ios-add"
                                    size={iconSize}
                                    onPress={() => editOrder(key, true)}
                                    disabled={total === 3}
                                    style={{
                                        right: -5,
                                        bottom: -5,
                                        backgroundColor: buttonColor
                                    }}
                                />
                                <IconButton
                                    icon="ios-remove"
                                    size={iconSize}
                                    onPress={() => editOrder(key)}
                                    hide={!amount}
                                    style={{
                                        left: -5,
                                        bottom: -5,
                                        backgroundColor: buttonColor
                                    }}
                                />
                            </View>
                        </TouchableOpacity>
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
        width: 150,
        marginRight: size * 0.3
    },
    square: {
        width: '100%',
        height,
        borderRadius: 42,
        marginTop: offset,
        paddingTop: 20,
        paddingLeft: 34,
        paddingRight: 12
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
        fontSize: 18,
        color: brown4
    },
    price: {
        marginTop: 6,
        fontSize: 16,
        color: brown3
    }
});

export default FlavourPicker;
