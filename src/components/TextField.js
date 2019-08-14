import React, { PureComponent } from 'react';
import { TextInput, StyleSheet } from 'react-native';

import { text } from '../styles/styleguide';
import { brown1, brown3, brown4 } from '../styles/colors';

class TextField extends PureComponent {
    render() {
        return (
            <TextInput
                placeholderTextColor={brown1}
                {...this.props}
                style={[styles.field, this.props.style]}
            />
        );
    }
}

const styles = StyleSheet.create({
    field: {
        ...text,
        fontSize: 16.5,
        color: brown4,
        width: '100%',
        height: 54,
        borderBottomWidth: 1,
        borderColor: brown3
    }
});

export default TextField;
