import React, { useState, useContext } from 'react';
import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth } from '../api/firebase';
import { NavLink, useNavigate } from 'react-router-dom'
import { userContext } from '../App';
import { Button, Container, Spacer, Text } from '@nextui-org/react';
import Swal from 'sweetalert2'

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { setUserName, showButton, setShowButton, setUserLoggedIn, isDark } = useContext(userContext);

    const onLogin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                console.log(user);
                setShowButton(false);
                localStorage.setItem("userLoggedIn", user);
                setUserLoggedIn(user);
                setUserName("User");
                navigate("/");
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
                setShowButton(false);
                setUserName("Guest");
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Wrong email or password!',
                    footer: '<a href="">Forgot your password?</a>'
                })
            });
    }

    const provider = new GoogleAuthProvider();

    const signInWithGoogle = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                // ...
                console.log(user);
                setShowButton(false);
                setUserName(user.displayName);
                localStorage.setItem('userLoggedIn', user);
                setUserLoggedIn(user);
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
                console.log("User logged out due to error: ", errorMessage, errorCode);
                setUserName("Guest");
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!',
                })
            })
    }

    return (
        <Container xl align="center"
            style={!isDark ? {
                backgroundImage: `url(${"https://images.pexels.com/photos/509922/pexels-photo-509922.jpeg"})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundAttachment: "fixed"
            } : {
                backgroundImage: `url(${"https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundAttachment: "fixed"
            }}
            css={isDark ? { color: '$white' } : { color: '$black' }}>
            <Spacer />
            <Text h1> Login </Text>
            <form>
                <div>
                    <label htmlFor="email-address">
                        Email address
                    </label>
                    <Spacer x={5} />
                    <input
                        id="email-address"
                        name="email"
                        type="email"
                        required
                        placeholder="Email address"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <Spacer />
                <div>
                    <label htmlFor="password">
                        Password
                    </label>
                    <Spacer x={5} />
                    <input
                        id="password"
                        name="password"
                        type="password"
                        required
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <Spacer />
                <div>
                    <button
                        onClick={onLogin}
                    >
                        Login
                    </button>
                </div>
            </form>

            <p className="text-sm text-center">
                No account yet? {' '}
                <NavLink to="/signup">
                    Sign up
                </NavLink>
            </p>
            <Button onPress={signInWithGoogle}>
                Sign up with google
            </Button>
            <Spacer />
        </Container>
    )
}

export default Login