import React, { useState } from 'react';
import { Text, TextInput, View, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import globalStyles from '../styles/styles';

type RootStackParamList = {
  AuthenticatedTabs: undefined; 
};

type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, 'AuthenticatedTabs'>; 

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation<LoginScreenNavigationProp>(); 

  const handleLogin = async () => {
    try {
      console.log('Enviando requisição de login...');
      const response = await fetch('http://localhost:5000/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      });

      console.log('Resposta recebida:', response);
      const data = await response.json();
      console.log('Dados recebidos:', data);

      if (response.ok) {
        navigation.navigate('AuthenticatedTabs');
        Alert.alert('Login realizado com sucesso!', `Token: ${data.token}`);
      } else {
        Alert.alert('Erro ao fazer login', data.message || 'Ocorreu um erro.');
      }
    } catch (error) {
      console.error('Erro ao conectar ao servidor:', error);
      Alert.alert('Erro', 'Não foi possível conectar ao servidor.');
    }
  };

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.mainTitle}>Login</Text>
      <TextInput
        style={globalStyles.input}
        placeholder="Email"
        placeholderTextColor="#ccc"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={globalStyles.input}
        placeholder="Senha"
        placeholderTextColor="#ccc"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TouchableOpacity style={globalStyles.button} onPress={handleLogin}>
        <Text style={globalStyles.buttonText}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
}