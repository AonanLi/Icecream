import React, { PureComponent } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Page from '../../components/Page';
import FlavourPicker from './FlavourPicker';

import { padding } from '../../styles/styleguide';
import { pink1, brown3, white, brown4 } from '../../styles/colors';

const height = 264;

class Home extends PureComponent {
    render() {
        return (
            <Page style={styles.background}>
                <View style={styles.top}>
                    <Text style={styles.title}>Hey, Polar</Text>
                    <Text style={styles.subtitle}>We have smth yummy for you</Text>
                </View>
                <FlavourPicker />
                <View style={styles.panel} />
            </Page>
        );
    }
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: white
    },
    top: {
        width: '100%',
        padding,
        paddingBottom: 0
    },
    title: {
        fontSize: 42,
        color: brown4
    },
    subtitle: {
        fontSize: 20,
        color: brown3,
        marginTop: 16
    },
    panel: {
        height,
        width: '100%',
        backgroundColor: pink1,
        borderTopLeftRadius: padding,
        borderTopRightRadius: padding,
        padding
    }
});

export default Home;
