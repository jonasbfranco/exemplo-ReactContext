import React from 'react';
import { useNavigation } from '@react-navigation/core';
import { View, Text } from 'react-native';
import MyButton from '../components/MyButton';
import { styles } from './styles';

function HomeScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Essa tela só pode ser vista por usuários autenticados
      </Text>
      <MyButton onPress={() => navigation.navigate('Settings')} title="Ir para Configurações" />
      <Text>
        by <Text style={styles.coffText}>JBF</Text>
      </Text>
    </View>
  );
}

export default HomeScreen;