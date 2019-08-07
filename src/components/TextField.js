import React, { PureComponent } from 'react';
import { TextInput, StyleSheet } from 'react-native';

import { underline, grey, heading } from '../styles/colors';
import { fieldHeight } from '../styles/styleguide';

class TextField extends PureComponent {
    render() {
        return (
            <TextInput
                placeholderTextColor={grey}
                {...this.props}
                style={[styles.field, this.props.style]}
            />
        );
    }
}

const styles = StyleSheet.create({
    field: {
        color: heading,
        marginTop: 24,
        width: '100%',
        height: fieldHeight,
        borderBottomWidth: 1,
        borderColor: underline
    }
});

export default TextField;
