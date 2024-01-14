import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, Alert, Modal } from 'react-native';

import LoginForm from './components/loginForm.js';

export default function App() {

  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => { console.log('Use effect called'); });
  const showLoginForm = () => {
    console.log('Before Button pressing..', modalVisible);
    setModalVisible(true);
    console.log('After Button pressing..', modalVisible);
  }
  const closeModal = () => {
    setModalVisible(false);
  };
  return (
    <View style={styles.container}>
      <Text style={buttonStyles.text}>Benvenuto su MyApp</Text>
      <Button title='Log In' onPress={() => showLoginForm()} ></Button>
      <StatusBar barStyle="light-content" animated={true} />
      {/* style="auto" */}
      <LoginForm isVisible={modalVisible} onClose={closeModal} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderColor: 'black',
    flex: 1,
    backgroundColor: '#141929',
    alignItems: 'center',
    justifyContent: 'center',

  },
});

const buttonStyles = StyleSheet.create({
  text: {
    marginBottom: 20,
    fontSize: 35,
    color: 'white'
  },
});
