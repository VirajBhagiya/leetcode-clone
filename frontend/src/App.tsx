import './App.css';
import { initializeApp } from "firebase/app";
import { Signin } from './components/Signin';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useEffect } from 'react';
import { RecoilRoot, useRecoilState } from 'recoil';
import { userAtom } from './store/atoms/user';

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
  return <RecoilRoot>
    <StoreApp />
  </RecoilRoot>
}

function StoreApp(){
  const [user, setUser] = useRecoilState(userAtom);
  
  useEffect(() => {
    onAuthStateChanged(auth, function(user){
      if(user && user.email){
        setUser({
          loading: false,
          user: {
            email: user.email
          }
        })
      } else{
        setUser({
          loading: false
        })
        console.log("There is no logged in user!")
      }
    });
  }, [])
  
  if(user.loading){
    return <div>Loading...</div>
  }
  
  if(!user.user){
    return <div><Signin /></div>
  }
  
  return (
    <>
      You are logged in as {user.user?.email}
    </>
  )
}

export default App