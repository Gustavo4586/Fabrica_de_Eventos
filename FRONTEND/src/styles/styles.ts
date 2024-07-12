import { StyleSheet } from 'react-native';

const leafGreen = '#228B22'; 
const woodBrown = '#8B4513'; 
const buttonText = '#FFFFFF'; 
const background = '#F0FFF0'; 
const darkText = '#2E8B57';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: background,
    alignItems: 'center',
    justifyContent: 'center',
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
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    padding: 10,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
  itemText: {
    fontSize: 18,
  },
  itemButtons: {
    flexDirection: 'row',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginBottom: 12,
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
