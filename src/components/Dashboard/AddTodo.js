import React, { useState } from 'react';
import useTodos from '../../hooks/useTodos';

const AddTodo = () => {
    const [todos, setTodos] = useTodos();
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [status, setStatus] = useState('');


    //get Value from Form
    const handleTitle = e => {
        setTitle(e.target.value);
    };
    const handleDesc = e => {
        setDesc(e.target.value);
    };

    const handleStatus = e => {
        setStatus(e.target.value)
    };

    //Handle Add TODO
    const handleAddToDo = e => {
        e.preventDefault();
        const newTodo = {
            title,
            desc,
            status,
        };

        //send to server
        const url = `http://localhost:5000/todo/`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newTodo)
        })
            .then(res => res.json())
            .then(result => {
                const newTodos = [...setTodos, result];
                setTodos(newTodos);
            });

        e.target.reset();

    };
    return (
        <div>
            <h2 className='text-3xl text-orange-700 text-semibold my-7'>Please Add a TO-Do</h2>
            <form className='my-12' onSubmit={handleAddToDo}>
                <input
                    type="text"
                    className="input input-bordered input-primary w-96 mx-auto mb-4 bg-black text-white"
                    placeholder='Title'
                    name='title'
                    onBlur={handleTitle}
                    id='title' required /> <br />

                <select
                    className="select select-primary  w-96 mx-auto mb-4 bg-black text-white" onChange={handleStatus}>
                    <option disabled defaultValue>Choose Status</option>
                    <option>Open</option>
                    <option>Working</option>
                    <option>Done</option>
                    <option>Over Due</option>
                </select><br />

                <textarea
                    type="text"
                    className="textarea textarea-primary w-96 mx-auto mb-4 bg-black text-white" placeholder='Descriptions'
                    onBlur={handleDesc}
                    id='desc' required /> <br />

                <button type='submit' className='text-bold btn btn-outline text-white btn-primary w-96 mx-auto '>Add ToDo</button>
            </form>
        </div>
    );
};

export default AddTodo;