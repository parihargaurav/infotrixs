import { useState } from "react";

import { useDispatch } from "react-redux";

import { addNewTodo } from "../redux/actions";

const TodoForm = () => {
    const [text, setText] = useState("");

    const dispatch = useDispatch();
// here we have created a function
    const onFormSubmit = (e) => {
        e.preventDefault();

        dispatch(addNewTodo(text));

        setText('');
    }
    const onInputChange = (e) => {
        setText(e.target.value);
        // console.log(e.target.value);
    }
    return (
        <form className="form" onSubmit={onFormSubmit}>
            <input
                placeholder="Enter new todo..."
                className="input"
                onChange={onInputChange}
                value={text}
            />
        </form>
    )
}

export default TodoForm;