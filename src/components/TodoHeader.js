import PropTypes from "prop-types";
import TodoTitle from "./TodoTitle";
import HeaderInputs from "./HeaderInputs";

export default function TodoHeader({
    onAddTask,
    taskValue,
    priority,
    priorityOptions,
    handlePriorityChange,
    handleTaskChange,
}) {
    return (
        <div className={'stickyContainer'}>
            <TodoTitle title="Todo List" size={"large"} />
            <HeaderInputs
                priority={priority}
                taskValue={taskValue}
                onAddTask={onAddTask}
                priorityOptions={priorityOptions}
                handleTaskChange={handleTaskChange}
                handlePriorityChange={handlePriorityChange}
            />
        </div>
    )
}

TodoHeader.propTypes = {
    onAddTask: PropTypes.func.isRequired,
    taskValue: PropTypes.string,
    priority: PropTypes.string,
    priorityOptions: PropTypes.array,
    handlePriorityChange: PropTypes.func,
    handleTaskChange: PropTypes.func,
}