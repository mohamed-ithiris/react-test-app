// import { Button, List, Elevation } from "antd";
import PropTypes from "prop-types";

export default function TodoBox({ id, todoValue, todoStatus, onDeleteTask, onEditTask }) {
    return (
        <div>
            <p>{id}</p>
            <p>{todoValue}</p>
            <p>{todoStatus}</p>
            <button
                //         rightIcon="trash"
                //         intent="danger"
                //         // text="Delete"
                onClick={() => onDeleteTask(id)}
            >Delete</button>
            <button
                //         rightIcon="edit"
                //         intent="primary"
                //         // text="Edit"
                onClick={() => onEditTask(id, todoValue, todoStatus)}
            >Edit</button>
        </div>
    )
}

TodoBox.propTypes = {
    id: PropTypes.string.isRequired,
    todoValue: PropTypes.string.isRequired,
    todoStatus: PropTypes.string.isRequired,
    onDeleteTask: PropTypes.func.isRequired,
    onEditTask: PropTypes.func.isRequired,
}