import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

import Page from '../components/Page';
import Panel from '../components/Panel';
import Tag from '../components/Tag';

import priceamount from '../helpers/priceamount';

import { pink1, pink3, brown4 } from '../styles/colors';
import { deviceWidth } from '../styles/styleguide';

const Flavour = ({ navigation }) => {
    const { item } = navigation.state.params;
    const { image, key, tags, brief } = item;
    return (
        <Page style={styles.background}>
            <View style={styles.top}>
                <Image style={styles.image} source={image} />
            </View>
            <Panel style={styles.panel} icon="ios-add" onPress={() => {}}>
                <View>
                    <Text style={styles.title}>{key}</Text>
                    <Text style={styles.price}>{priceamount(item)}</Text>
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
