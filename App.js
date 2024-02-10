import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './firstScreen';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>R es mi favorite tiny human ! Tequiero  muchso pero hoy me toco</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });


const App = () => {
return (
  <LoginScreen />
);
};

export default App;