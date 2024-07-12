import React from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import globalStyles from '../styles/styles';

type RootStackParamList = {
  Home: undefined;
  AuthTabs: {
    screen: string;
  };
  AuthenticatedTabs: undefined;
};

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

export default function Home() {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  const navigateToLogin = () => {
    navigation.navigate('AuthTabs', { screen: 'Login' });
  };

  const navigateToCadastro = () => {
    navigation.navigate('AuthTabs', { screen: 'Cadastro' });
  };

  return (
    <View style={globalStyles.container}>
      {/* Header */}
      <View style={globalStyles.header}>
        <Text style={globalStyles.headerText}>Bem Vindo a PINTU</Text>
        <TouchableOpacity>
          <Text style={globalStyles.headerText}>🔔</Text>
        </TouchableOpacity>
      </View>

      {/* Main Title */}
      <Text style={globalStyles.mainTitle}>Pessoas Inspirando as Novas Tendências Universais</Text>


      {/* Botões de Login e Cadastro */}
      <TouchableOpacity style={globalStyles.button} onPress={navigateToLogin}>
        <Text style={globalStyles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={globalStyles.button} onPress={navigateToCadastro}>
        <Text style={globalStyles.buttonText}>Cadastro</Text>
      </TouchableOpacity>
    </View>
  );
}