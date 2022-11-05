import PropTypes from "prop-types";
import CustomTextField from './CustomTextField';
import CustomSelect from './CustomSelect';
import { Modal } from 'antd';

export default function CustomModal({
    isOpen,
    onCancel,
    onUpdate,
    editValue,
    onSetEditTask
}) {

    const onhandleSelectChange = (value) => {
        // const { target: { value } } = event;
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