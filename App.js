import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.screen}>
      <StatusBar style="auto"/>
      <View style={styles.loginBox}>
        <Text style={styles.title}>Login</Text>
        <View style={styles.section}>
          <TextInput
          style={styles.input}
          placeholder='Digite seu email'
          placeholderTextColor='#D3D3D3'
          autoCapitalize='none'
        />
        <TextInput
          style={styles.input}
          placeholder='Digite sua senha'
          placeholderTextColor='#D3D3D3'
          autoCapitalize='none'
          secureTextEntry
        />
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#132C52',
    alignItems: 'center',
    justifyContent: 'center'
  },
  loginBox: {
    paddingBlock: 15,
    backgroundColor: '#020F22',
    width: "80%",
    height: "45%",
    borderRadius: 15,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between"
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
    color: '#fcfcfc'
  },
  section: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    height: 150
  },
  input: {
    backgroundColor: '#2C4770',
    color: '#fcfcfc',
    borderRadius: 10,
    width: "80%",
    height: 50,
    fontSize: 15,
    paddingLeft: 15
  },
  button: {
    backgroundColor: "#0D5146",
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 10,
    marginBottom: 20
  },
  buttonText: {
    color: "#D3D3D3"
  }
});
