import { StyleSheet, View, Image, TextInput, Button } from "react-native";
const LoginScreen = () => {
    return (
      <View style={styles.container}>
        {/* <Image 
          source={{ uri: './assets/NakamaFestLogo.jpeg' }} // Reemplaza 'URL_DE_TU_IMAGEN' con la URL de tu imagen
          style={styles.image}
        /> */}
        <TextInput 
          placeholder="Username" 
          style={styles.input}
        />
        <TextInput 
          placeholder="Password" 
          secureTextEntry={true} // Esto es para ocultar la contraseña mientras se escribe
          style={styles.input}
        />
        <Button
        title="Login"
        onPress={handlelogin}
        />
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center', // Centra los elementos en el eje Y (vertical) 
      alignItems: 'center', // Centra los elementos en el eje X (horizontal)
      padding: 20,
    },
    // image: {
    //   width: 200, // Establece el ancho de la imagen
    //   height: 200, // Establece la altura de la imagen
    //   marginBottom: 20, // Espacio debajo de la imagen
    // },
    input: {
      width: '100%', // El TextInput ocupa el ancho completo del contenedor
      height: 40, // Altura del TextInput
      marginBottom: 10, // Espacio debajo de cada TextInput
      borderWidth: 1, // Ancho del borde del TextInput
      padding: 10, // Padding dentro del TextInput para el texto
      borderRadius: 5, // Redondea las esquinas del borde
    },
  });
  
  export default LoginScreen;