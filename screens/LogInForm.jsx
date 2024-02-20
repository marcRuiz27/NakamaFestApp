import React from "react";
import {View, TextInput, Button, Text, StyleSheet} from 'react-native';
import {useForm, Controller} from 'react-hook-form';

const LogInForm = () => {
    const { control, handleSubmit, formState: {errors}} = useForm({
        defaultValues: {
            user: '',
            mail: '',
        }
    });

    const OnSubmit = data => {
        //Submit the data to the server
        console.Log(data);
        //Include your fetch or axios call here
    };


    return (
        <View style={styles.container}>
          <Controller
            control={control}
            rules={{
              required: true,
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
            name="user"
          />
          {errors.user && <Text style={styles.errorText}>User is required.</Text>}
    
          <Controller
            control={control}
            rules={{
              required: true,
              pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                placeholder="Email"
                keyboardType="email-address"
              />
            )}
            name="mail"
          />
          {errors.mail && <Text style={styles.errorText}>Please enter a valid email.</Text>}
    
          <Button title="Submit" onPress={handleSubmit(onSubmit)} />
        </View>
      );
    };
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
      },
      input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 20,
        padding: 10,
        borderRadius: 5.
      },
      errorText: {
        color: 'red',
      },
    });
    