import { StyleSheet } from 'react-native';

const darkPurple = '#4B0082'; 
const darkBlue = '#00008B';
const darkBackground = '#1a1a1a';
const lightText = '#f5f5f5'; 
const mediumText = '#d3d3d3';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: darkBackground,
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
    backgroundColor: darkPurple,
    position: 'absolute',
    top: 0,
    zIndex: 1,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: lightText,
  },
  mainTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: lightText,
    textAlign: 'center',
    marginVertical: 20,
    marginTop: 70, 
  },
  subtitle: {
    fontSize: 20,
    color: mediumText,
    marginBottom: 20,
  },
  button: {
    backgroundColor: darkPurple,
    color: lightText,
    padding: 15,
    marginVertical: 10,
    borderRadius: 5,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: lightText,
    fontSize: 18,
    textAlign: 'center',
  },
  linkText: {
    color: darkBlue,
    fontSize: 16,
    textDecorationLine: 'underline',
  },
  input: {
    backgroundColor: '#2e2e2e',
    color: lightText,
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