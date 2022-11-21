import PropTypes from "prop-types";
import CustomTextField from './CustomTextField';
import CustomSelect from './CustomSelect';
import { Modal } from 'antd';

export default function CustomModal({
    isOpen,
    onCancel,
    onUpdate,
    editValue,
    onSetEditTask,
}) {

    const onhandleSelectChange = (value) => {
        onSetEditTask({
            ...editValue,
            status: value
        })
    }

    const onhandleTextChange = (event) => {
        const { target: { value } } = event;
        onSetEditTask({
            ...editValue,
            task: value
        })
    }

    const handlePriorityChange = (data) => {
        onSetEditTask({
            ...editValue,
            priority: data
        })
    }

    return (
        <Modal title="Edit"
            open={isOpen}
            onOk={onUpdate}
            onCancel={onCancel}
        >
            <CustomTextField
                taskLabel={"Task id"}
                textValue={editValue.id}
                onChangeValue={onhandleTextChange}
                isDisabled={true}
            />
            <CustomTextField
                taskLabel={"Task"}
                textValue={editValue.task}
                onChangeValue={onhandleTextChange}
            />
            <CustomSelect
                taskLabel={"Status"}
                selectValue={editValue.status}
                onChangeValue={onhandleSelectChange}
            />
            <CustomSelect
                taskLabel={"Priority"}
                selectValue={editValue.priority}
                onChangeValue={handlePriorityChange}
                selectOptions={["low", "medium", "high"]}
            />
        </Modal>

    )
}

CustomModal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onCancel: PropTypes.func.isRequired,
    onUpdate: PropTypes.func.isRequired,
    editValue: PropTypes.object.isRequired,
    onSetEditTask: PropTypes.func.isRequired,
}