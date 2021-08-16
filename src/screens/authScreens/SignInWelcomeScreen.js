import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Dimensions
} from 'react-native';
import { colors, parameters } from './src/global/styles';
import { Icon, Button, SocialIcon } from 'react-native-elements';
import * as Animatable from "react-native-animatable"


import { colors, parameters, title } from '../../global/styles';


const SignInWelcomeScreen = () => {

    return (
        <View
            style={{
                flex: 3,
                justifyContent: 'flex-start',
                alignItems: 'center',
                marginTop: 20
            }} >
            <Text
                style={{
                    fontSize: 26,
                    color: colors.background2,
                    fontWeight: 'bold'
                }}
            >
                DISCOVER RESTAURANTS
            </Text>

            <Text
                style={{
                    fontSize: 26,
                    color: colors.background2,
                    fontWeight: 'bold'
                }}
            >
                IN YOUR AREA
            </Text>







        </View>
    )
}


const styles = StyleSheet.create({

})

export default SignInWelcomeScreen;