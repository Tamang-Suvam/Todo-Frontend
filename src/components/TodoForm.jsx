import { useState } from "react";
import { useDispatch } from "react-redux";
import { addNewTodo } from "../redux/actions";

const TodoForm = () => {
    const [todo, setTodo] = useState("");

    const dispatch = useDispatch();

    const onFormSubmit = (e) => {
        e.preventDefault();

        dispatch(addNewTodo(todo));
        setTodo('');
    }

    const onInputChange = (e) => {
        setTodo(e.target.value)
    }

    return (
        <form className="form" onSubmit={onFormSubmit}>
            <input
                placeholder="Enter Todo"
                className="input"
                onChange={onInputChange}
                value={todo}
            />
        </form>
    )
}

export default TodoForm;