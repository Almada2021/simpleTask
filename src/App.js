import './App.css';
import React,{useEffect, useState} from 'react';
import Header from './componentes/Header';
import FormTask from './componentes/FormTask';
import TaskList from './componentes/TaskList';
const App =() => {
  const saveTask = localStorage.getItem('Task') ? JSON.parse(localStorage.getItem('Task')):[];
  let config = "";
  if(localStorage.getItem('View') === null){
    config = false;
  }else if (localStorage.getItem('View') !== null ){
    config = localStorage.getItem('View')  === 'true' ? true : false ;
  }
  const [Task, changeTask] =useState(saveTask);
  const [viewReady, changeViewReady ] = useState(config);
  useEffect(()=>{
    localStorage.setItem('Task',JSON.stringify(Task));
  },[Task]);
  useEffect(()=>{
    localStorage.setItem('View',viewReady.toString());
  },[viewReady]);
  return (
    <div className="contenedor">
      <Header viewReady={viewReady} changeViewReady={changeViewReady}></Header>
      <FormTask Task={Task} changeTask={changeTask}></FormTask>
      <TaskList 
        Task={Task} 
        changeTask={changeTask}  
        viewReady={viewReady}
      ></TaskList>
    </div>
  );
}

export default App;
