import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import AddTodo from './AddTodo';
import Todos from './Todos';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    return (
        <div className="drawer drawer-mobile ">
            <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content ">
                <h2 className='text-3xl text-accent font-bold text-center mt-5'>Welcome To The Dashboard</h2>
                <Outlet></Outlet>


            </div>
            <div className="drawer-side -z-0">
                <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-50 font-bold text-accent lg:bg-gray-300">
                    {/* <!-- Sidebar content here --> */}

                    <li><Link to='/dashboard'>Add To-Do</Link></li>
                    <li><Link to='/dashboard/allTodos'>All To-do</Link></li>

                </ul>

            </div>
        </div>
    );
};

export default Dashboard;