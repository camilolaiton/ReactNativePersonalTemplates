import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Asset } from 'expo-asset';
import { AppLoading } from 'expo';
import { FontAwesome } from '@expo/vector-icons';
import * as Font from 'expo-font';
import InitView from './Views/InitView';

function cacheImages(images) {
    return images.map(image => {
        if (typeof image === 'string') {
            return Image.prefetch(image);
        } else {
            return Asset.fromModule(image).downloadAsync();
        }
    });
}

function cacheFonts(fonts) {
    return fonts.map(font => Font.loadAsync(font));
}

class LoginView extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            isReady: false,
        }
    }
    
    async _loadAssetsAsync() {
        const imageAssets = cacheImages([
            require('../../assets/hotel2.jpg'),
        ]);

        const fontAssets = cacheFonts([FontAwesome.font]);

        await Promise.all([...imageAssets]);
    }
    
    render() {
        if (!this.state.isReady) {
          return (
            <AppLoading
              startAsync={this._loadAssetsAsync}
              onFinish={() => this.setState({ isReady: true })}
              onError={console.warn}
            />
          );
        }
    
        return (
            <InitView />
        );
    }
}

export default LoginView;