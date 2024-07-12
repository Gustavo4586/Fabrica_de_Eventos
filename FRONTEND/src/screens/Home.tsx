import React from 'react';
import { Text, View, TouchableOpacity, ScrollView } from 'react-native';
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
    <ScrollView contentContainerStyle={globalStyles.scrollContainer}>
      <View style={globalStyles.header}>
        <Text style={globalStyles.headerText}>FÁBRICA DE EVENTOS</Text>
      </View>
    
      <Text style={globalStyles.subtitle}>
        Bem-vindo à Fábrica de Eventos, o seu portal para marcar eventos de consciência ambiental!
      </Text>
      
      <View style={globalStyles.section}>
        <Text style={globalStyles.sectionText}>
          Na Fábrica de Eventos, acreditamos que pequenas ações podem gerar grandes mudanças. Nosso objetivo é conectar pessoas e iniciativas que promovem a sustentabilidade e a preservação ambiental.
        </Text>
      </View>

      <View style={globalStyles.section}>
        <Text style={globalStyles.sectionTitle}>O que Oferecemos</Text>
        <Text style={globalStyles.sectionText}>
          Nosso site permite que você marque e participe de eventos como:
        </Text>
        <Text style={globalStyles.listItem}>• Coletas de lixo comunitárias</Text>
        <Text style={globalStyles.listItem}>• Protestos contra a emissão de carbono</Text>
        <Text style={globalStyles.listItem}>• Dias de uso de bicicleta</Text>
        <Text style={globalStyles.listItem}>• Encontros educativos sobre preservação ambiental</Text>
        <Text style={globalStyles.listItem}>• E muito mais!</Text>
      </View>

      <View style={globalStyles.section}>
        <Text style={globalStyles.sectionTitle}>Por que Participar?</Text>
        <Text style={globalStyles.sectionText}>
          Participar de nossos eventos é uma maneira fantástica de:
        </Text>
        <Text style={globalStyles.listItem}>• Contribuir para um planeta mais limpo</Text>
        <Text style={globalStyles.listItem}>• Conhecer pessoas com interesses semelhantes</Text>
        <Text style={globalStyles.listItem}>• Aprender mais sobre práticas sustentáveis</Text>
        <Text style={globalStyles.listItem}>• Fazer a diferença em sua comunidade</Text>
      </View>

      <View style={globalStyles.buttonContainer}>
        <TouchableOpacity style={globalStyles.button} onPress={navigateToLogin}>
          <Text style={globalStyles.buttonText}>Login</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={globalStyles.button} onPress={navigateToCadastro}>
          <Text style={globalStyles.buttonText}>Cadastro</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={globalStyles.scrollButton} onPress={scrollToTop}>
        <Text style={globalStyles.scrollButtonText}>Subir</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
