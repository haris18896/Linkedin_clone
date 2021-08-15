### `Linkedin Clone`
##### `we will be using BAM naming`
creating a react app
```
npx create-react-app linkedin_clone --template redux
```

```ssh
npm install -g firebase-tools
firebase login
firebase init
```
Specify your site in firebase.json
```json
{
  "hosting": {
    "site": "linkedin-39c92",

    "public": "public",
    ...
  }
}
```

and then deploy the app to firebase
```firebase deploy --only hosting:linkedin-39c92```

*******************************************************************************************************

### `Firebase Setup`

1. first of all , go to the `firestore Database` and `create database` in test mode
2. Firestore Database Tab: change the rules for testing, in production we don't have to do it like this.
```js
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
       allow read, write;
      // allow read, write: if
      //     request.time < timestamp.date(2021, 9, 14);
    }
  }
}
```
and then click publish

3. Authentication Tab: click on `get started`, Enable `Email/password`
4. Project Setting: Register you app as a `</>` web app.
5. ```
npm install -g firebase-tools

firebase login

firebase init

firebase deploy
```

5. copy the `config data`

```js
const firebaseConfig = {
  apiKey: "AIzaSyArGHi-wY3IHkSXDoh8mwBpb8eZFCU1cSA",
  authDomain: "linkedin-clone-c6879.firebaseapp.com",
  projectId: "linkedin-clone-c6879",
  storageBucket: "linkedin-clone-c6879.appspot.com",
  messagingSenderId: "313489657993",
  appId: "1:313489657993:web:c501f9e74408322107f658",
  measurementId: "G-HC1FZRQWC6"
};
```
6. clean your code by deleting some data from template, e.g app.test.js, logo.svg, and then clean your App.js code in /src/app.js, also clean App.css

7. 