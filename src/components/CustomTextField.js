import PropTypes from "prop-types";
import {
    Form,
    Input,
} from 'antd';


export default function CustomTextField({ textValue, onChangeValue, isDisabled, taskLabel }) {
    return (
        <Form
            labelCol={{ span: 4 }}
            wrapperCol={{ span: 14 }}
            layout="horizontal"
        >
            <Form.Item label={taskLabel}>
                <Input disabled={isDisabled} value={textValue} onChange={onChangeValue} placeholder="Type here..." />
            </Form.Item>
        </Form>
    )
}

CustomTextField.propTypes = {
    textValue: PropTypes.string.isRequired,
    onChangeValue: PropTypes.func.isRequired,
    taskId: PropTypes.string,
    isDisabled: PropTypes.bool,
    taskLabel: PropTypes.string.isRequired,
}