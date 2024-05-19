import pyrebase

config = {
  "apiKey": "AIzaSyC6kkz9yNjthTzu8vGULBRafD-4B1Hnc_o",
  "authDomain": "fypp-73cd2.firebaseapp.com",
  "projectId": "fypp-73cd2",
  "databaseURL": "https://fypp-73cd2-default-rtdb.firebaseio.com/",
  "storageBucket": "fypp-73cd2.appspot.com",
  "messagingSenderId": "1044676421219",
  "appId": "1:1044676421219:web:0c0ce6c2d11fb32010fa56"
}

firebase = pyrebase.initialize_app(config)
auth = firebase.auth()
database = firebase.database()
