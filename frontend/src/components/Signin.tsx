/* eslint-disable @typescript-eslint/no-unused-vars */
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../App";

const provider = new GoogleAuthProvider();

// const actionCodeSettings = {
//     // URL you want to redirect back to. The domain (www.example.com) for this
//     // URL must be in the authorized domains list in the Firebase Console.
//     url: 'https://localhost:3000',
//     // This must be true.
//     handleCodeInApp: true,
//   };

export const Signin = () => {
    
    async function onSignin() {
        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                if(!credential){
                    return;
                }
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                console.log(user);
                // IdP data available using getAdditionalUserInfo(result)
                // ...
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
            });    
    }
    

    
    return <div>
        <button onClick={() => {
            onSignin()
        }}>
            Login with Google!
        </button>
    </div>
}