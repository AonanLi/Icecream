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
import Button from '../components/Button';

import { deviceHeight } from '../styles/styleguide';
import { brown4, white, pink2 } from '../styles/colors';

const radius = 60;
const padding = 54;
const buttonRadius = 45;

const size = 60;
const height = deviceHeight * 0.535;

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
                        <View>
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
                                style={styles.password}
                            />
                        </View>
                        <View style={styles.buttons}>
                            <Button label="Forgot password?" />
                            <Button label="Sign up" />
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
        paddingTop: deviceHeight * 0.11
    },
    title: {
        fontSize: 40,
        color: white
    },
    keyboard: {
        width: '100%'
    },
    panel: {
        height,
        width: '100%',
        backgroundColor: white,
        borderTopLeftRadius: radius,
        borderTopRightRadius: radius,
        padding,
        justifyContent: 'space-between'
    },
    circle: {
        height: buttonRadius * 2,
        width: buttonRadius * 2,
        borderRadius: buttonRadius,
        backgroundColor: pink2,
        position: 'absolute',
        top: -buttonRadius,
        right: buttonRadius
    },
    arrow: {
        width: size,
        height: size,
        position: 'absolute',
        alignItems: 'center',
        left: buttonRadius - size / 2,
        top: buttonRadius - size / 2
    },
    heading: {
        fontSize: 26,
        color: brown4,
        height: 36
    },
    password: {
        marginTop: 20,
        marginBottom: 20
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 24
    }
});

export default SignIn;
