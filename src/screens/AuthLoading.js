import { Component } from 'react';
import { AsyncStorage } from 'react-native';

class AuthLoading extends Component {
    constructor() {
        super();
        this.bootstrap();
    }

    bootstrap = async () => {
        const userToken = await AsyncStorage.getItem('userToken');
        this.props.navigation.navigate(userToken ? 'SignIn' : 'SignIn');
    };

    render() {
        return false;
    }
}

export default AuthLoading;
