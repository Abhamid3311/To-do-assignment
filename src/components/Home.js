import React from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import bg from '../image/bg.jpg';

const Home = () => {
    const navigate = useNavigate();
    const handleExplore = () => {
        navigate('/dashboard');
    };

    return (
        <div className='bg-gray-200'>
            <div class="hero min-h-screen ">
                <div class="hero-content text-center">
                    <div class="max-w-lg">
                        <h1 class="text-4xl font-bold">Hello Folk! </h1>
                        <h2 class="text-5xl font-bold text-accent mt-5">Welcome To My Page</h2>

                        <button onClick={handleExplore} class="btn btn-primary mt-10 text-bold">Let's Explore <AiOutlineArrowRight className='ml-1'></AiOutlineArrowRight></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;