import React, { PureComponent } from 'react';
import {
    AsyncStorage,
    StyleSheet,
    KeyboardAvoidingView,
    View,
    Text,
    Image,
    TouchableOpacity
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import Page from '../components/Page';
import TextField from '../components/TextField';
import Button from '../components/Button';

import images from '../util/images';
import { deviceHeight, deviceWidth } from '../styles/styleguide';
import { brown4, white, pink2 } from '../styles/colors';

const radius = 60;
const padding = 54;
const buttonRadius = 45;

const size = 60;
const height = deviceHeight * 0.48;

class SignIn extends PureComponent {
    render() {
        return (
            <Page>
                <Image style={styles.background} source={images.background} />
                <Image style={styles.image} source={images.signin} />
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
    background: {
        width: deviceWidth,
        height: deviceHeight * 0.52 + 60,
        position: 'absolute'
    },
    image: {
        width: 200,
        height: 494,
        position: 'absolute',
        right: -68,
        bottom: height - 154
    },
    greeting: {
        width: '100%',
        padding,
        paddingTop: deviceHeight * 0.11
    },
    title: {
        fontSize: 40,
        color: white,
        fontWeight: '500'
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
        height: 30,
        marginBottom: 24
    },
    password: {
        marginTop: 12
    },
    buttons: {
        marginTop: 34,
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 24
    }
});

export default SignIn;
