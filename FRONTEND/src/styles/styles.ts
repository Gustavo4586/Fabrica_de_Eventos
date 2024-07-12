import { StyleSheet } from 'react-native';

const leafGreen = '#228B22'; // Cor verde folha
const woodBrown = '#8B4513'; // Cor marrom madeira
const buttonText = '#FFFFFF'; // Cor do texto dos botões em branco
const background = '#F0FFF0'; // Cor de fundo mais clara
const darkText = '#2E8B57'; // Cor de texto mais escura para contraste

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: background,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 0,
  },
  header: {
    width: '100%',
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: leafGreen,
    position: 'absolute',
    top: 0,
    zIndex: 1,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: buttonText,
  },
  mainTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: darkText,
    textAlign: 'center',
    marginVertical: 20,
    marginTop: 70,
  },
  subtitle: {
    fontSize: 20,
    color: darkText,
    marginBottom: 20,
  },
  button: {
    backgroundColor: woodBrown,
    padding: 15,
    marginVertical: 10,
    borderRadius: 5,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: buttonText,
    fontSize: 18,
    textAlign: 'center',
  },
  linkText: {
    color: leafGreen,
    fontSize: 16,
    textDecorationLine: 'underline',
  },
  input: {
    backgroundColor: '#DCDCDC',
    color: darkText,
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
    width: '80%',
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
    marginVertical: 20,
  },
});
