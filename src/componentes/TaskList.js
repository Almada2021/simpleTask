import React from 'react';
import Tasker from './Task';
const TaskList = ({Task, changeTask, viewReady}) => {
    const toggleReady = (id) =>
    {
        changeTask(
            Task.map( (Task) => { 
                if(Task.id === id){
                    return {...Task, ready: !Task.ready}
                }    
                return Task;
            
            })
        )
    };
    const editTaskValues = (id, newText) =>
    {
        changeTask(
            Task.map( (Task) => { 
                if(Task.id === id){
                    return {...Task, text: newText}
                }    
                return Task;
            
            })
        )
    };
    const deleteTask = (id) =>{
        changeTask(
            Task.filter( (Task) => { 
                if(Task.id !== id){
                    return Task;
                }               
                return; 
            })
        )
    }
    return (
        <ul className='task-list'>
            {Task.length > 0 ? 

                Task.map((Task) =>{
                    if(viewReady){
                        return( <Tasker key={Task.id} Task={Task} toggleReady={toggleReady} editTaskValues={editTaskValues} deleteTask={deleteTask} ></Tasker>)
                    } else if(!Task.ready){
                        return( <Tasker key={Task.id} Task={Task} toggleReady={toggleReady} editTaskValues={editTaskValues} deleteTask={deleteTask} ></Tasker>)
                    }
                    return;
                })
            : <div className='task-list__message'>~~you not have task~~</div>
            }
        </ul>
    );
}
 
export default TaskList;