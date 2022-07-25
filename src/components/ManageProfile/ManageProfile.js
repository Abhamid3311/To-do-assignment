import React, { useState } from 'react';
import { useAuthState, useUpdatePassword, useUpdateEmail, useUpdateProfile } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';


const ManageProfile = () => {
    const [user] = useAuthState(auth);

    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const [updatePassword, updating1, error1] = useUpdatePassword(auth);
    const [updateProfile, updating2, UpdateError] = useUpdateProfile(auth);


    if (error1 || UpdateError) {
        return (
            <div>
                <p>Error: {error1?.message}</p>
            </div>
        );
    }
    if (updating1 || updating2) {
        return <p>Updating...</p>;
    }

    const handleUpdateBtn = async () => {
        await updatePassword(user?.email);
        await updateProfile({ displayName: name });
        toast.success('Profile Updated');
    };

    return (
        <section className='mb-10'>
            <h2 className='text-3xl text-orange-700 text-semibold my-7'>Update your Profile</h2>

            <div className='w-1/2 mx-auto'>
                <div className='text-left mb-10'>
                    <h2>UserName: {user?.displayName}</h2>
                    <h2>UserEmail: {user?.email}</h2>
                </div>
                <div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">UserName</span>
                        </label>
                        <input
                            name='name'
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
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
                        onClick={handleUpdateBtn}
                        className='btn btn-primary mt-4'
                    >
                        Update password
                    </button>

                </div>
                <div>

                </div>
            </div>

        </section>
    );
};

export default ManageProfile;