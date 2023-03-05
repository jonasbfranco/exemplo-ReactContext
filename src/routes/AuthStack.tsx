import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInScreen from '../pages/SignInScreen';


const Stack = createNativeStackNavigator();

function AuthStack() {
  return (
      <Stack.Navigator>
        <Stack.Screen name="SignIn" component={SignInScreen} />
      </Stack.Navigator>
  );
}

export default AuthStack;