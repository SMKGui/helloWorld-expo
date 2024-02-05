import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity } from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>

      <Image
      style={styles.image}
      source={{
        uri: 'https://upload.wikimedia.org/wikipedia/commons/3/34/The_Finals_logo.png',
      }}
      />

      <Text style={styles.text}>Hello World!</Text>

      <TextInput
        style={styles.input}
        defaultValue='exemplo de input'
      />

      <TouchableOpacity style={styles.btn}>
        <Text style ={styles.textButton}>Exemplo de botão</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bigRed: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 30,
  },
  text: {
    fontSize: 24,
    color: 'red',
  },
  input: {
    width: '90%',
    height: 40,
    borderWidth: 1
  },
  image: {
    height: 100,
    width: 100,
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    
    //borderRadius: "50%"
  },
  btn: {  
    width: '90%',
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
    justifyContent:'center',
    alignItems: 'center',
    backgroundColor: 'black'
  },
  textButton: {
    color: 'white',
    textTransform: 'capitalize',
    fontSize: 18,
    fontWeight: "500"
  }
});
