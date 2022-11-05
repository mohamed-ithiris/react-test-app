import PropTypes from "prop-types";

export default function Header({ refValue, onAddTask }) {
    return (
        <>
            <h3 className="bp4-heading">Todo List</h3>
            <input
                ref={refValue}
                className="bp4-input modifier"
                type="text"
                placeholder="Type something..."
                dir="auto"
            />
            <button
                // rightIcon="plus"
                // intent="success"
                // text="Add task"
                onClick={onAddTask}
            >
                Add task
            </button>
        </>
    )
}

Header.propTypes = {
    refValue: PropTypes.object.isRequired,
    onAddTask: PropTypes.func.isRequired,
}