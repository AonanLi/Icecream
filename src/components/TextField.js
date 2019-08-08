import React, { PureComponent } from 'react';
import { TextInput, StyleSheet } from 'react-native';

import { brown1, grey, brown3 } from '../styles/colors';
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
        color: brown3,
        marginTop: 24,
        width: '100%',
        height: fieldHeight,
        borderBottomWidth: 1,
        borderColor: brown1
    }
});

export default TextField;
