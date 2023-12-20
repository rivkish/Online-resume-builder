import React, { useState } from 'react';
import {auth} from "../firebase/config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useSignup } from '../hooks/useSignUp'




function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [error, setError] = useState(null);
  const { error, signup } = useSignup()

  const handleLogin = async (e) => {
    e.preventDefault();
    signup(email,password)
    // try {
    //   // await signInWithEmailAndPassword(auth,email, password);
    //   await createUserWithEmailAndPassword(email, password);
    //   // If successful, you can redirect or handle the logged-in state here
    // } catch (err) {
    //   setError(err.message);
    // }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
}

export default Login;