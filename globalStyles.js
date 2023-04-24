import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  signOutContainer: {
    marginBottom: '1%'
  },
  separator: {
    width: '100%',
    borderBottomColor: 'black',
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginBottom: '5%'
  },
  inputContainer: {
    width: '70%',
    marginBottom: '1%'
  },
  input: {
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginBottom: '1%',
    textDecoration: 'none'
  },
  buttonContainer: {
    width: '50%',
    alignItems: 'center',
    justifyContent: "center",
    marginTop: 45,
  },
  button: {
    backgroundColor: '#8c8cf0',
    width: '100%',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center'
  },
  signOutButton: {
    backgroundColor: '#8c8cf0',
    width: '100%',
    padding: 5,
    borderRadius: 10,
    alignItems: 'center'
  },
  buttonRegister: {
    backgroundColor: 'white',
    margin: 5,
    borderWidth: 2,
    borderColor: '#8c8cf0'
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600'
  },
  signOutButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600'
  },
  buttonTextRegister: {
    color: '#8c8cf0',
    fontSize: 18,
    fontWeight: '600'
  },
  flatContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    maxWidth: '96%',
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginLeft: '2%',
    marginRight: '2%',
    marginBottom: '2%',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#8c8cf0',
  },
  outputContainer: {
    marginLeft: '3%',
    width: '90%'
  },
  outputText: {
    color: '#8c8cf0',
    fontSize: 18,
    fontWeight: 'bold',
    maxWidth: '85%',
  },
  icon: {
    fontSize: 24,
    marginRight: "3%",
    position: 'absolute',
    right: 0
  },
  iconPlay: {
    fontSize: 24,
  },
  detailsContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#8c8cf0',
    margin: 20
  },
  detailsTextField: {
    marginBottom: 10,
    padding: 10,
    color: '#8c8cf0',
    fontSize: 16,
    fontWeight: 'bold',
    backgroundColor: 'white',
    borderRadius: 10,
    width: '70%',
    textAlign: 'center',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#8c8cf0',
  },
  detailsUpdateButton: {
    backgroundColor: '#8c8cf0',
    width: '70%',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center'
  },
  detailsUpdateButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600'
  }

});