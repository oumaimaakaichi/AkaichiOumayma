import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Homme from './Screen/homme'
import OnBoardScreenL from './Screen/homme2';
import Login from './Screen/login';
const Stack= createStackNavigator();
import Register from './Screen/inscri';
import Liste_stas from './Screen/client/liste';
import EspaceClient from './Screen/client/espaceClient';
import Dashboard from './Screen/dashboard';

/*import Reservation from './Screen/reservation';
import Profil from './Screen/profil';*/
import Update from './Screen/update';

import Signin from './Screen/log';

import Profile from './Screen/client/profile';
import RegisterClient from './Screen/client/registerC';
import LoginC from './Screen/client/LoginC';
import ForgotPass from './Screen/forgotPass';

import AddReservation from './Screen/client/ajoutReservation';
import App5 from './Screen/res';
import ReservationU from './Screen/client/reservations';
export default function App() {
  
  return (
 
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Homme'>
        <Stack.Screen name='Home' component={Homme} options={{headerShown:false}} />
        <Stack.Screen name='OnBoardScreenL' component={OnBoardScreenL} options={{headerShown:false}}/>
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='Rerse' component={ReservationU} options={{headerShown:false}}/>
        <Stack.Screen name='liste' component={Liste_stas} />
        <Stack.Screen name='signin' component={Signin}  />
       
        <Stack.Screen name='Register' component={Register} options={{headerShown:false}}/>
        <Stack.Screen name='Dashboard' component={Dashboard} options={{headerShown:false}} />
     
      {/*  <Stack.Screen name='Reservation' component={Reservation} />
        <Stack.Screen name='Profil' component={Profil} />
        <Stack.Screen name='Profilee' component={Profilee} />*/}
      <Stack.Screen name='Update' component={Update} />
      <Stack.Screen name='forgot' component={ForgotPass} />
      <Stack.Screen name='registerC' component={RegisterClient}options={{headerShown:false}} />
      <Stack.Screen name='LoginC' component={LoginC} options={{headerShown:false}}/>
      <Stack.Screen name='espaceClient' component={EspaceClient} options={{headerShown:false}} />
      <Stack.Screen name='profile' component={Profile}  />
      <Stack.Screen name='addreservation' component={AddReservation}  />
      <Stack.Screen name='reserv' component={App5}  />
      </Stack.Navigator>
    </NavigationContainer>
    /*<View>
      <AddReservation/>
    </View>*/
   
    
    
    
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
