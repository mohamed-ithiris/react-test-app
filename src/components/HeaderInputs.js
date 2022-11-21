import PropTypes from "prop-types";
import { Button, Select } from 'antd';
import { PlusCircleFilled } from '@ant-design/icons';

export default function HeaderInputs({
    refValue,
    priority,
    onAddTask,
    priorityOptions,
    handlePriorityChange
}) {
    return (
        <div className="HeaderContainer">
            <input
                ref={refValue}
                className="custom-input"
                type="text"
                placeholder="Type something..."
                dir="auto"
            />
            <Select
                defaultValue="low"
                value={priority}
                onChange={handlePriorityChange}
                options={priorityOptions}
                style={{
                    width: 120,
                }}
            />
            <Button
                type="primary"
                icon={<PlusCircleFilled />}
                size={"medium"}
                onClick={onAddTask}
            >
                Add task
            </Button>
        </div>
    )
}

HeaderInputs.propTypes = {
    refValue: PropTypes.object.isRequired,
    onAddTask: PropTypes.func.isRequired,
}