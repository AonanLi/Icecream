import React, { Component } from 'react';
import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';
import { Image } from 'react-native';
import * as Font from 'expo-font';
import Promise from 'promise';
import _ from 'lodash';

import App from './src/App';

import images from './src/util/images';

const cacheImages = images =>
    images.map(image => {
        if (typeof image === 'object' && image.uri) {
            return Image.prefetch(image.uri);
        } else {
            return Asset.fromModule(image).downloadAsync();
        }
    });

const cacheFonts = fonts => fonts.map(font => Font.loadAsync(font));

class Setup extends Component {
    constructor() {
        super();
        this.state = { isReady: false };
    }

    async _loadAssetsAsync() {
        const imageAssets = cacheImages(_.toArray(images));
        const fontAssets = cacheFonts([
            {
                OpenSans: require('./assets/fonts/OpenSans-Regular.ttf')
            },
            {
                OpenSansSemi: require('./assets/fonts/OpenSans-SemiBold.ttf')
            }
        ]);
        await Promise.all([...fontAssets, ...imageAssets]);
    }

    render() {
        if (!this.state.isReady) {
            return (
                <AppLoading
                    startAsync={this._loadAssetsAsync}
                    onFinish={() => this.setState({ isReady: true })}
                />
            );
        }
        return <App />;
    }
}

export default Setup;
