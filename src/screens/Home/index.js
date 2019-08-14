import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { View, Text, Image, StyleSheet } from 'react-native';
import _ from 'lodash';

import Page from '../../components/Page';
import Button from '../../components/Button';
import FlavourPicker from './FlavourPicker';

import { editOrder } from '../../actions/orders';

import flavours from '../../util/flavours';
import images from '../../util/images';
import { deviceHeight, defaultPadding, text } from '../../styles/styleguide';
import { pink1, brown3, brown4 } from '../../styles/colors';

const height = deviceHeight * 0.4125;

class Home extends PureComponent {
    render() {
        const { ordered } = this.props;
        const sorted = _.sortBy(
            _.map(ordered, (o, key) => ({
                key,
                amount: o
            })),
            'key'
        );
        const total = _.reduce(
            ordered,
            (r, v, k) => r + v * flavours.find(f => f.key === k).price,
            0
        ).toFixed(2);
        const hasOrder = sorted.length > 0;
        return (
            <Page style={styles.background}>
                <View style={styles.top}>
                    <Text style={styles.title}>Hey, Polar</Text>
                    <Text style={styles.subtitle}>We have smth yummy for you</Text>
                </View>
                <FlavourPicker {...this.props} />
                <View style={styles.panel}>
                    <Image style={styles.image} source={images.order} />
                    <Text style={styles.panelTitle}>Your Choice</Text>
                    <View style={styles.list}>
                        {sorted.map(o => (
                            <View key={o.key}>
                                <Text style={styles.order}>{`${o.amount} x ${o.key}`}</Text>
                            </View>
                        ))}
                    </View>
                    {hasOrder && <Text style={styles.total}>{`Total: $${total}`}</Text>}
                    {hasOrder && <Button label="Order Now" />}
                </View>
            </Page>
        );
    }
}

const styles = StyleSheet.create({
    background: {
        justifyContent: 'space-between'
    },
    top: {
        width: '100%',
        padding: defaultPadding,
        paddingBottom: 0
    },
    title: {
        ...text,
        fontSize: 36,
        color: brown4
    },
    subtitle: {
        ...text,
        fontSize: 17.5,
        color: brown3,
        marginTop: 16
    },
    panel: {
        height,
        width: '100%',
        backgroundColor: pink1,
        borderTopLeftRadius: defaultPadding,
        borderTopRightRadius: defaultPadding,
        padding: defaultPadding,
        justifyContent: 'space-between'
    },
    image: {
        width: 170,
        height: 420,
        position: 'absolute',
        right: -20,
        top: -60
    },
    panelTitle: {
        ...text,
        fontSize: 23.5,
        color: brown4
    },
    list: {
        height: 60
    },
    order: {
        ...text,
        fontSize: 14.5,
        color: brown3
    },
    total: {
        ...text,
        fontSize: 14.5,
        color: brown4
    }
});

export default connect(
    state => state.orders,
    { editOrder }
)(Home);
