import React from "react";
import {StyleSheet, View, TextInput, Image, Text, TouchableOpacity} from 'react-native';
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
      <>
        <View style={styles.containerImage}>
          <Image source={require('../assets/NakamaFestLogo.jpeg')} style={{ width: 200, height: 200 }}/> 
        </View>
        <View style={styles.container}>
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
              maxLength: 8,
              //pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={styles.inputPass}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                placeholder="Contraseña"
                //keyboardType="email-address"
              />
            )}
            
          />
          {errors.pass && <Text style={styles.errorText}>Please enter a password.</Text>}
          <TouchableOpacity style={styles.buttonLogin}  onPress={handleSubmit(OnSubmit)}>
                <Text style={{color:'white'}}>ENTRAR</Text>
          </TouchableOpacity>
        
        </View>
        </>
      );
    };
    
    const styles = StyleSheet.create({
      container: {
        paddingTop: 0,
        padding: 20,
        justifyContent: 'center', // Centra los elementos en el eje Y (vertical) 
      },
      containerImage: {
        paddingTop:150,
        justifyContent: 'center', // Centra los elementos en el eje Y (vertical) 
        alignItems: 'center', // Centra los elementos en el eje X (horizontal)
      },
      input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        padding: 10,
        borderRadius: 5
      },
      inputPass:{
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginTop: 20,
        padding: 10,
        borderRadius: 5
      },
      buttonLogin:{
        justifyContent: 'center',
        alignItems: 'center',        
        height:40,
        marginTop:20,
        padding: 10,
        borderWidth: 1,
        borderRadius: 2,
        width: 320,
        backgroundColor: '#2196F3',
        textAlign: 'center'
      }
    });
    
    export default LogInS;