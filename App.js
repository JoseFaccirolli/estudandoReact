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
    width: 300,
    height: 400,
    borderRadius: 15,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between"
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
    color: '#fcfcfc',
    marginBottom: 40
  },
  section: {
    display: "flex",
    alignItems: "center",
    width: "100%"
  },
  input: {
    backgroundColor: '#2C4770',
    color: '#fcfcfc',
    borderRadius: 10,
    width: "80%",
    marginBottom: 40
  },
  button: {
    backgroundColor: "#0D5146",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 10,
    marginBottom: 20
  },
  buttonText: {
    color: "#D3D3D3"
  }
});
