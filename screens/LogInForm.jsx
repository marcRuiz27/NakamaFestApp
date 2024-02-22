import React from "react";
import {StyleSheet, View, TextInput, Image, Button, Text} from 'react-native';
import {useForm, Controller} from 'react-hook-form';

const LogInS = () => {
    const { control, handleSubmit, formState: {errors}} = useForm({
        defaultValues: {
            user: '',
            pass: '',
        },
      });

    const OnSubmit = data => {
        //Submit the data to the server
        console.log(data);
        //Include your fetch or axios call here
    };


    return (
        <View style={styles.container}>
          <Image 
          source={require('../assets/NakamaFestLogo.jpeg')} // Reemplaza 'URL_DE_TU_IMAGEN' con la URL de tu imagen
          style={styles.image}
          /> 
          <Controller
            control={control}
            name="user"
            rules={{
              required: "Es obligatorio el nombre",
            }}
           
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                placeholder="User"
              />
            )}
            
          />
          {errors.user && <Text style={styles.errorText}>User is required.</Text>}
    
          <Controller
            control={control}
            name="pass"
            rules={{
              required: true,
              //pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                placeholder="Contraseña"
                //keyboardType="email-address"
              />
            )}
            
          />
          {errors.pass && <Text style={styles.errorText}>Please enter a password.</Text>}
          <Button title="Submit" onPress={handleSubmit(OnSubmit)}/>
          
        </View>
      );
    };
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        padding: 20,
        justifyContent: 'center', // Centra los elementos en el eje Y (vertical) 
        //alignItems: 'center', // Centra los elementos en el eje X (horizontal)
      },
      image: {
        width: 200, // Establece el ancho de la imagen
        height: 200, // Establece la altura de la imagen
        marginBottom: 20, // Espacio debajo de la imagen
        justifyContent: 'center',
        alignItems: 'center'
      },
      input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 20,
        padding: 10,
        borderRadius: 5
      },
      errorText: {
        padding: 20, // Centra los elementos en el eje Y (vertical) 
        color: 'red',
      },
    });
    
    export default LogInS;