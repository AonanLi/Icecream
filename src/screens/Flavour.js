import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

import Page from '../components/Page';
import Panel from '../components/Panel';
import Tag from '../components/Tag';
import IconButton from '../components/IconButton';

import { pink1, pink3, brown3, brown4 } from '../styles/colors';
import { deviceWidth, deviceHeight, panelBottomPadding } from '../styles/styleguide';

const intolerant = [{ name: 'lactose', icon: 'md-cafe' }, { name: 'gluten', icon: 'ios-flame' }];
const height = deviceHeight * 0.59;

const Flavour = ({ navigation }) => {
    const { item } = navigation.state.params;
    const { image, key, price, tags, brief } = item;
    const display = `$ ${price.toFixed(2)}`;
    return (
        <Page style={styles.background}>
            <View style={styles.top}>
                <Image style={styles.image} source={image} />
            </View>
            <Panel height={height} style={{ paddingBottom: panelBottomPadding }}>
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
                <View>
                    {intolerant.map(i => (
                        <View key={i.name} style={styles.intolerant}>
                            <IconButton
                                icon={i.icon}
                                size={24}
                                iconColor={pink3}
                                onPress={() => navigation.goBack()}
                                style={{
                                    position: 'relative',
                                    marginRight: 12,
                                    right: 4,
                                    bottom: 4
                                }}
                            />
                            <Text style={styles.brief}>{`For ${i.name} intolerant people`}</Text>
                        </View>
                    ))}
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
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute'
    },
    image: {
        width: deviceWidth * 0.56,
        height: deviceWidth * 0.504
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
    },
    intolerant: {
        flexDirection: 'row',
        height: 32
    }
});

export default Flavour;
