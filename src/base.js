import Rebase from 're-base';
import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDAnsuUzSYK4H_lixFqyDoKFJ8AVdmaYiI",
    authDomain: "fir-test-8ef4f.firebaseapp.com",
    databaseURL: "https://fir-test-8ef4f-default-rtdb.firebaseio.com",
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;