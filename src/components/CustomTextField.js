import PropTypes from "prop-types";
import {
    Form,
    Input,
} from 'antd';


export default function CustomTextField({ refValue, textValue, onChangeValue, isDisabled, taskLabel }) {
    return (
        <Form
            labelCol={{ span: 4 }}
            wrapperCol={{ span: 14 }}
            layout="horizontal"
        >
            <Form.Item label={taskLabel}>
                <Input ref={refValue} disabled={isDisabled} value={textValue} onChange={onChangeValue} placeholder="Type here..." />
            </Form.Item>
        </Form>
    )
}

CustomTextField.propTypes = {
    textValue: PropTypes.string,
    onChangeValue: PropTypes.func,
    taskId: PropTypes.string,
    isDisabled: PropTypes.bool,
    taskLabel: PropTypes.string,
}