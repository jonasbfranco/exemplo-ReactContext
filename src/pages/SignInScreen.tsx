import React, { useState } from 'react';
import { Image, View } from 'react-native';

import { styles } from './styles';
import logo from '../assets/logo.png';
import MyTextInput from '../components/MyTextInput'; 
import MyButton from '../components/MyButton';
import { useAuth } from '../contexts/Auth';

function SignInScreen() {
  const {signIn} = useAuth()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={[styles.container, {justifyContent: 'center'}]}>
      <Image 
        style={{width: 140, height: 140, marginBottom: 20}}
        resizeMode= 'contain'
        source={logo}
      />
      <MyTextInput 
        placeholder='email' 
        value={email} 
        onChangeText={setEmail} 
      />
      <MyTextInput 
        placeholder='senha' 
        value={password} 
        onChangeText={setPassword} 
      />
      <MyButton
        onPress={() => signIn(email, password)}
        title='Entrar no App'
      />
    </View>
  );
}

export default SignInScreen;
