import PropTypes from "prop-types";
import TodoTitle from "./TodoTitle";
import HeaderInputs from "./HeaderInputs";

export default function TodoHeader({ refValue, onAddTask }) {
    return (
        <div className={'stickyContainer'}>
            <TodoTitle title="Todo List" size={"large"} />
            <HeaderInputs refValue={refValue} onAddTask={onAddTask} />
        </div>
    )
}

TodoHeader.propTypes = {
    refValue: PropTypes.object.isRequired,
    onAddTask: PropTypes.func.isRequired,
}