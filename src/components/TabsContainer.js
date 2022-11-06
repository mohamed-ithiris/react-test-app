import TodoList from './TodoList';
import { Col, Tabs, Card } from 'antd';
import PropTypes from "prop-types";

export default function TabsContainer({ todos, deleteTask, setTaskData }) {
    const itemsList = [
        {
            key: "taskList1",
            label: `All Task(${todos.length})`,
            list: todos
        },
        {
            key: "taskList2",
            label: `Todo(${todos.filter(data => data.status === "Todo").length})`,
            list: todos.filter(data => data.status === "Todo")
        },
        {
            key: "taskList3",
            label: `Inprogress(${todos.filter(data => data.status === "Inprogress").length})`,
            list: todos.filter(data => data.status === "Inprogress")
        },
        {
            key: "taskList4",
            label: `Completed(${todos.filter(data => data.status === "Completed").length})`,
            list: todos.filter(data => data.status === "Completed")
        },
    ]
    return (
        <Col lg={16} md={20} sm={22} style={{ margin: "auto" }}>
            <Card className='TabStyle'>
                <Tabs
                    size='large'
                    defaultActiveKey="taskList1"
                    items={
                        itemsList.map(data => {
                            return {
                                label: data.label,
                                key: data.key,
                                children: <TodoList
                                    todoList={data.list}
                                    onDeleteTask={deleteTask}
                                    onEditTask={setTaskData}
                                />,
                            };
                        })
                    }
                />
            </Card>
        </Col>
    )
}

TabsContainer.propTypes = {
    todos: PropTypes.array.isRequired,
    deleteTask: PropTypes.func.isRequired,
    setTaskData: PropTypes.func.isRequired,
}