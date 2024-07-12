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
    padding: 20,
  },
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: background,
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 20,
  },
  header: {
    width: '100%',
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'center',
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
    fontSize: 16,
    color: darkText,
    textAlign: 'center',
    marginVertical: 10,
    paddingHorizontal: 20,
  },
  section: {
    width: '100%',
    marginVertical: 10,
    padding: 20,
    backgroundColor: '#E0FFE0',
    borderRadius: 5,
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: leafGreen,
    marginBottom: 10,
  },
  sectionText: {
    fontSize: 16,
    color: darkText,
    textAlign: 'center',
    marginBottom: 10,
  },
  listItem: {
    fontSize: 16,
    color: darkText,
    textAlign: 'left',
    marginVertical: 2,
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
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
  scrollButton: {
    backgroundColor: leafGreen,
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  scrollButtonText: {
    color: buttonText,
    fontSize: 16,
  },
});
