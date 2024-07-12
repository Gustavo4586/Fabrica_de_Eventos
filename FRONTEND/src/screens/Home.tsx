import React from 'react';
import { Text, View, TouchableOpacity, ScrollView, Image } from 'react-native';
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

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <ScrollView contentContainerStyle={globalStyles.container}>
      <View style={globalStyles.header}>
        <Text style={globalStyles.headerText}>FÁBRICA DE EVENTOS</Text>
      </View>
      <Text style={globalStyles.mainTitle}>DIVERSÃO, ALEGIA, E OUSADIA É SÓ NA FABRICA</Text>
      <Text style={globalStyles.subtitle}>
        Nosso projeto é um site gratuito para marcar eventos de consciência ambiental, desde coleta de lixo, protestos contra emissão de carbono, dias de sair de casa de bicicleta, até encontros para discutir preservação ambiental e muito mais.
      </Text>

      <TouchableOpacity style={globalStyles.button} onPress={navigateToLogin}>
        <Text style={globalStyles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity style={globalStyles.button} onPress={navigateToCadastro}>
        <Text style={globalStyles.buttonText}>Cadastro</Text>
      </TouchableOpacity>

      <TouchableOpacity style={globalStyles.scrollButton} onPress={scrollToTop}>
        <Text style={globalStyles.scrollButtonText}>Subir</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
