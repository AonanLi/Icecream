import React, { Component } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';
import * as Haptics from 'expo-haptics';
import _ from 'lodash';

import Button from '../../components/Button';
import IconButton from '../../components/IconButton';

import flavours from '../../util/flavours';
import { defaultPadding, text } from '../../styles/styleguide';
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

const FlavourPicker = props => {
    const data = flavours.map(f => ({ ...f, amount: _.get(props.ordered, f.key) }));
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
                renderItem={({ item, index }) => (
                    <FlavourItem key={index} index={index} item={item} {...props} />
                )}
            />
        </View>
    );
};

const disable = props => _.sum(_.map(props.ordered)) === 3;

class FlavourItem extends Component {
    shouldComponentUpdate(nextProps) {
        return (
            nextProps.item.amount !== this.props.item.amount ||
            disable(nextProps) !== disable(this.props)
        );
    }

    render() {
        const { item, index, navigation, editOrder } = this.props;
        const disabled = disable(this.props);
        const { key, image, price, amount } = item;
        const viewColor = colors.background[index % 3];
        const buttonColor = colors.price[index % 3];
        const display = `$ ${price.toFixed(2)}${amount ? ` x ${amount}` : ''}`;
        return (
            <TouchableOpacity
                key={index}
                onPress={() => navigation.navigate('Flavour', { item })}
                style={{ ...styles.flavour, marginLeft: index ? 0 : defaultPadding }}
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
                    <Text style={styles.price}>{display}</Text>
                    <IconButton
                        icon="ios-add"
                        size={iconSize}
                        onPress={() => {
                            editOrder(key, true);
                            Haptics.selectionAsync();
                        }}
                        disabled={disabled}
                        style={{
                            right: -5,
                            bottom: -5,
                            backgroundColor: buttonColor
                        }}
                    />
                    <IconButton
                        icon="ios-remove"
                        size={iconSize}
                        onPress={() => {
                            editOrder(key);
                            Haptics.selectionAsync();
                        }}
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
    }
}

const styles = StyleSheet.create({
    container: { height: height + offset + headerHeight + margin + 6 },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: defaultPadding,
        height: headerHeight,
        marginBottom: margin
    },
    heading: {
        ...text,
        color: brown4,
        fontSize: 24
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
        ...text,
        fontSize: 17,
        color: brown4
    },
    price: {
        ...text,
        marginTop: 6,
        fontSize: 14,
        color: brown3
    }
});

export default FlavourPicker;
