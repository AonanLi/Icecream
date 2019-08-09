import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet } from 'react-native';
import _ from 'lodash';

import Page from '../../components/Page';
import Button from '../../components/Button';
import FlavourPicker from './FlavourPicker';

import { editOrder } from '../../actions/orders';

import flavours from '../../util/flavours';
import { deviceHeight, padding } from '../../styles/styleguide';
import { pink1, brown3, white, brown4 } from '../../styles/colors';

const height = deviceHeight * 0.4125;

class Home extends PureComponent {
    render() {
        const { ordered, editOrder } = this.props;
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
                <FlavourPicker ordered={ordered} editOrder={editOrder} />
                <View style={styles.panel}>
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
        backgroundColor: white
    },
    top: {
        width: '100%',
        padding,
        paddingBottom: 0
    },
    title: {
        fontSize: 39,
        color: brown4
    },
    subtitle: {
        fontSize: 19,
        color: brown3,
        marginTop: 16
    },
    panel: {
        height,
        width: '100%',
        backgroundColor: pink1,
        borderTopLeftRadius: padding,
        borderTopRightRadius: padding,
        paddingHorizontal: padding,
        paddingVertical: padding,
        justifyContent: 'space-between'
    },
    panelTitle: {
        fontSize: 26,
        color: brown4
    },
    list: {
        height: 60
    },
    order: {
        fontSize: 16,
        color: brown3
    },
    total: {
        fontSize: 16,
        color: brown4
    }
});

export default connect(
    state => state.orders,
    { editOrder }
)(Home);
