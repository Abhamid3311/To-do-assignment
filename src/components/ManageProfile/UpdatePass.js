import React, { useState } from 'react';
import { useAuthState, useUpdatePassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useCreateUserWithEmailAndPassword, useSendEmailVerification, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { async } from '@firebase/util';

const UpdatePass = () => {
    const [user] = useAuthState(auth)
    const [password, setPassword] = useState('');
    console.log(password);
    const [updatePassword, updating] = useUpdatePassword(auth);
    const [
        createUserWithEmailAndPassword,
        user1,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    if (error) {
        return (
            <div>
                <p>Error: {error.message}</p>
            </div>
        );
    };
    if (updating) {
        return <p>Updating...</p>;
    };
    const updatedPassword = async () => {
        await updatePassword(user.email);
        alert('Updated password');
    }


    return (
        <div className="App">

            <input
                type="password"
                // value={Password}
                onChange={(e) => setPassword(e.target.value)}
                className="input input-bordered"
            />
            <input
                type="password"
                // value={newPassword}
                onChange={(e) => setPassword(e.target.value)}
                className="input input-bordered"
            />
            <button
                onClick={() => updatedPassword()}
                className='btn btn-primary'
            >
                Update password
            </button>
        </div>
    );
};

export default UpdatePass;