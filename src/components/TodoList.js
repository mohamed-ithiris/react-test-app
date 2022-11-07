import TodoBox from "./TodoBox";
import PropTypes from "prop-types";
import { List } from 'antd';

export default function TodoList({ todoList, onDeleteTask, onEditTask }) {
    return (
        <List
            itemLayout="horizontal"
            dataSource={todoList}
            renderItem={(list, index) => (
                <TodoBox
                    key={"todos" + index}
                    sNo={index + 1}
                    id={list.id}
                    todoValue={list.task}
                    todoStatus={list.status}
                    onDeleteTask={onDeleteTask}
                    onEditTask={onEditTask}
                    todoCreated={list.created}
                />
            )}
        />
    )
}

TodoList.propTypes = {
    todoList: PropTypes.arrayOf(PropTypes.object).isRequired,
    onDeleteTask: PropTypes.func.isRequired,
    onEditTask: PropTypes.func.isRequired,
}