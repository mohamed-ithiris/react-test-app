import PropTypes from "prop-types";
import { Button } from 'antd';
import { PlusCircleFilled } from '@ant-design/icons';

export default function HeaderInputs({ refValue, onAddTask }) {
    return (
        <div className="HeaderContainer">
            <input
                ref={refValue}
                className="custom-input"
                type="text"
                placeholder="Type something..."
                dir="auto"
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