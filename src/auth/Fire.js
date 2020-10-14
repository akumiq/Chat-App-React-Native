import firebase from 'firebase';

class Fire {
  constructor() {
    this.init();
    this.checkAuth();
  }

  init = () => {
    if (!firebase.apps.length) {
      firebase.initializeApp({
        apiKey: 'AIzaSyDWcfQID0ZRdiHhthXeLGSwDHpdgAuNUyc',
        authDomain: 'chat-app-e6405.firebaseapp.com',
        databaseURL: 'https://chat-app-e6405.firebaseio.com',
        projectId: 'chat-app-e6405',
        storageBucket: 'chat-app-e6405.appspot.com',
        messagingSenderId: '347009828405',
        appId: '1:347009828405:web:2fcda68202c9ec69b7d37c',
        measurementId: 'G-381EC7QMF5',
      });
    }
  };

  checkAuth = () => {
    firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        firebase.auth().signInAnonymously();
      }
    });
  };

  send = (messages) => {
    messages.forEach((item) => {
      const message = {
        user: item.user,
        text: item.text,
        timeStamp: firebase.database.ServerValue.TIMESTAMP,
      };

      this.db.push(message);
    });
  };

  parse = (message) => {
    const {key: _id} = message;
    const {user, text, timeStamp} = message.val();
    const createdAt = new Date(timeStamp);

    return {
      _id,
      user,
      text,
      createdAt,
    };
  };

  get = (callback) => {
    this.db.on('child_added', (snapshot) => callback(this.parse(snapshot)));
  };

  off() {
    this.db.off();
  }

  get db() {
    return firebase.database().ref('messages');
  }

  get uid() {
    return (firebase.auth().currentUser || {}).uid;
  }
}

export default new Fire();
