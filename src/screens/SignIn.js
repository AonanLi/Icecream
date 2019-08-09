import React, { PureComponent } from 'react';
import { AsyncStorage, StyleSheet, KeyboardAvoidingView, View, Text, Image } from 'react-native';

import Page from '../components/Page';
import Panel from '../components/Panel';
import TextField from '../components/TextField';
import Button from '../components/Button';

import images from '../util/images';
import { deviceHeight, deviceWidth } from '../styles/styleguide';
import { brown4, white } from '../styles/colors';

const padding = 54;

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
                    <Panel style={styles.panel} onPress={this.login} icon="ios-arrow-round-forward">
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
                    </Panel>
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
        padding
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
