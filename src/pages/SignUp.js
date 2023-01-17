import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from "../api/firebase";
import { Spacer, Text } from '@nextui-org/react';
import { useContext } from 'react';
import { userContext } from '../App';

const SignUp = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { isDark } = useContext(userContext);

    const onSubmit = async (e) => {
        e.preventDefault();

        await createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
                navigate("/login");
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
            });
    };

    return (
        <section
        style={!isDark ? {
            backgroundImage: `url(${"https://images.pexels.com/photos/509922/pexels-photo-509922.jpeg"})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundAttachment:"fixed"
        } : {
            backgroundImage: `url(${"https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundAttachment:"fixed"
        }}>
            <div>
                <Spacer />
                <Text h1> Sign Up </Text>
                <form>
                    <Spacer />
                    <div>
                        <label htmlFor="email-address">
                            Email address
                        </label>
                        <Spacer x={5} />
                        <input
                            type="email"
                            label="Email address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            placeholder="Email address"
                        />
                    </div>
                    <Spacer />
                    <div>
                        <label htmlFor="password">
                            Password
                        </label>
                        <Spacer x={5} />
                        <input
                            type="password"
                            label="Create password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            placeholder="Password"
                        />
                    </div>
                    <Spacer />
                    <button
                        type="submit"
                        onClick={onSubmit}
                    >
                        Sign up
                    </button>
                </form>
                <p>
                    Already have an account?{' '}
                    <NavLink to="/login" >
                        Sign in
                    </NavLink>
                </p>
            </div>
        </section>
    )
}

export default SignUp;