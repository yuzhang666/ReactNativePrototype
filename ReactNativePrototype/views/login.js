/**
 * Created by yxzhang on 10/4/16.
 */
import React, { Component, PropTypes } from 'react';
import { View, Text, TextInput, TouchableHighlight, Image } from 'react-native';
import Svg,{
    Circle,
    Ellipse,
    G,
    LinearGradient,
    RadialGradient,
    Line,
    Path,
    Polygon,
    Polyline,
    Rect,
    Symbol,
    Use,
    Defs,
    Stop
} from 'react-native-svg';

import Research from './research'

export default class Login extends Component {

    static propTypes = {
        navigator: PropTypes.object.isRequired
    };

    constructor(props, context) {
        super(props, context);
        this.onLogin = this.onLogin.bind(this);
        this.loginSuccess = this.loginSuccess.bind(this);
    }

    render() {
        return (
            <View>
                <Svg style={{
                    marginTop: 60
                }} height="150" width="150" viewBox="0 0 371.52 89.2">
                    <Path d="M184.24,72.22A.25.25,0,0,1,184,72V37.47a.25.25,0,0,1,.5,0V72A.25.25,0,0,1,184.24,72.22Z"/>
                    <Path d="M60.2,49.69C54,47.6,48.54,46.13,48.54,42.5c0-3.35,3.07-5.23,7.54-5.23a9.46,9.46,0,0,1,8.23,4.31H74.77c-2.27-7.41-9.33-12.76-18.34-12.76-10.33,0-17.86,6.49-17.86,14.09,0,8.51,7.12,11.44,13,13.54,6.91,2.51,13.81,4,13.81,8.72,0,3.14-3,5.65-7.88,5.65a11.34,11.34,0,0,1-9.79-5.11H37.06c2.82,8.44,9.75,13.91,19.72,13.91,11.16,0,18.7-6.21,18.7-14.93C75.48,55.13,67.31,52.2,60.2,49.69Z"/>
                    <Path d="M23.14,49.69c-6.21-2.09-11.65-3.56-11.65-7.19,0-3.35,3.07-5.23,7.54-5.23a9.46,9.46,0,0,1,8.23,4.31H37.71c-2.27-7.41-9.33-12.76-18.34-12.76C9,28.83,1.51,35.32,1.51,42.92c0,8.51,7.12,11.44,13,13.54,6.91,2.51,13.81,4,13.81,8.72,0,3.14-3,5.65-7.88,5.65a11.34,11.34,0,0,1-9.79-5.11H0c2.82,8.44,9.75,13.91,19.72,13.91,11.16,0,18.7-6.21,18.7-14.93C38.42,55.13,30.25,52.2,23.14,49.69Z"/>
                    <Path d="M153,65.72a15.91,15.91,0,0,1-10.81,4.21c-8.72,0-15.21-6.14-15.21-15.7,0-9.28,6.07-15.84,15.21-15.84a16,16,0,0,1,9.55,3.2h12.55a25.4,25.4,0,0,0-47.43,12.64A25.42,25.42,0,0,0,165,65.72Z"/>
                    <Path d="M75.46,0V89.2h42V0Zm32.9,73.43L102.89,68l0,.05a14.31,14.31,0,0,1-10,4.23c-6,0-10.59-3.63-10.59-9.34,0-4.23,2.46-7.25,6.92-9.16-1.86-2.42-2.7-4.42-2.7-6.83,0-4.41,3.53-8.22,9.34-8.22,5.16,0,8.64,3.44,8.64,7.9s-2.83,6.88-7.16,8.5l2.15,2.19h8.9Z"/>
                    <Path d="M99.41,46.91a3.51,3.51,0,0,0-3.72-3.72,3.71,3.71,0,0,0-3.86,4c0,1.67.65,2.88,2.46,4.88C97.64,50.81,99.41,49.32,99.41,46.91Z"/>
                    <Path d="M88,62.71c0,2.79,2.28,4.79,5.44,4.79a9,9,0,0,0,6.13-2.83l0,0-7.3-7.3C89.3,58.62,88,60.59,88,62.71Z"/>
                    <Path d="M371.52,42.22c0,2.68-1.54,3.26-3.31,3.26s-3.31-.58-3.31-3.26S366.45,39,368.21,39s3.31.56,3.31,3.26m-5.77,0c0,2.12,1,2.49,2.46,2.49s2.46-.36,2.46-2.49-1-2.49-2.46-2.49-2.46.36-2.46,2.49m2.53.51h-.67v.87a.33.33,0,0,1-.34.36h-.1a.33.33,0,0,1-.34-.36V40.84a.33.33,0,0,1,.34-.36h1.21c.89,0,1.21.46,1.21,1.11a1,1,0,0,1-.51,1l.58,1c.12.22-.07.34-.24.34h-.15a.45.45,0,0,1-.43-.24Zm0-1.52h-.72V42h.72c.39,0,.44-.17.44-.39s0-.39-.44-.39M217.41,41l8.4,28.17c.63,2.06-.58,3.26-2.32,3.26h-1.92c-1.83,0-2.55-.67-3-2.37l-1.16-4.51h-9.56l-1.16,4.51a2.6,2.6,0,0,1-3,2.37h-1.92c-1.74,0-2.95-1.21-2.32-3.26L207.95,41c.49-1.7,1.43-2.23,3.12-2.23h3.22c1.7,0,2.63.54,3.12,2.23M209.33,59.9h6.61l-3.26-12.68ZM231.4,72.45a2.19,2.19,0,0,1-2.5-2.5V41.46a2.19,2.19,0,0,1,2.5-2.5h8.35C251.09,39,254,46.19,254,55.7s-2.95,16.75-14.29,16.75ZM236,65.93h3.84c5.23,0,6.74-3.75,6.74-10.23s-1.52-10.23-6.74-10.23H236Zm27.47,4.46-8.4-28.17c-.62-2.05.58-3.26,2.32-3.26h1.92c1.83,0,2.55.67,3,2.37l5.89,23.13,6-23.13a2.6,2.6,0,0,1,3-2.37h1.92c1.74,0,2.95,1.21,2.32,3.26L273,70.39c-.49,1.7-1.43,2.23-3.12,2.23h-3.22c-1.7,0-2.63-.54-3.12-2.23m21-28.93A2.19,2.19,0,0,1,287,39h16.34a2.19,2.19,0,0,1,2.5,2.5V43c0,1.74-.8,2.5-2.5,2.5h-11.7V52H302c1.74,0,2.54.8,2.54,2.5v1.38c0,1.7-.8,2.5-2.54,2.5H291.62v7.59h12.06c1.7,0,2.5.76,2.5,2.5v1.52a2.19,2.19,0,0,1-2.5,2.5H287a2.19,2.19,0,0,1-2.5-2.5Zm33.14,28.49a2.19,2.19,0,0,1-2.5,2.5h-2a2.19,2.19,0,0,1-2.5-2.5V41.46a2.19,2.19,0,0,1,2.5-2.5H316a2.52,2.52,0,0,1,2.46,1.38l10,18.62-.13-17.5a2.19,2.19,0,0,1,2.5-2.5h2c1.74,0,2.5.8,2.5,2.5V69.94c0,1.7-.76,2.5-2.5,2.5H330a2.46,2.46,0,0,1-2.46-1.39L317.48,52.44Zm23.44-24.47c-1.7,0-2.5-.76-2.5-2.5V41.46a2.19,2.19,0,0,1,2.5-2.5h18.31a2.19,2.19,0,0,1,2.5,2.5V43c0,1.74-.8,2.5-2.5,2.5h-5.58V69.94a2.19,2.19,0,0,1-2.5,2.5h-2.1c-1.74,0-2.54-.81-2.54-2.5V45.48Z"/>
                </Svg>
                <Text style={{
                    marginTop: 10,
                    marginLeft: 5,
                    marginRight: 5,
                    marginBottom: 15,
                    fontSize: 20
                }}>Log in</Text>
                <TextInput style={{
                    height: 40,
                    borderColor: 'gray',
                    borderWidth: 1,
                    padding: 5,
                    marginLeft: 5,
                    marginRight: 5,
                    marginBottom: 15
                }} placeholder="USERNAME" defaultValue="admin"/>
                <TextInput style={{
                    height: 40,
                    borderColor: 'gray',
                    borderWidth: 1,
                    padding: 5,
                    marginLeft: 5,
                    marginRight: 5,
                    marginBottom: 15
                }} placeholder="PASSWORD" />
                <TouchableHighlight style={{
                    marginLeft: 5,
                    marginRight: 5,
                    marginBottom: 15,
                    alignItems: 'center'
                }} onPress={() => this.onLogin()}>
                    <Text style={{
                        fontSize: 20,
                        color: 'blue'
                    }}>Sign in</Text>
                </TouchableHighlight>
            </View>
        )
    }

    loginSuccess(responseJson) {
        this.props.navigator.push( {
            component: Research,
            title: 'Research',
            passProps: {
                token: responseJson.userinfo.token
            }
        });
    }
    
    onLogin() {
        fetch('http://tamaledev.gencos.com/restapi/2.0/token/?outputformat=json', {
            method: 'POST',
            headers: {
                'Accpet': 'application/json',
                'Content-Type': 'application/json',
                'username': 'admin',
                'Authorization': 'Basic Gh+VN4+UprI='
            },
            body: ''
        })
            .then((response) => response.json())
            .then((responseJson) => this.loginSuccess(responseJson))
            .catch((error) => {
                console.error(error);
            });
    }
}