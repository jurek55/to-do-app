import React from 'react';

const Task = (props) => {
const {tekst, termin, id, done, wennDone, important}=props.task;
let color = {};
if (important)
{
    color = {color:'red'}
}
    return ( 
    <p>
    <strong style={color}>{tekst}, termin wykonania do {termin} </strong>
    {!done ? <button onClick={()=>props.archive(id)} >wykonane</button> : <p>wykonano {wennDone}</p>}
    <button onClick={()=>props.delete(id)} >usuń</button>
    </p>
     );
}
 
export default Task;