import React, { useState, useContext } from 'react';
import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth } from '../api/firebase';
import { NavLink, useNavigate } from 'react-router-dom'
import { userContext } from '../App';
import { Button } from '@nextui-org/react';

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { setUserName, showButton, setShowButton } = useContext(userContext);

    const onLogin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                console.log(user);
                setShowButton(false);
                console.log(showButton);
                navigate("/");
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
                setShowButton(false);
                setUserName("Guest");
            });
    }

    const provider = new GoogleAuthProvider();

    const signInWithGoogle = (e) => {
        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                // ...
                setShowButton(false);
                console.log(user);
                setUserName(user.displayName);
                console.log(showButton);
                navigate("/");
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
                console.log("User logged out due to unexpected result");
                setUserName("Guest");

            })
    }

    return (
        <div>
            <form>
                <div>
                    <label htmlFor="email-address">
                        Email address
                    </label>
                    <input
                        id="email-address"
                        name="email"
                        type="email"
                        required
                        placeholder="Email address"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="password">
                        Password
                    </label>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        required
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div>
                    <button
                        onClick={onLogin}
                    >
                        Login
                    </button>
                </div>
            </form>

            <p className="text-sm text-black text-center">
                No account yet? {' '}
                <NavLink to="/signup">
                    Sign up
                </NavLink>
            </p>
            <p className="text-sm text-black text-center">
                <Button onPress={signInWithGoogle}>
                    Sign up with google
                </Button>
            </p>
        </div>
    )
}

export default Login