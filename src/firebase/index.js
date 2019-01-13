import firebase from 'firebase/app';
import 'firebase/storage';

var config = {
    apiKey: "AIzaSyBRfTMTwH4RoIsxzDq1WGhLQX92UQjBPDA",
    authDomain: "sandbox-28eac.firebaseapp.com",
    databaseURL: "https://sandbox-28eac.firebaseio.com",
    projectId: "sandbox-28eac"
};
firebase.initializeApp(config);

const auth = firebase.auth();
const storage = firebase.storage();

storage.settings({timestampsInSnapshots: true});

export {
    auth, storage, firebase as default
}