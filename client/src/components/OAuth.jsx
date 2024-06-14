// OAuth.js
import React from "react";
import { Button } from "flowbite-react";
import { AiFillGoogleCircle } from "react-icons/ai";
import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { useDispatch } from "react-redux";
import { signInWithGoogle } from '../redux/user/authSlice'; 
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom'; 

// Firebase configuration and initialization
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID
};

const app = initializeApp(firebaseConfig);

const OAuth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); 

  const handleGoogleClick = async () => {
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({ prompt: "select_account" });

    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      const { displayName: name, email, photoURL } = user;

      // Dispatch signInWithGoogle thunk
      const action = await dispatch(signInWithGoogle({ name, email, photoURL }));

      if (signInWithGoogle.fulfilled.match(action)) {
        toast.success('Signed in successfully!');
        navigate('/'); // Navigate to the home page
      } else {
        toast.error('Failed to sign in.');
      }
    } catch (err) {
      toast.error('Failed to sign in.');
      console.error(err);
    }
  };

  return (
    <>
      <Button
        className="w-full"
        type="button"
        gradientDuoTone="tealToLime"
        outline
        onClick={handleGoogleClick}
      >
        <AiFillGoogleCircle className="w-6 h-6 mr-3" />
        Continue with Google
      </Button>

      <ToastContainer />
    </>
  );
};

export default OAuth;
