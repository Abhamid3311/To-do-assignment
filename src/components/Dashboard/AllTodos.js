import React from 'react';
import Todo from './Todo';

const AllTodos = () => {
    return (
        <div className='pb-10'>
            <h2 className='text-3xl text-orange-700 text-semibold my-7'> All Todos</h2>
            

           {/*  <div className="overflow-x-auto">
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
                            ></Todo>)
                        }
                    </tbody>
                </table>
            </div> */}
        </div>
    );
};

export default AllTodos;