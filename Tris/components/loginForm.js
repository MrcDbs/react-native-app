import React, { useState } from 'react';
import { Modal, StyleSheet, Text, Pressable, View, TextInput, Button, TouchableOpacity } from 'react-native';

const LoginForm = (props) => {
    console.log('Login form called');
    return (
        <View style={{ backgroundColor: '#2e3c69' }}>
            <Modal

                visible={props.isVisible}>
                <TouchableOpacity onPress={props.onClose}>
                    <Text>Close</Text>
                </TouchableOpacity>
                <View>
                    <TextInput
                        placeholder="username" />
                    <TextInput
                        placeholder="password" />
                    <Button title='Sign In' />
                </View>
            </Modal>
        </View>
    );
}

// const styles = StyleSheet.create({
//     container: {
//         borderColor: 'black',
//         flex: 1,
//         backgroundColor: 'grey',
//         alignItems: 'center',
//         justifyContent: 'center',

//     },
// });

export default LoginForm;