import TodoBox from "./TodoBox";
import PropTypes from "prop-types";

export default function TodoList({ todoList, onDeleteTask, onEditTask }) {
    return (
        <>
            {
                todoList.map((list, index) => {
                    return (
                        <TodoBox
                            key={"todos" + index}
                            id={list.id}
                            todoValue={list.task}
                            todoStatus={list.status}
                            onDeleteTask={onDeleteTask}
                            onEditTask={onEditTask}
                        />
                    );
                })
            }
        </>
    )
}

TodoList.propTypes = {
    todoList: PropTypes.arrayOf(PropTypes.object).isRequired,
    onDeleteTask: PropTypes.func.isRequired,
    onEditTask: PropTypes.func.isRequired,
}