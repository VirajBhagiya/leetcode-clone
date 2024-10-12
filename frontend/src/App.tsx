import './App.css';
import { initializeApp } from "firebase/app";
import { Signin } from './components/Signin';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useEffect } from 'react';

const firebaseConfig = {
  apiKey: "AIzaSyD3Ggu1P_JQLivejacwtB7mn8vFx7JJNMM",
  authDomain: "leetcode-clone-v0.firebaseapp.com",
  projectId: "leetcode-clone-v0",
  storageBucket: "leetcode-clone-v0.appspot.com",
  messagingSenderId: "195362872842",
  appId: "1:195362872842:web:95707aa9658b1fcf0349f3",
  measurementId: "G-0H9RFYG1XQ"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

function App() {
  useEffect(() => {
    onAuthStateChanged(auth, function(user){
      if(user){
        console.log("This is the user: ", user);
      } else{
        console.log("There is no logged in user");
      }
    });
  }, [])
  
  return (
    <>
      <div>
        <Signin />
      </div>
    </>
  )
}

export default App