import PropTypes from "prop-types";
import { List, Button, Badge, Space } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';

export default function TodoBox({ sNo, id, todoValue, todoStatus, onDeleteTask, onEditTask }) {
    return (
        <List.Item>
            <Button type="default" shape="circle" className="mr-2">
                {sNo}
            </Button>
            <List.Item.Meta
                title={todoValue}
                description={
                    <Badge
                        style={{
                            backgroundColor: todoStatus === "Todo" ? "#ff4d4f" :
                                todoStatus === "Inprogress" ? "#faad14" :
                                    "#52c41a"
                        }}
                        count={todoStatus}
                    />
                }
            />
            <Space>
                <Button
                    type="primary"
                    icon={<EditOutlined />}
                    size={"large"}
                    onClick={() => onEditTask(id, todoValue, todoStatus)
                    }
                />
                <Button
                    type="danger"
                    icon={<DeleteOutlined />}
                    size={"large"}
                    onClick={() => onDeleteTask(id)}
                />
            </Space>
        </List.Item>
    )
}

TodoBox.propTypes = {
    sNo: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired,
    todoValue: PropTypes.string.isRequired,
    todoStatus: PropTypes.string.isRequired,
    onDeleteTask: PropTypes.func.isRequired,
    onEditTask: PropTypes.func.isRequired,
}