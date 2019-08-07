import { createAppContainer, createStackNavigator, createSwitchNavigator } from 'react-navigation';

import AuthLoading from './screens/AuthLoading';
import SignIn from './screens/SignIn';
import Home from './screens/Home';

const App = createStackNavigator({ Home }, { headerMode: 'none', initialRouteName: 'Home' });

export default createAppContainer(
    createSwitchNavigator(
        {
            AuthLoading,
            SignIn,
            App
        },
        {
            initialRouteName: 'AuthLoading'
        }
    )
);
