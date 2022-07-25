import React, { useState } from 'react';
import { useAuthState, useUpdatePassword, useUpdateEmail } from 'react-firebase-hooks/auth';

import auth from '../../firebase.init';


const ManageProfile = () => {
    const [user, loading] = useAuthState(auth);
     const [email, setEmail] = useState('');
     const [updateEmail, updating, error] = useUpdateEmail(auth);
    const [password, setPassword] = useState('');
    const [updatePassword, updating1, error1] = useUpdatePassword(auth);

    console.log(user);

    /* if (loading) {
        return <p>Loading...</p>
    };
     */

    if (error1) {
        return (
            <div>
                <p>Error: {error1?.message}</p>
            </div>
        );
    }
    if (updating1) {
        return <p>Updating...</p>;
    }
    return (
        <div>
            <h2>Update your Profile</h2>

            <div className='w-1/2 mx-auto'>
                <h2>UserName: {user?.displayName}</h2>
                <h2>UserEmail: {user?.email}</h2>
                <div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input
                            name='email'
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input
                            name='password'
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="input input-bordered" />
                    </div>
                    <button
                        onClick={async () => {
                            // await updateEmail(user?.email);
                            await updatePassword(user?.email);
                            console.log(user?.email)
                            alert('Updated Profile');
                        }}
                        className='btn btn-primary'
                    >
                        Update password
                    </button>
                </div>
                <div>

                </div>
            </div>

        </div>
    );
};

export default ManageProfile;