import { async } from '@firebase/util';
import React from 'react';
import { useAuthState, useCreateUserWithEmailAndPassword, useSendEmailVerification, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import auth from '../../firebase.init';


const Register = () => {
    const navigate = useNavigate();
    const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth);
    const [
        createUserWithEmailAndPassword,
        user1,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const [sendEmailVerification, sending2,] = useSendEmailVerification(
        auth);

    const [updateProfile, updating, UpdateError] = useUpdateProfile(auth);




    if (loading || updating || gloading) {
        return <button className="btn btn-square loading"></button >;
    };
    let errorElement;

    if (error || gerror) {
        errorElement = <p className='text-danger'>{error?.message}</p>
    };
    if (guser || user1) {
        navigate('/');
    }

    const handleRegisterForm = async (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        await sendEmailVerification();
        toast.success('Sent verification email');

    };

    return (
        <div className="hero min-h-screen">
            <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
                <h3 className='text-accent  font-bold text-3xl mx-auto mt-4'>Sign Up</h3>
                <div className="card-body">
                    <form onSubmit={handleRegisterForm}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input name='name' type="text" placeholder="name" className="input input-bordered" />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name='email' type="email" placeholder="email" className="input input-bordered" />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name='password' type="password" placeholder="password" className="input input-bordered" />
                        </div>

                        <div className="form-control mt-6">
                            <input className="btn btn-accent" type="submit" value="Sign Up" />
                            <ToastContainer />
                        </div>
                    </form>

                    <p className='text-center'>Already have an account?
                        <Link to={'/login'} className='text-secondary ml-2'>please login</Link>
                    </p>

                    <div className="divider">OR</div>
                    <button onClick={() => signInWithGoogle()} className="btn btn-outline btn-accent w-full">
                        Continue with Google
                    </button>
                </div>
            </div>

        </div>
    );
};

export default Register;