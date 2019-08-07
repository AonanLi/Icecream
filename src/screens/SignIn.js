import React, { PureComponent } from 'react';
import {
    AsyncStorage,
    StyleSheet,
    KeyboardAvoidingView,
    View,
    Text,
    TouchableOpacity
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import Page from '../components/Page';
import TextField from '../components/TextField';

import { padding } from '../styles/styleguide';
import { heading, white, pink, button } from '../styles/colors';

const size = 60;
const height = 344;

class SignIn extends PureComponent {
    render() {
        return (
            <Page>
                <View style={styles.greeting}>
                    <Text style={styles.title}>Welcome</Text>
                    <Text style={styles.title}>back</Text>
                </View>
                <KeyboardAvoidingView style={styles.keyboard} behavior="position">
                    <View style={styles.panel}>
                        <TouchableOpacity
                            onPress={this.login}
                            style={styles.circle}
                            activeOpacity={0.8}
                        >
                            <View style={styles.arrow}>
                                <Ionicons
                                    name="ios-arrow-round-forward"
                                    size={size}
                                    color={white}
                                />
                            </View>
                        </TouchableOpacity>
                        <Text style={styles.heading}>Please Sign In</Text>
                        <TextField
                            placeholder="Email"
                            onChangeText={() => {}}
                            autoComplete="username"
                            textContentType="username"
                            autoCapitalize="none"
                        />
                        <TextField
                            placeholder="Password"
                            onChangeText={() => {}}
                            autoComplete="password"
                            textContentType="password"
                            secureTextEntry
                        />
                        <View style={styles.buttons}>
                            <TouchableOpacity style={styles.button}>
                                <Text style={styles.text}>Forgot password?</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.button}>
                                <Text style={styles.text}>Sign up</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </KeyboardAvoidingView>
            </Page>
        );
    }

    login = async () => {
        await AsyncStorage.setItem('userToken', 'abc');
        this.props.navigation.navigate('App');
    };
}

const styles = StyleSheet.create({
    greeting: {
        width: '100%',
        padding,
        paddingTop: padding * 1.5
    },
    title: {
        fontSize: 42,
        color: white
    },
    keyboard: {
        width: '100%'
    },
    panel: {
        height,
        width: '100%',
        backgroundColor: white,
        borderTopLeftRadius: padding,
        borderTopRightRadius: padding,
        padding
    },
    circle: {
        height: padding * 2,
        width: padding * 2,
        borderRadius: padding,
        backgroundColor: button,
        position: 'absolute',
        bottom: height - padding,
        right: padding
    },
    arrow: {
        width: size,
        height: size,
        position: 'absolute',
        alignItems: 'center',
        left: padding - size / 2,
        top: padding - size / 2
    },
    heading: {
        fontSize: 28,
        color: heading,
        height: 36
    },
    buttons: {
        marginTop: 48,
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 20
    },
    button: {
        borderBottomWidth: 1,
        borderColor: pink
    },
    text: {
        color: pink
    }
});

export default SignIn;
