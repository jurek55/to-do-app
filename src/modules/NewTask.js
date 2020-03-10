import React from 'react';
const NewTask = (props) => {
    return ( 
        <React.Fragment>
            <form>
            <p>
            <input value={props.state.date} type='date' id='termin' onChange={props.form} min='2020-03-03'></input>
            <input type='checkbox' onChange={props.form} checked={props.state.checked} id='important'></input>
            </p>
            <p><textarea value={props.state.text} onChange={props.form} rows='10' cols='40' placeholder='...opis zadania' id='task'></textarea></p>
           <button onClick={props.send}>zapisz</button>
            </form>
        </React.Fragment>
     );
}
 
export default NewTask;