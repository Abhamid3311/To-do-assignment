import { useEffect, useState } from "react"

const useTodos = () => {
    const [todos, setTodos] = useState([]);
    useEffect(() => {
        fetch('https://mighty-wave-16131.herokuapp.com/todo/')
            .then(res => res.json())
            .then(data => {
                setTodos(data)
            })
    }, []);
    return [todos, setTodos];
};
export default useTodos;