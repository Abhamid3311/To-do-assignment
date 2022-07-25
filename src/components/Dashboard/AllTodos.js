import React from 'react';
import { toast } from 'react-toastify';
import useTodos from '../../hooks/useTodos';
import Todo from './Todo';

const AllTodos = () => {
    const [todos, setTodos] = useTodos();


    //Delete Todo
    const handleDeleteBtn = id => {
        const procced = window.confirm('You want to delete?');
        if (procced) {
            const url = `http://localhost:5000/todo/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        const remaining = todos.filter(todo => todo._id !== id);
                        setTodos(remaining);
                        toast.error('Deleted Successfully');
                    }
                })
        };
    };
    return (
        <div className='pb-10'>
            <h2 className='text-3xl text-orange-700 text-semibold my-7'> All Todos</h2>


            <div className="overflow-x-auto">
                <table className="table table-normal w-4/5 mx-auto">
                    <thead >
                        <tr >
                            <th>No.</th>
                            <th>titel</th>
                            <th>Description</th>
                            <th>Status</th>
                            <th>Options</th>
                        </tr>
                    </thead>
                    <tbody >
                        {
                            todos.map((todo, index) => <Todo
                                key={todo.id}
                                todo={todo}
                                index={index}
                                handleDeleteBtn={handleDeleteBtn}
                            ></Todo>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllTodos;