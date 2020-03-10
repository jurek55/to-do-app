import React from 'react';
import Task from './Task';

const TasksListDone= (props) => {
    const done=props.taskslist.filter(task=>task.done);
    /* console.log(done) */
    return (
        done.map(task=> <Task key={task.id} task={task}  archive={props.archive} delete={props.delete}/>)
     );
}
 
export default TasksListDone;