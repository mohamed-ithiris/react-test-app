import PropTypes from "prop-types";
import TodoTitle from "./TodoTitle";
import HeaderInputs from "./HeaderInputs";

export default function TodoHeader({
    refValue,
    priority,
    onAddTask,
    priorityOptions,
    handlePriorityChange
}) {
    return (
        <div className={'stickyContainer'}>
            <TodoTitle title="Todo List" size={"large"} />
            <HeaderInputs
                priority={priority}
                refValue={refValue}
                onAddTask={onAddTask}
                priorityOptions={priorityOptions}
                handlePriorityChange={handlePriorityChange}
            />
        </div>
    )
}

TodoHeader.propTypes = {
    refValue: PropTypes.object.isRequired,
    onAddTask: PropTypes.func.isRequired,
}