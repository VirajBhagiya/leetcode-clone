import './App.css'
import { Landing } from './components/Landing'
import { initializeApp } from "firebase/app";
import { Signin } from './components/Signin';

const firebaseConfig = {
  apiKey: "AIzaSyD3Ggu1P_JQLivejacwtB7mn8vFx7JJNMM",
  authDomain: "leetcode-clone-v0.firebaseapp.com",
  projectId: "leetcode-clone-v0",
  storageBucket: "leetcode-clone-v0.appspot.com",
  messagingSenderId: "195362872842",
  appId: "1:195362872842:web:95707aa9658b1fcf0349f3",
  measurementId: "G-0H9RFYG1XQ"
};

const app = initializeApp(firebaseConfig);

function App() {

  return (
    <>
      <div>
        <Signin />
      </div>
    </>
  )
}

export default App