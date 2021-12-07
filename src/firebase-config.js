const config = {
    apiKey: "AIzaSyAR2wLGYXdcBzGonj5KLg6Runw2duYL3xA",
    authDomain: "gb-react-chat-77a02.firebaseapp.com",
    projectId: "gb-react-chat-77a02",
    storageBucket: "gb-react-chat-77a02.appspot.com",
    messagingSenderId: "1028521932299",
    appId: "1:1028521932299:web:1c6dd7bff651fe0dd3390e"
};

export function getFirebaseConfig() {
    if (!config || !config.apiKey) {
        throw new Error('No Firebase configuration object provided.' + '\n' +
            'Add your web app\'s configuration object to firebase-config.js');
    } else {
        return config;
    }
}