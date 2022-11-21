import React, { useState } from 'react';
import TodoHeader from './TodoHeader';
import uuid from 'uuidv4';
import CustomModal from './CustomModal';
import { Card } from 'antd';
import { notification } from 'antd';
import TabsContainer from './TabsContainer';

const openNotification = (placement) => {
    notification.warning({
        message: `Warning`,
        description:
            'Could not process blank!',
        placement,
    });
};

export default function TodoApp() {
    const taskValue = React.useRef();
    const [openDialog, setOpenDialog] = useState(false);
    const [editTask, setEditTask] = useState({ id: "", task: "", status: "" });
    const currentDate = new Date();
    const [todos, setTodos] = useState([
        {
            id: "1",
            task: "study react",
            status: "Todo",
            created: currentDate.toDateString() + currentDate.toLocaleTimeString(),
        },
    ]);

    function addTask() {
        let newTaskValue = taskValue.current.value;
        if (newTaskValue === "") {
            openNotification("top");
            return null;
        }
        const todosList = todos.concat();
        let newTask = {
            id: uuid(),
            task: newTaskValue,
            status: "Todo",
            created: currentDate.toDateString() + " " + currentDate.toLocaleTimeString(),
        }
        todosList.push(newTask);
        setTodos(todosList);
        taskValue.current.value = "";
    }

    function setTaskData(id, todoValue, todoStatus) {
        setEditTask({ id, task: todoValue, status: todoStatus })
        setOpenDialog(true);
    }

    function updateTask() {
        const todosList = todos.filter(data => {
            if (data.id === editTask.id) {
                data.task = editTask.task;
                data.status = editTask.status;
            }
            return data;
        });
        setTodos(todosList);
        setEditTask({ id: "", task: "", status: "" });
        setOpenDialog(false)
    }

    function deleteTask(id) {
        const todosList = todos.filter(data => data.id !== id);
        setTodos(todosList);
    }

    function handleCancel() {
        setEditTask({ id: "", task: "", status: "" });
        setOpenDialog(false)
    }

    return (
        <div className='container'>
            <Card className='cardStyle'>
                <CustomModal
                    isOpen={openDialog}
                    onCancel={handleCancel}
                    onUpdate={updateTask}
                    editValue={editTask}
                    onSetEditTask={setEditTask}
                />
                <TodoHeader
                    refValue={taskValue}
                    onAddTask={addTask}
                />
                <TabsContainer
                    todos={todos}
                    deleteTask={deleteTask}
                    setTaskData={setTaskData}
                />
            </Card>
        </div>
    );
}


