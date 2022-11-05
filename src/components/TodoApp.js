import React, { useState } from 'react';
import TodoList from './TodoList';
import Header from './Header';
import uuid from 'uuidv4';
import CustomModal from './CustomModal';


export default function TodoApp() {
    const taskValue = React.useRef();
    const [openDialog, setOpenDialog] = useState(false);
    const [editTask, setEditTask] = useState({ id: "", task: "", status: "" });
    const [todos, setTodos] = useState([
        {
            id: "1",
            task: "study react",
            status: "Todo",
        },
        {
            id: "2",
            task: "Practice React",
            status: "Onprogress",
        },
        {
            id: "3",
            task: "Do project",
            status: "Completed",
        }
    ]);

    function addTask() {
        const todosList = todos.concat();
        let newTask = {
            id: uuid(),
            task: taskValue.current.value,
            status: "Todo",
        }
        todosList.push(newTask);
        setTodos(todosList);
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
        <>
            <CustomModal
                isOpen={openDialog}
                onCancel={handleCancel}
                onUpdate={updateTask}
                editValue={editTask}
                onSetEditTask={setEditTask}
            />
            <Header
                refValue={taskValue}
                onAddTask={addTask}
            />
            <TodoList
                todoList={todos}
                onDeleteTask={deleteTask}
                onEditTask={setTaskData}
            />
        </>
    );
}


