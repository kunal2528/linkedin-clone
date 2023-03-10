import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../features/userSlice';
import { auth } from '../firebase';
import '../styles/Loign.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [profile, setProfile] = useState('');
  const dispatch = useDispatch();

  const loginToApp = (e) => {
    e.preventDefault();
    auth.signInWithEmailAndPassword(email, password)
    .then(userAuth => {
      dispatch(login({
        email: userAuth.user.email,
        uid: userAuth.user.uid,
        displayName: userAuth.user.displayName,
        photoURL: userAuth.user.photoURL,
      }))
    })
    .catch(error => alert(error));
  }
  const register = () => {
    if(!name) {
      return alert('Please enter a full name')
    }

    auth.createUserWithEmailAndPassword(email, password)
    .then((userAuth) => {
      userAuth.user.updateProfile({
        displayName: name,
        photoURL: profile,
      })
      .then(() => {
        dispatch(login({
          email: userAuth.user.email,
          uid: userAuth.user.uid,
          displayName: name,
          photoURL: profile
        }))
      })
    })
    .catch(error => alert(error))
  }

  return (
    <div className='login'>
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/1200px-LinkedIn_Logo.svg.png" alt="logo" />
      <form>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='Full name (required if registering)' />
        <input type="text" value={profile} onChange={(e) => setProfile(e.target.value)}  placeholder='Profile pic URL (optional)' />
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' />
        <button type='submit' onClick={loginToApp}>Sign In</button>
      </form>
      <p>Not a member ? <span className='login_register' onClick={register}>Register Now</span></p>
    </div>
  )
}

export default Login;