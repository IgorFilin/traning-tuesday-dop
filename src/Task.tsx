import React, {ChangeEvent} from 'react';
import {TaskType} from "./Todolist";

type TaskPropsType = {
    updateTasks:Array<TaskType>
    removeTodolist:(idTodolist:string)=>void
    removeTask:(id:string,idTodolist:string)=>void
    idTodolist:string
    changeTaskStatus: (taskId: string, isDone: boolean, idTodolist: string) => void
}

export const Task = (props:TaskPropsType) => {


    return (
        <div>
            {props.updateTasks.map(t => {
                    const onClickHandler = () => props.removeTask(t.id, props.idTodolist)
                    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
                        props.changeTaskStatus(t.id, e.currentTarget.checked, props.idTodolist);
                    }

                    return <li key={t.id} className={t.isDone ? "is-done" : ""}>
                        <input type="checkbox"
                               onChange={onChangeHandler}
                               checked={t.isDone}/>
                        <span>{t.title}</span>
                        <button onClick={onClickHandler}>x</button>
                    </li>
                })}
                </div>
    )}

