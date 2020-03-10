import React, {Component, Fragment} from 'react';
import './App.css';
import TasksListToDo from './TasksListToDo';
import TasksListDone from './TasksListDone';
import NewTask from './NewTask';

class App extends Component {
  state = { 
    data: [
      {id: 0,
      tekst: 'książka',
      termin: '2020-03-11',
      done: false,
      wenndone: '',
      important: true},
      {id: 1,
      tekst: 'rower',
      termin: '2020-05-18',
      done: false,
      wenndone: '',
      important: false},
      {id: 2,
      tekst: 'narty',
      termin: '2020-03-21',
      done: false,
      wenndone: '',
      important: true}
  ],
    text: '',
    checked:  false,
    date: ''
   } 
   handleDeleteButton=(id)=>{
      const data=[...this.state.data];
      const index=data.findIndex(item =>item.id === id);
      data.splice(index,1);
      this.setState({
        data
      })
   }
   handleArchiveButton=(id)=>{
      const data=[...this.state.data];
      const index=data.findIndex(item =>item.id === id);
      data[index].done = true;
      const wenn=new Date();
      data[index].wennDone = wenn.toLocaleString();
      this.setState({
        data
      })
   }
   handleForm=(e)=>{
     const button = e.target.id;
    /*  console.log(button) */
     const value = e.target.value;
        if (button === 'task'){
        this.setState({
          text: value
        })
        }
        else if (button === 'termin'){
          this.setState({
          date: value
          })
          /* console.log(this.state.date) */
        }
        else if (button === 'important'){
          this.setState({
          checked: e.target.checked
          })
        }
   }
   handleSendButton=(e)=>{
      e.preventDefault();
      const newData=[...this.state.data];
      console.log(newData);
      const newId=newData.length;
      console.log(newId)
      const newItem = {
        id: newId,
        tekst: this.state.text,
        termin: this.state.date,
        done: false,
        wenndone: '',
        important: this.state.checked
        };
      newData.push(newItem);
      
      this.setState({
        data: newData,
        text:'',
        checked: false,
        date: ''

      })
   }
  render() { 
    const tasks=[...this.state.data];
     console.log(this.state.data);
    /* console.log(this.state.text); */
    return ( 
      <Fragment>
      <h1 >Nowe zadanie</h1>
      <NewTask form={this.handleForm} state={this.state} send={this.handleSendButton}/>
      <hr/>
      <h1 style={{color:'red'}}>Lista zadań</h1>
      <TasksListToDo taskslist={tasks}  archive={this.handleArchiveButton} delete={this.handleDeleteButton}/> 
      <hr/>
      <h1 >Zarchiwizowane</h1>
      <TasksListDone taskslist={tasks}  archive={this.handleArchiveButton} delete={this.handleDeleteButton}/>
      </Fragment> 
    );
  }
}
 

export default App;
