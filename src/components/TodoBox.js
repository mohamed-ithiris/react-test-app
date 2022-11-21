import PropTypes from "prop-types";
import { List, Button, Badge } from 'antd';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';

export default function TodoBox({ sNo, id, todoValue, todoStatus, todoCreated, onDeleteTask, onEditTask }) {
    return (
        <List.Item>
            <section className="todoSection">
                <div>
                    <Button type="default" shape="circle" className="mr-2">
                        {sNo}
                    </Button>
                </div>
                <div>
                    <span>
                        {todoValue}
                    </span>
                    <Badge
                        style={{
                            backgroundColor: todoStatus === "Todo" ? "#ff4d4f" :
                                todoStatus === "Inprogress" ? "#faad14" :
                                    "#52c41a"
                        }}
                        count={todoStatus}
                    />
                </div>
                <div>
                    {todoCreated}
                </div>
                <div>
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
                </div>
            </section>
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