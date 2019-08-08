import React, { PureComponent } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Page from '../../components/Page';

import { padding } from '../../styles/styleguide';
import { pink1, brown1, white, brown3 } from '../../styles/colors';

const height = 344;

class Home extends PureComponent {
    render() {
        return (
            <Page style={styles.background}>
                <View style={styles.top}>
                    <Text style={styles.title}>Hey, Polar</Text>
                    <Text style={styles.subtitle}>We have smth yummy for you</Text>
                </View>
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
        padding
    },
    title: {
        fontSize: 42,
        color: brown3
    },
    subtitle: {
        fontSize: 20,
        color: brown1,
        marginTop: 24
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
