import firebase from 'firebase/app'
import 'firebase/database'

const firebaseConfig = {
  apiKey: 'AIzaSyClj1MYVXfNAHaLuqW0AjxftkNZl798lsM',
  authDomain: 'comentakilucas-app.firebaseapp.com',
  databaseURL: 'https://comentakilucas-app.firebaseio.com',
  projectId: 'comentakilucas-app',
  storageBucket: 'comentakilucas-app.appspot.com',
  messagingSenderId: '828619632666',
  appId: '1:828619632666:web:3de901f700987d347d61a3'
}

firebase.initializeApp(firebaseConfig)

export default firebase
