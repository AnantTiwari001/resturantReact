import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import FirstPage from './Pages/FirstPage';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  return (
      <NavigationContainer>
        <StatusBar style="auto" />
        <MainNavigator />
      </NavigationContainer>
  );
}

const MainStack = createStackNavigator();
const MainNavigator = () => {
  return (
    <MainStack.Navigator screenOptions={{ headerShown: false }} >
      <MainStack.Screen name='first-page' component={FirstPage} />
    </MainStack.Navigator>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
