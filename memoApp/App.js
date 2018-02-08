import firebase from 'firebase'
import {StackNavigator} from 'react-navigation'

import MemoListScreen from './src/screens/MemoListScreen'
import MemoDetailScreen from './src/screens/MemoDetailScreen'
import MemoEditScreen from './src/screens/MemoEditScreen'
import LoginScreen from './src/screens/LoginScreen'
import SignupScreen from './src/screens/SignupScreen'

import ENV from './env.json'

const config = {
  apiKey: ENV.FIREBASE_APIKEY,
  authDomain: ENV.FIREBASE_AUTH_DOMAIN,
  databaseURL: ENV.FIREBASE_DB_URL,
  projectId: ENV.FIREBASE_PRJ_ID,
  storageBucket: ENV.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: ENV.FIREBASE_SENDER_ID
}

firebase.initializeApp(config)

const App = StackNavigator({
  Login:        {screen: LoginScreen},
  SignupScreen: {screen: SignupScreen},
  Home:         {screen: MemoListScreen},
  MemoDetail:   {screen: MemoDetailScreen},
  MemoEdit:     {screen: MemoEditScreen}
}, {
  navigationOptions: {
    headerTitle: 'MEMOT',
    headerTintColor: '#fff',
    headerBackTitle: null,
    headerStyle: {
      backgroundColor: '#265366'
    },
    headerTitleStyle: {
      color: '#fff'
    }
  }
})

export default App
