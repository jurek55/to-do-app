import React from 'react';
import Task from './Task';

const TasksListToDo= (props) => {
    const toDo=props.taskslist.filter(task=>!task.done);
    /* const done=props.taskslist.filter(task=>task.done); */
    /* console.log(done) */
    return (
        toDo.map(task=> <Task key={task.id} task={task}  archive={props.archive} delete={props.delete}/>)
     );
}
 
export default TasksListToDo;