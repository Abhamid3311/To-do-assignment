import React from 'react';
import { AiFillDelete } from 'react-icons/ai';
import { BiEdit } from 'react-icons/bi';

const Todo = ({ todo, index, handleDeleteBtn }) => {
    const { title, desc, status, time, _id } = todo;
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{title}</td>
            <td>{desc.slice(0, 40)}</td>
            <td>{status}</td>
            <td>
                <button className='btn btn-xs btn-ghost text-2xl text-green-500'><BiEdit></BiEdit></button>
                <button className='btn btn-xs btn-ghost text-2xl text-red-500' onClick={() => handleDeleteBtn(_id)}><AiFillDelete></AiFillDelete></button>
            </td>
            <td>{time}</td>


        </tr>
    );
};

export default Todo;