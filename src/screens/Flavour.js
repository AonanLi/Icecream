import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

import Page from '../components/Page';
import Panel from '../components/Panel';
import Tag from '../components/Tag';
import IconButton from '../components/IconButton';

import { pink1, pink3, brown3, brown4 } from '../styles/colors';
import { deviceWidth } from '../styles/styleguide';

const Flavour = ({ navigation }) => {
    const { item } = navigation.state.params;
    const { image, key, price, tags, brief } = item;
    const display = `$ ${price.toFixed(2)}`;
    return (
        <Page style={styles.background}>
            <View style={styles.top}>
                <Image style={styles.image} source={image} />
            </View>
            <Panel style={styles.panel}>
                <View>
                    <Text style={styles.title}>{key}</Text>
                    <Text style={styles.price}>{display}</Text>
                </View>
                <View style={styles.tags}>
                    {tags.map(tag => (
                        <Tag key={tag} tag={tag} />
                    ))}
                </View>
                <View>
                    <Text style={styles.brief}>{brief}</Text>
                </View>
            </Panel>
            <IconButton
                icon="ios-arrow-round-back"
                size={40}
                iconColor={brown3}
                onPress={() => navigation.goBack()}
                style={{ top: 36, left: 24 }}
            />
        </Page>
    );
};

const styles = StyleSheet.create({
    background: {
        backgroundColor: pink1
    },
    top: {
        height: '41%',
        justifyContent: 'center'
    },
    image: {
        width: deviceWidth * 0.56,
        height: deviceWidth * 0.504
    },
    panel: {
        height: '59%'
    },
    title: {
        color: brown4,
        fontSize: 31
    },
    price: {
        color: pink3,
        fontSize: 26
    },
    tags: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start'
    },
    brief: {
        fontSize: 16,
        color: brown4
    }
});

export default Flavour;
