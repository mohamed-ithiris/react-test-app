
import PropTypes from "prop-types";
import {
    Form,
    Select,
} from 'antd';

export default function CustomSelect({ selectValue, selectOptions, onChangeValue, taskLabel }) {
    return (
        <Form
            labelCol={{ span: 4 }}
            wrapperCol={{ span: 14 }}
            layout="horizontal"
        >
            <Form.Item label={taskLabel}>
                <Select value={selectValue} onChange={onChangeValue}>
                    {
                        selectOptions.map(
                            (data, index) =>
                                <Select.Option key={"statusOptions" + index} value={data}>{data}</Select.Option>
                        )
                    }

                </Select>
            </Form.Item>
        </Form>
    );
}

CustomSelect.propTypes = {
    selectValue: PropTypes.string.isRequired,
    onChangeValue: PropTypes.func.isRequired,
    taskLabel: PropTypes.string.isRequired,
}

CustomSelect.defaultProps = {
    selectOptions: ["Todo", "Inprogress", "Completed"]
}