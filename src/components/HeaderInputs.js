import PropTypes from "prop-types";
import { Button, Input, Select } from 'antd';
import { PlusCircleFilled } from '@ant-design/icons';

export default function HeaderInputs({
    taskValue,
    priority,
    onAddTask,
    priorityOptions,
    handlePriorityChange,
    handleTaskChange,
}) {
    return (
        <div className="HeaderContainer">
            Name: <Input
                value={taskValue}
                placeholder="Write a task here"
                onChange={handleTaskChange}
                style={{
                    width: 240,
                    margin: "8px",
                    border: "2px solid #eee",
                    boxShadow: "0 0 15px 4px rgb(0 0 0 / 6%)",
                    borderRadius: "10px",
                }}
            />
            Priority: <Select
                defaultValue="low"
                value={priority}
                onChange={handlePriorityChange}
                options={priorityOptions}
                style={{
                    width: 120,
                    margin: "8px",
                    border: "2px solid #eee",
                    boxShadow: "0 0 15px 4px rgb(0 0 0 / 6%)",
                    borderRadius: "10px",
                }}
            />
            <Button
                type="primary"
                icon={<PlusCircleFilled />}
                size={"medium"}
                onClick={onAddTask}
                style={{
                    margin: "8px",
                }}
            >
                Add task
            </Button>
        </div>
    )
}

HeaderInputs.propTypes = {
    onAddTask: PropTypes.func.isRequired,
    taskValue: PropTypes.string,
    priority: PropTypes.string,
    priorityOptions: PropTypes.array,
    handlePriorityChange: PropTypes.func,
    handleTaskChange: PropTypes.func,
}