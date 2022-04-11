<script>
import {firebase} from "../config/config";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import router from "../router";
import { store } from "../store/store";
export default {
  name: "SignUp",
  methods: {
    googleSignIn: function () {
      const provider = new GoogleAuthProvider();
      const auth = getAuth();
      signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        store.state.loginInfo = user;
        console.log(user);
        router.push({name: "users"}); 
        // ...
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
    },
  },
};
</script>

<template>
  <div>
    <button @click="googleSignIn">Sign In with Google</button>
  </div>
</template>

<style></style>
