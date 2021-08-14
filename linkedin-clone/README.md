### `Linkedin Clone`

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