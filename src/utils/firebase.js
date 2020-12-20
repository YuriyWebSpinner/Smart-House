import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyA4IJvY-iR4_vamxVyQ_kSGyYR49q2G3Os",
    authDomain: "smarthouse-802f3.firebaseapp.com",
    databaseURL: "https://smarthouse-802f3-default-rtdb.firebaseio.com",
    projectId: "smarthouse-802f3",
    storageBucket: "smarthouse-802f3.appspot.com",
    messagingSenderId: "654552715215",
    appId: "1:654552715215:web:bce375bf12c47230e84cba"
};
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export const database = firebase.database();

export const saveData = async (newData = {}, rootName = '') => {
    await database.ref(rootName).update(newData);
}

export const getData = (rootName = '') => {
    const dataFromBase = database.ref(rootName).once('value');
    const state = dataFromBase.val();
    return state;
}

export const getAllData = async () => {
    const dataFromBase = await database.ref('Light').once('value');
    const state = dataFromBase.val();
    return state;
}