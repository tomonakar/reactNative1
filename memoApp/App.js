import firebase from 'firebase'
import {StackNavigator} from 'react-navigation'
import {Platform} from 'react-native'

import MemoListScreen from './src/screens/MemoListScreen'
import MemoDetailScreen from './src/screens/MemoDetailScreen'
import MemoCreateScreen from './src/screens/MemoCreateScreen'
import MemoEditScreen from './src/screens/MemoEditScreen'
import LoginScreen from './src/screens/LoginScreen'
import SignupScreen from './src/screens/SignupScreen'

import ENV from './env.json'

require('firebase/firestore')

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
  Signup: {screen: SignupScreen},
  Home:         {screen: MemoListScreen},
  MemoDetail:   {screen: MemoDetailScreen},
  MemoCreate:   {screen: MemoCreateScreen},
  MemoEdit:     {screen: MemoEditScreen}
}, {
  navigationOptions: {
    headerTitle: 'MEMOT',
    headerTintColor: '#fff',
    headerBackTitle: null,
    headerStyle: {
      shadowColor: '#000',
      shadowOffset: {width: 0, height: 2},
      shadowOpacity: 0.2,
      shadowRadius: 2,
      backgroundColor: '#265366',
      ...Platform.select({
        andoroid: {
          height: 80,
          paddignTop: 20
        }
      })
    },
    headerTitleStyle: {
      color: '#fff'
    }
  }
})

export default App
