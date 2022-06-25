import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare, faEdit, faRectangleTimes, faSquare } from '@fortawesome/free-regular-svg-icons';
const Tasker = ({Task, toggleReady, editTaskValues, deleteTask}) => {
    const[editTask,changeEditTask ] = useState(false);
    const [newTask, changeNewTask] = useState(Task.text);
    const handleSubmit =(e) =>{
        e.preventDefault();
        editTaskValues(Task.id, newTask);
        changeEditTask(false);
    }
    return ( 
        <li className='task-list__task'>

            <FontAwesomeIcon 
                icon={Task.ready ? faCheckSquare: faSquare} 
                className='task-list__icon task-list__icon-check'
                onClick={() => toggleReady(Task.id)}    
            />
           <div className='task-list__text'>
               {editTask ?
                <form action='' className='form-edit-task' onSubmit={handleSubmit}>
                    <input 
                        type='text'
                        className ='form-edit-task__input'
                        value={newTask}
                        onChange={(e)=> changeNewTask(e.target.value)}
                    >
                    </input> 
                    <button
                        type='submit'
                        className='form-edit-task__btn'
                    >
                            Actualizar
                    </button>
                </form>
                :Task.text
               } 
           </div>
           <div className='task-list__container-buttons'>
               <FontAwesomeIcon 
                    icon={faEdit}
                    onClick={() => changeEditTask(!editTask)}
                    className='task-list__icon task-list__icon-action'
                />
               <FontAwesomeIcon 
                    icon={faRectangleTimes}
                    className='task-list__icon task-list__icon-action'
                    onClick={() => deleteTask(Task.id)}
                    />
           </div>
        </li>
    );
}
 
export default Tasker;