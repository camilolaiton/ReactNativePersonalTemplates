import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, Animated, TouchableOpacity, Easing, StatusBar, TextInput } from 'react-native';

const {width, height} = Dimensions.get('window');

const data = [
    {
        buttonMov: height,
        backMov: -height / 2.5,
        inputOpacity: 1,
        buttonSpaceOpacity: 0,
        inputMov: -50,
    },
    {
        buttonMov: 0,
        backMov: 0,
        inputOpacity: 0,
        buttonSpaceOpacity: 1,
        inputMov: 0,
    },
];

class InitView extends Component {

    constructor (props) {
        super(props);
        
        this.state = {
            valueY: new Animated.Value(0),
            bgY: new Animated.Value(0),
            buttonSpaceOpacity: new Animated.Value(1),
            signInInputsOpacity: new Animated.Value(0),
            signInInputsY: new Animated.Value(0),
        }
    }

    changeInputsOpacity = (value) => {
        Animated.timing(this.state.signInInputsOpacity, {
            toValue: value,
            duration: 1500,
            easing: Easing.inOut(Easing.ease),
            useNativeDriver: true,
        }).start();
    }
    
    changeButtonSpaceOpacity = (value) => {
        Animated.timing(this.state.buttonSpaceOpacity, {
            toValue: value,
            duration: 1000,
            easing: Easing.inOut(Easing.ease),
            useNativeDriver: true,
        }).start();
    }

    changeInputsY = (value) => {
        Animated.timing(this.state.signInInputsY, {
            toValue: value,
            duration: 2000,
            easing: Easing.inOut(Easing.ease),
            useNativeDriver: true,
        }).start();
    }

    moveBackground = (value) => {
        Animated.timing(this.state.bgY, {
            toValue: value,
            duration: 1000,
            useNativeDriver: true,
        }).start();
    }

    moveButton = (value) => {
        // Animated.timing(this.state.valueY, {
        //     toValue: -height / 4,//{ x: 0, y: -height / 3 },
        //     duration: 2000,
        //     easing: Easing.elastic(10),
        //     useNativeDriver: true
        // }).start();

        // Animated.spring(this.state.valueY, {
        //     toValue: { x: 0, y: -height / 3 },
        //     // duration: 1000,
        //     useNativeDriver: false
        // }).start();

        Animated.timing(this.state.valueY, {
            toValue: value,//{ x: 0, y: -height / 3 },
            duration: 2000,
            easing: Easing.inOut(Easing.ease),
            useNativeDriver: true
        }).start();
    }

    moveComponents = (data) => {
        console.log(data)
        this.moveButton(data.buttonMov);
        this.moveBackground(data.backMov);
        this.changeInputsOpacity(data.inputOpacity);
        this.changeButtonSpaceOpacity(data.buttonSpaceOpacity);
        this.changeInputsY(data.inputMov);
    }

    render() {
        return (
            <View style={styles.container}>
                <StatusBar />
                <Animated.View style={{
                    ...StyleSheet.absoluteFill, 
                    transform: [{translateY: this.state.bgY}] 
                }}>
                    <Image 
                        source={require('../../../assets/bed.jpg')}
                        style={styles.bgImage}
                    />
                </Animated.View>

                <Animated.View style={{
                    ...styles.buttonSpace, 
                    transform: [{translateY: this.state.valueY}], 
                    opacity: this.state.buttonSpaceOpacity,
                }}
                >
                    <TouchableOpacity onPress={() => this.moveComponents(data[0])}>
                        <View style={styles.button}>
                            <Text style={styles.signInText}>SIGN IN</Text>
                        </View>
                    </TouchableOpacity>
                
                    <View style={styles.facebookButton}>
                        <Text style={styles.facebookTextButton}>SIGN WITH FACEBOOK</Text>
                    </View>
                </Animated.View>

                <Animated.View style={{
                    ...styles.signInInputs,
                    opacity: this.state.signInInputsOpacity,
                    transform: [{translateY: this.state.signInInputsY}]
                }}
                >
                    <TouchableOpacity onPress={() => this.moveComponents(data[1])}>
                        <View style={styles.closeButton}>
                            <Text style={{
                                fontSize: 15, 
                                fontWeight: "700"
                            }}>
                                X
                            </Text>
                        </View>
                    </TouchableOpacity>

                    <TextInput 
                        placeholder="EMAIL"
                        style={styles.textInput}
                    />
                    <TextInput 
                        placeholder="PASSWORD"
                        style={styles.textInput}
                    />

                    <TouchableOpacity>
                        <View style={styles.button}>
                            <Text style={styles.signInText}>SIGN IN</Text>
                        </View>
                    </TouchableOpacity>

                </Animated.View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    bgImage: {
        flex: 1,
        height: null,
        width: null,
    },
    buttonSpace: {
        height: height / 3,
    },
    button: {
        backgroundColor: '#FAF3C8',
        height: 70,
        marginHorizontal: 20,
        borderRadius: 35,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 15,
    },
    signInText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    facebookButton: {
        marginTop: 10,
        backgroundColor: '#2E71DC',
        height: 70,
        marginHorizontal: 20,
        borderRadius: 35,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 15,
    },
    facebookTextButton: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white'
    },
    signInInputs: {
        ...StyleSheet.absoluteFill,
        top: null,
        justifyContent: 'center',
    },
    closeButton: {
        // position: 'absolute',
        // top: -50,
        // height: 40,
        // width: 40,
        // borderRadius: 20,
        alignItems: 'center',
        elevation: 18,
        justifyContent: 'center',
        backgroundColor: 'white',
    },
    textInput: {
        height: 50,
        borderRadius: 25,
        borderWidth: 0.5,
        marginHorizontal: 20,
        paddingLeft: 10,
        marginVertical: 5,
        borderColor: 'rgba(0,0,0,0.2)',
    },
});

export default InitView;