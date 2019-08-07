import React, { PureComponent } from 'react';
import { AsyncStorage, Button } from 'react-native';

import Page from '../components/Page';

class Home extends PureComponent {
    render() {
        return (
            <Page>
                <Button title="Logout" onPress={this.logout} />
            </Page>
        );
    }

    logout = async () => {
        await AsyncStorage.removeItem('userToken');
        this.props.navigation.navigate('SignIn');
    };
}

export default Home;
